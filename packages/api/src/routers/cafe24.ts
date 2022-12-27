import { router, publicProcedure } from "../trpc";
import { z } from "zod";

export const cafe24Router = router({
  accessToken: publicProcedure
    .input(
      z.object({
        code: z.string(),
        mallId: z.string(),
      }),
    )
    .query(async ({ input: { code, mallId } }) => {
      const res = await fetch(
        `/api/cafe24/access-token?code=${code}&mallId=${mallId}`,
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
      const response = await fetch(
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

      return response.json();
    }),
});
