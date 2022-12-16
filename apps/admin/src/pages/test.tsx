import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/router";

export default function TestPage() {
  const { query } = useRouter();
  const mallId = query.mall_id;
  const { data } = useQuery(
    ["code"],
    () => {
      return fetch(
        `https://${mallId}.cafe24api.com/api/v2/oauth/authorize?response_type=code&client_id=OwndE7DgN1Nv2RsPA2euHG&redirect_uri=https://moico-admin.vercel.app/done&scope=mall.read_application`,
      );
    },
    {
      enabled: mallId != null,
    },
  );

  console.log(data);

  return <div>test</div>;
}
