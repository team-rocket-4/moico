import { useQuery } from "@tanstack/react-query";
import { coreApi } from "@moico/api-client";

export function Test() {
  const { data } = useQuery(["test"], () => {
    return coreApi.get("http://localhost:8000");
  });

  console.log(data);

  return null;
}
