"use server";

import db from "@/db/db";
import { users, usersTable } from "@/db/schema";
import { genSaltSync, hashSync } from "bcrypt-ts";
import { count, ilike, or } from "drizzle-orm";

import { compareSync } from "bcrypt-ts";

export interface LoginInput {
    email: string;
    password: string;
}





interface GetUsersInput {
    page: number;
    totalItems: number;
    search?: string | null;
}

export interface GetUsersResponse {
    items: typeof usersTable[];
    totalPages: number;
}



export async function getUsers(
    input: GetUsersInput
): Promise<GetUsersResponse> {
    try {
        const offset = (input.page - 1) * input.totalItems;
        const limit = input.totalItems;

        const [totalCount] = await db
            .select({ count: count() })
            .from(users)
            .where(
                or(
                    input.search ? ilike(users.email, `%${input.search}%`) : undefined,
                    input.search ? ilike(users.username, `%${input.search}%`) : undefined
                )
            );

        const totalPages = Math.ceil(totalCount.count / limit);

        const items = await db
            .select()
            .from(users)
            .where(
                or(
                    input.search ? ilike(users.email, `%${input.search}%`) : undefined,
                    input.search ? ilike(users.username, `%${input.search}%`) : undefined
                )
            )
            .offset(offset)
            .limit(limit);

        return {
            items: [],
            totalPages,
        };
    } catch (e) {
        throw e;
    }
}

interface CreateUserInput {
    username: string;
    email: string;
    password: string;
}

export async function createUser(input: CreateUserInput) {
    try {
        // Check if the email or username already exists
        const existingUser = await db
            .select()
            .from(users)
            .where(
                or(
                    ilike(users.email, input.email),
                    ilike(users.username, input.username)
                )
            )
            .limit(1);

        if (existingUser.length > 0) {
            throw new Error("Email or username already exists.");
        }
        const salt = genSaltSync(10);
        const hash = hashSync(input.password, salt);

        await db.insert(users).values({
            username: input.username,
            email: input.email,
            password: hash,
        });
    } catch (e) {
        throw e;
    }
}

export async function verifyUser(input: LoginInput): Promise<boolean> {
    try {
        const user = await db
            .select()
            .from(users)
            .where(ilike(users.email, input.email))
            .limit(1);

        if (user.length === 0) {
            throw new Error("Invalid email or password");
        }

        const isPasswordValid = compareSync(input.password, user[0].password);

        if (!isPasswordValid) {
            throw new Error("Invalid email or password");
        }

        return true; // Login success
    } catch (e) {
        throw e;
    }
}

