export async function get<ResponseType>(
  url: string,
  options: Omit<RequestInit, "method" | "body"> = {},
) {
  const res = await fetch(url, options);

  if (!res.ok) {
    throw new Error(await res.text());
  }

  return res.json() as ResponseType;
}
