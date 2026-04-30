import { Router, type IRouter } from "express";
import { SubscribeEmailBody, SubscribeEmailResponse } from "@workspace/api-zod";
import { db, subscribersTable } from "@workspace/db";
import { eq } from "drizzle-orm";

const router: IRouter = Router();

router.post("/subscribers", async (req, res) => {
  const parsed = SubscribeEmailBody.safeParse(req.body);
  if (!parsed.success) {
    res.status(400).json({ error: "Vul een geldig e-mailadres in." });
    return;
  }

  const email = parsed.data.email.trim().toLowerCase();

  const existing = await db
    .select({ id: subscribersTable.id })
    .from(subscribersTable)
    .where(eq(subscribersTable.email, email))
    .limit(1);

  if (existing.length > 0) {
    res.json(SubscribeEmailResponse.parse({ ok: true, alreadySubscribed: true }));
    return;
  }

  await db.insert(subscribersTable).values({ email });
  req.log.info({ email }, "new subscriber");

  res.json(SubscribeEmailResponse.parse({ ok: true, alreadySubscribed: false }));
});

export default router;
