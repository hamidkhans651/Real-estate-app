ALTER TABLE "users_table" ADD COLUMN "password" text NOT NULL;--> statement-breakpoint
ALTER TABLE "users_table" DROP COLUMN IF EXISTS "age";