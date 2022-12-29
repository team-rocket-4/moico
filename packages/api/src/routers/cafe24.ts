import { router, publicProcedure } from "../trpc";
import { z } from "zod";
import { coreApi } from "@moico/api-client";
import qs from "qs";

export const cafe24Router = router({
  accessToken: publicProcedure
    .input(
      z.object({
        mallId: z.string(),
        code: z.string(),
      }),
    )
    .query(async ({ input: { mallId, code } }) => {
      return coreApi.post(
        `https://${mallId}.cafe24api.com/api/v2/oauth/token`,
        qs.stringify({
          grant_type: "authorization_code",
          code,
          redirect_uri: "https://moico-admin.vercel.app/test",
        }),
        {
          headers: {
            Authorization: `Basic ${Buffer.from(
              `OwndE7DgN1Nv2RsPA2euHG:${process.env.CAFE24_CLIENT_SECRET}`,
            ).toString("base64")}`,
          },
        },
      );
    }),
  createScript: publicProcedure
    .input(
      z.object({
        mallId: z.string(),
        accessToken: z.string(),
      }),
    )
    .mutation(async ({ input: { mallId, accessToken } }) => {
      return coreApi.post(
        `https://${mallId}.cafe24api.com/api/v2/admin/scripttags`,
        {
          request: {
            src: "https://moico-admin.vercel.app/recently-seen-products.js",
            display_location: ["PRODUCT_DETAIL"],
          },
        },
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
            "Content-Type": "application/json",
          },
        },
      );
    }),
});
