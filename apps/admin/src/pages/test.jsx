import { useRouter } from "next/router";
import { useEffect } from "react";

export default function TestPage() {
  const router = useRouter();

  useEffect(() => {
    `https://${query.mall_id}.cafe24api.com/api/v2/oauth/authorize?response_type=code&client_id=OwndE7DgN1Nv2RsPA2euHG&state=1234&redirect_uri=https://moico-admin.vercel.app&scope=mall.read_application`,
      router.replace();
  });

  return <div>test</div>;
}
