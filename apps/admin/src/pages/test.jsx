import { useRouter } from "next/router";

export default function TestPage() {
  const router = useRouter();

  console.log(router.query);

  return (
    <div>
      test
      <button
        onClick={() => {
          router.replace(
            `https://imjaehoo.cafe24api.com/api/v2/oauth/authorize?response_type=code&client_id=OwndE7DgN1Nv2RsPA2euHG&state=1234&redirect_uri=https://moico-admin.vercel.app/done&scope=mall.read_application`,
          );
        }}
      >
        go
      </button>
    </div>
  );
}
