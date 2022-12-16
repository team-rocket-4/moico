import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function DonePage() {
  const { query } = useRouter();

  const { data } = useQuery(
    ["access-token"],
    async () => {
      const res = await fetch(`/api/access-token?code=${query.code}`);

      const result = await res.json();

      return result;
    },
    {
      enabled: query.code != null,
    },
  );

  useEffect(() => {
    if (data == null) {
      return;
    }

    window.location.href = `http://localhost:3000/done?data=${JSON.stringify(
      data,
    )}`;
  }, [data]);

  return <h1>done</h1>;
}
