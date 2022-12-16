import { useRouter } from "next/router";
import { useEffect } from "react";

export default function TestPage() {
  const { query, replace } = useRouter();

  useEffect(() => {
    const mallId = query.mall_id;

    if (mallId == null) {
      return;
    }

    replace(
      `https://${mallId}.cafe24api.com/api/v2/oauth/authorize?response_type=code&client_id=OwndE7DgN1Nv2RsPA2euHG&state=1234&redirect_uri=https://moico-admin.vercel.app/done&scope=mall.read_application`,
    );
  }, [query.mall_id, replace]);

  return <div>test</div>;
}
