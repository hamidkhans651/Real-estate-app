import { integer, pgTable, decimal, serial, text, timestamp, uuid } from 'drizzle-orm/pg-core';

// Define the User table schema
export const usersTable = pgTable('users_table', {
  id: serial('id').primaryKey(),  // Auto-incrementing ID
  name: text('name').notNull(),   // User's name
  email: text('email').notNull().unique(),  // User's email (unique)
  password: text('password').notNull(),  // Hashed password (stored as text)
  createdAt: timestamp('created_at').notNull().defaultNow(), // Timestamp when post is created
  updatedAt: timestamp('updated_at')
    .notNull()
    .$onUpdate(() => new Date()), // Timestamp when post is updated
});
export const users = pgTable('users', {
  id: uuid('id').primaryKey().defaultRandom(), // Auto-incrementing ID
  email: text('email').notNull().unique(), // User's name
  username: text("username").notNull().unique(),
  password: text('password').notNull(),  // Hashed password (stored as text)
  createdAt: timestamp('created_at').notNull().defaultNow(), // Timestamp when post is created
 
});


// Define the Post table schema
export const postsTable = pgTable('posts_table', {
  id: serial('id').primaryKey(), // Auto-incrementing ID
  title: text('title').notNull(), // Title of the post
  content: text('content').notNull(), // Content of the post
  userId: integer('user_id')
    .notNull()
    .references(() => usersTable.id, { onDelete: 'cascade' }), // Foreign key to User
  createdAt: timestamp('created_at').notNull().defaultNow(), // Timestamp when post is created
  updatedAt: timestamp('updated_at')
    .notNull()
    .$onUpdate(() => new Date()), // Timestamp when post is updated
});

// db/schema.ts

export const propertiesTable = pgTable('properties', {
  id: serial('id').primaryKey(), // id should be integer or serial
  name: text('name').notNull(),
  location: text('location').notNull(),
  price: text('price').notNull(),
  description: text('description').notNull(),

});


export type InsertProperty = typeof propertiesTable.$inferInsert;
export type SelectProperty = typeof propertiesTable.$inferSelect;


// Types for inserts and selects
export type InsertUser = typeof usersTable.$inferInsert;
export type SelectUser = typeof usersTable.$inferSelect;

export type InsertPost = typeof postsTable.$inferInsert;
export type SelectPost = typeof postsTable.$inferSelect;
