import { useMutation } from "@tanstack/react-query";

export default function AdminHome() {
  const { mutateAsync: createScript } = useMutation(() => {
    const rawAuthInfo = localStorage.getItem("@moico/cafe24/auth-info");
    const authInfo = rawAuthInfo == null ? null : JSON.parse(rawAuthInfo);

    return fetch("/api/cafe24/create-script", {
      method: "POST",
      body: JSON.stringify({
        mallId: authInfo?.mall_id,
        accessToken: authInfo?.access_token,
      }),
    });
  });

  return (
    <div>
      <div>Admin Home</div>
      <button
        onClick={async () => {
          const result = await createScript();
          console.log(result);
        }}
      >
        설치
      </button>
    </div>
  );
}
