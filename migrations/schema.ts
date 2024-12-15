import { pgTable, unique, serial, varchar, text, timestamp, boolean } from "drizzle-orm/pg-core"



export const users = pgTable("users", {
	id: serial().primaryKey().notNull(),
	name: varchar({ length: 255 }).notNull(),
	email: varchar({ length: 255 }).notNull(),
	password: text().notNull(),
}, (table) => {
	return {
		usersEmailUnique: unique("users_email_unique").on(table.email),
	}
});

export const admin = pgTable("admin", {
	id: text().primaryKey().notNull(),
	email: varchar({ length: 255 }).notNull(),
	password: text().notNull(),
	createdAt: timestamp("created_at", { mode: 'string' }).defaultNow(),
	isAdmin: boolean("is_admin").default(false),
}, (table) => {
	return {
		adminEmailUnique: unique("admin_email_unique").on(table.email),
	}
});
