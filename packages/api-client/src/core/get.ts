export async function get(
  url: string,
  queryParams?: URLSearchParams,
  options: Omit<RequestInit, "method" | "body"> = {},
) {
  const res = await fetch(
    `${url}${
      queryParams == null ? "" : `?${new URLSearchParams(queryParams)}`
    }`,
    {
      credentials: "include",
      ...options,
    },
  );

  if (!res.ok) {
    throw new Error(await res.text());
  }

  return res.json();
}
