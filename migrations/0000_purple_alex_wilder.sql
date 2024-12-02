CREATE TABLE IF NOT EXISTS "users_table" (
	"id" serial PRIMARY KEY NOT NULL,
	"username" text NOT NULL,
	"email" text NOT NULL,
	"password" text NOT NULL,
	"is_verified" boolean DEFAULT false,
	"is_admin" boolean DEFAULT false,
	"forgot_password_token" text,
	"forgot_password_token_expiry" timestamp,
	"verify_token" text,
	"verify_token_expiry" timestamp,
	CONSTRAINT "users_table_username_unique" UNIQUE("username"),
	CONSTRAINT "users_table_email_unique" UNIQUE("email")
);
