import { useRouter } from "next/router";
import { useEffect } from "react";
import { trpc } from "../utils/trpc";

export default function Test() {
  const { query, replace } = useRouter();
  const mallId =
    typeof window !== "undefined"
      ? sessionStorage.getItem("@moico/cafe24/mallId")
      : null;

  const { data } = trpc.cafe24.accessToken.useQuery(
    {
      code: query.code as string,
      mallId: mallId as string,
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
    if (window.location.hostname !== "localhost" || query.data == null) {
      return;
    }

    localStorage.setItem("@moico/cafe24/auth-info", query.data as string);

    replace("/");
  }, [query.data, replace]);

  return <h1>Test</h1>;
}
