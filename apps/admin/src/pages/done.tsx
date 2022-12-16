import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/router";

export default function DonePage() {
  const { query } = useRouter();

  const { data } = useQuery(
    ["access-token"],
    async () => {
      const res = await fetch(`/api/access-token?code=${query.code}`);

      const result = await res.json();
      console.log(result);

      return result;
    },
    {
      enabled: query.code != null,
    },
  );

  console.log(data);

  return <h1>done</h1>;
}
