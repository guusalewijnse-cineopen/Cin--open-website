import { pgTable, serial, text, timestamp, uniqueIndex } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod/v4";

export const subscribersTable = pgTable(
  "subscribers",
  {
    id: serial("id").primaryKey(),
    email: text("email").notNull(),
    createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
  },
  (table) => ({
    emailUnique: uniqueIndex("subscribers_email_unique").on(table.email),
  }),
);

export const insertSubscriberSchema = createInsertSchema(subscribersTable).omit({
  id: true,
  createdAt: true,
});
export type InsertSubscriber = z.infer<typeof insertSubscriberSchema>;
export type Subscriber = typeof subscribersTable.$inferSelect;
