import { coreApi } from "@moico/api-client";
import { router, publicProcedure } from "../trpc";
import { z } from "zod";

interface AccessTokenResponse {
  access_token: string;
  expires_at: string;
  refresh_token: string;
  refresh_token_expires_at: string;
  client_id: string;
  mall_id: string;
  user_id: string;
  scopes: string[];
  issued_at: string;
}

interface ScriptTag {
  shop_no: number;
  script_no: string;
  client_id: string;
  src: string;
  display_location: string[];
  exclude_path: string[];
  skin_no: number[];
  integrity: string;
  created_date: string;
  updated_date: string;
}

interface CreateScriptResponse {
  scripttag: ScriptTag;
}

interface GetScriptsResponse {
  scripttags: ScriptTag[];
}

// TODO(@Jaehoo-dev): 카페24 공통 라우터와 각 앱 라우터 분리
export const cafe24Router = router({
  accessToken: publicProcedure
    .input(
      z.object({
        mallId: z.string(),
        code: z.string(),
      }),
    )
    .query(async ({ input: { mallId, code } }) => {
      return coreApi.post<AccessTokenResponse>(
        `https://${mallId}.cafe24api.com/api/v2/oauth/token`,
        {
          grant_type: "authorization_code",
          code,
          redirect_uri: "https://moico-admin.vercel.app/test",
        },
        {
          headers: {
            Authorization: `Basic ${Buffer.from(
              `OwndE7DgN1Nv2RsPA2euHG:${process.env.CAFE24_CLIENT_SECRET}`,
            ).toString("base64")}`,
            "Content-Type": "application/x-www-form-urlencoded",
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
    .mutation(({ input: { mallId, accessToken } }) => {
      return coreApi.post<CreateScriptResponse>(
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
          },
        },
      );
    }),
  removeScript: publicProcedure
    .input(
      z.object({
        mallId: z.string(),
        accessToken: z.string(),
      }),
    )
    .mutation(async ({ input: { mallId, accessToken } }) => {
      const { scripttags: scripts } = await coreApi.get<GetScriptsResponse>(
        `https://${mallId}.cafe24api.com/api/v2/admin/scripttags`,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        },
      );
      const target = scripts.find((script) => {
        return (
          script.src ===
          "https://moico-admin.vercel.app/recently-seen-products.js"
        );
      });

      return coreApi.delete<{ scripttage: { script_no: string } }>(
        `https://${mallId}.cafe24api.com/api/v2/admin/scripttags/${target?.script_no}`,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        },
      );
    }),
});
