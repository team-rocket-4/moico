import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/router";

export default function DonePage() {
  const { query } = useRouter();

  const { data } = useQuery(["access-token"], async () => {
    const res = await fetch(`/api/access-token?code=${query.code}`);

    console.log(res);

    return res;
  });

  console.log(data);

  return <h1>done</h1>;
}
