import { trpc } from "../utils/trpc";

export default function AdminHome() {
  const { mutateAsync: createScript } = trpc.cafe24.createScript.useMutation();
  const { mutateAsync: removeScript } = trpc.cafe24.removeScript.useMutation();

  return (
    <div>
      <div>Admin Home</div>
      <button
        onClick={async () => {
          const rawAuthInfo = localStorage.getItem("@moico/cafe24/auth-info");
          const authInfo = rawAuthInfo == null ? null : JSON.parse(rawAuthInfo);

          const result = await createScript({
            mallId: authInfo?.mall_id,
            accessToken: authInfo?.access_token,
          });

          console.log(result);
        }}
      >
        설치
      </button>
      <button
        onClick={async () => {
          const rawAuthInfo = localStorage.getItem("@moico/cafe24/auth-info");
          const authInfo = rawAuthInfo == null ? null : JSON.parse(rawAuthInfo);

          const result = await removeScript({
            mallId: authInfo?.mall_id,
            accessToken: authInfo?.access_token,
          });

          console.log(result);
        }}
      >
        삭제
      </button>
    </div>
  );
}
