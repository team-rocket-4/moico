export async function deleteRequest<ResponseType>(
  url: string,
  options: Omit<RequestInit, 'method' | 'body'> = {},
) {
  const res = await fetch(url, {
    method: 'DELETE',
    credentials: 'include',
    ...options,
  });

  if (!res.ok) {
    throw new Error(await res.text());
  }

  return res.json() as ResponseType;
}
