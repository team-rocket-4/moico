import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function Test() {
  const { query, replace } = useRouter();
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

    window.location.href = `http://localhost:3000/test?data=${JSON.stringify(
      data,
    )}`;
  }, [data, mallId]);

  useEffect(() => {
    if (window.location.host !== "localhost" || query.data == null) {
      return;
    }

    localStorage.setItem("@cafe24/auth-info", query.data as string);

    replace("/test");
  }, [query.data, replace]);

  return <h1>Test</h1>;
}
