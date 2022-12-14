import { useRouter } from "next/router";
import { useEffect } from "react";

const cafe24ClientId = "OwndE7DgN1Nv2RsPA2euHG";

export default function Cafe24Auth() {
  const { query, replace } = useRouter();

  useEffect(() => {
    const mallId = query.mall_id;

    if (mallId == null) {
      return;
    }

    sessionStorage.setItem("@moico/cafe24/mallId", mallId as string);

    replace(
      `https://${mallId}.cafe24api.com/api/v2/oauth/authorize?response_type=code&client_id=${cafe24ClientId}&state=1234&redirect_uri=https://moico-admin.vercel.app/test&scope=mall.read_application,mall.write_application`,
    );
  }, [query.mall_id, replace]);

  return (
    <div>
      <div>Cafe24 Auth</div>
      <button>설치</button>
    </div>
  );
}
