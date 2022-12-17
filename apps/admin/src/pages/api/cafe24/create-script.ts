import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method === "POST") {
    const body = JSON.parse(req.body);

    const response = await fetch(
      `https://${body.mallId}.cafe24api.com/api/v2/admin/scripttags`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${body.accessToken}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          request: {
            src: "https://yourdomain-sample.com/sample-script.js",
            display_location: ["PRODUCT_DETAIL"],
          },
        }),
      },
    );

    const result = await response.json();

    res.status(201).json(result);
  }
}
