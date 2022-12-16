import { useRouter } from "next/router";
import { useEffect } from "react";

export default function Cafe24Auth() {
  const { query, replace } = useRouter();

  useEffect(() => {
    const mallId = query.mall_id || process.env.NEXT_PUBLIC_CAFE24_ID;

    if (mallId == null) {
      return;
    }

    sessionStorage.setItem("mallId", mallId as string);
    sessionStorage.setItem(
      "isTest",
      String(Boolean(process.env.NEXT_PUBLIC_CAFE24_ID)),
    );

    replace(
      `https://${mallId}.cafe24api.com/api/v2/oauth/authorize?response_type=code&client_id=OwndE7DgN1Nv2RsPA2euHG&state=1234&redirect_uri=https://moico-admin.vercel.app&scope=mall.read_application`,
    );
  }, [query.mall_id, replace]);

  return <div>test</div>;
}
