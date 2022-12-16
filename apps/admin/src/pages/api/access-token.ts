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
            "OwndE7DgN1Nv2RsPA2euHG:OwndE7DgN1Nv2RsPA2euHG",
          ).toString("base64")}`,
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: `grant_type=authorization_code&code=${req.query.code}&redirect_uri=https://moico-admin.vercel.app/really-done`,
      },
    );

    console.log(response);

    const result = await response.json();

    console.log(result);

    res.status(200).json(result);
  }
}
