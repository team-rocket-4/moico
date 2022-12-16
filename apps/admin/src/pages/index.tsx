import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function AdminHome() {
  const { query } = useRouter();
  const mallId =
    typeof window !== "undefined" ? sessionStorage.getItem("mallId") : null;

  const { data } = useQuery(
    ["access-token"],
    async () => {
      const res = await fetch(
        `/api/access-token?code=${query.code}&mallId=${mallId}`,
      );

      const result = await res.json();

      return result;
    },
    {
      enabled: query.code != null && mallId != null,
    },
  );

  useEffect(() => {
    if (data == null) {
      return;
    }

    window.location.href = `http://localhost:3000/done?data=${JSON.stringify(
      data,
    )}`;
  }, [data, mallId]);

  return <h1>done</h1>;
}
