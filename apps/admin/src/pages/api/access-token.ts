import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method === "GET") {
    const response = await fetch(
      "https://imjaehoo.cafe24api.com/api/v2/oauth/token",
      {
        method: "POST",
        headers: {
          Authorization: `Basic ${Buffer.from(
            `OwndE7DgN1Nv2RsPA2euHG:${process.env.CAFE24_CLIENT_SECRET}`,
          ).toString("base64")}`,
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: `grant_type=authorization_code&code=${req.query.code}&redirect_uri=https://moico-admin.vercel.app/really-done`,
      },
    );

    const result = await response.json();

    res.status(200).json(result);
  }
}
