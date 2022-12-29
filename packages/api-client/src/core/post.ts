import qs from "qs";

export async function post(
  url: string,
  data: Record<string, unknown>,
  options: Omit<RequestInit, "method" | "body"> = {},
) {
  const { headers: _headers, ...restOptions } = options;
  const headers = new Headers(_headers);
  headers.set(
    "Content-Type",
    headers.get("Content-Type") ?? "application/json",
  );

  const res = await fetch(url, {
    method: "POST",
    body:
      headers.get("Content-Type") === "application/x-www-form-urlencoded"
        ? qs.stringify(data)
        : JSON.stringify(data),
    credentials: "include",
    headers,
    ...restOptions,
  });

  if (!res.ok) {
    throw new Error(await res.text());
  }

  return res.json();
}
