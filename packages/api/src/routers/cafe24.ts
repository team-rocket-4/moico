import { router, publicProcedure } from "../trpc";
import { z } from "zod";

export const cafe24Router = router({
  accessToken: publicProcedure
    .input(
      z.object({
        mallId: z.string(),
        code: z.string(),
      }),
    )
    .query(async ({ input: { mallId, code } }) => {
      const res = await fetch(
        `https://${mallId}.cafe24api.com/api/v2/oauth/token`,
        {
          method: "POST",
          headers: {
            Authorization: `Basic ${Buffer.from(
              `OwndE7DgN1Nv2RsPA2euHG:${process.env.CAFE24_CLIENT_SECRET}`,
            ).toString("base64")}`,
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: `grant_type=authorization_code&code=${code}&redirect_uri=https://moico-admin.vercel.app/test`,
        },
      );

      return res.json();
    }),
  createScript: publicProcedure
    .input(
      z.object({
        mallId: z.string(),
        accessToken: z.string(),
      }),
    )
    .mutation(async ({ input: { mallId, accessToken } }) => {
      const res = await fetch(
        `https://${mallId}.cafe24api.com/api/v2/admin/scripttags`,
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${accessToken}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            request: {
              src: "https://moico-admin.vercel.app/recently-seen-products.js",
              display_location: ["PRODUCT_DETAIL"],
            },
          }),
        },
      );

      return res.json();
    }),
});
