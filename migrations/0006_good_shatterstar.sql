ALTER TABLE "properties" ALTER COLUMN "price" SET DATA TYPE text;--> statement-breakpoint
ALTER TABLE "properties" DROP COLUMN IF EXISTS "created_at";--> statement-breakpoint
ALTER TABLE "properties" DROP COLUMN IF EXISTS "updated_at";