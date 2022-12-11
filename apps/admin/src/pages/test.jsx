import { useRouter } from "next/router";

export default function TestPage() {
  const { query } = useRouter();

  console.log(query);

  return (
    <div>
      test
      <button
        onClick={async () => {
          const res = await fetch(
            "https://imjaehoo.cafe24api.com/api/v2/oauth/authorize?response_type=code&client_id=OwndE7DgN1Nv2RsPA2euHG&state=1234&redirect_uri=https://moico-admin.vercel.app&scope=mall.read_application",
          );

          const data = await res.json();

          console.log(data);
        }}
      >
        OK
      </button>
    </div>
  );
}
