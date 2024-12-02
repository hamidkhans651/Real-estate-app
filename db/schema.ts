import { integer, pgTable, serial, text, timestamp,boolean } from 'drizzle-orm/pg-core';

export const userstable = pgTable('users_table', {
  id: serial("id").primaryKey(), // Auto-incrementing primary key
  username: text("username").notNull().unique(), // Unique username
  email: text("email").notNull().unique(), // Unique email
  password: text("password").notNull(), // Hashed password
  isVerified: boolean("is_verified").default(false), // Corrected boolean field
  isAdmin: boolean("is_admin").default(false), // Corrected boolean field
  forgotPasswordToken: text("forgot_password_token"), // Optional field
  forgotPasswordTokenExpiry: timestamp("forgot_password_token_expiry"), // Optional field
  verifyToken: text("verify_token"), // Optional field
  verifyTokenExpiry: timestamp("verify_token_expiry"), // Optional field
});

;




export type InsertUser = typeof userstable.$inferInsert;
export type SelectUser = typeof userstable.$inferSelect;

