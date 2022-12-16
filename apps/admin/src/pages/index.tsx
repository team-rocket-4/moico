import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function AdminHome() {
  const { query } = useRouter();
  const mallId = sessionStorage.getItem("mallId");
  const 테스트인가 = sessionStorage.getItem("isTest") === "true";

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
    if (data == null || !테스트인가) {
      return;
    }

    window.location.href = `http://localhost:3000/done?data=${JSON.stringify(
      data,
    )}`;
  }, [data, mallId, 테스트인가]);

  return <h1>done</h1>;
}
