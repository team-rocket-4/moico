import { ChangeEvent, useEffect, useState } from "react";
import { trpc } from "../utils/trpc";

const removeApp = () => {};
export default function AdminHome() {
  const { mutateAsync: createScript } = trpc.cafe24.createScript.useMutation();
  const { mutateAsync: removeScript } = trpc.cafe24.removeScript.useMutation();
  const [isToggled, setIsToggled] = useState<boolean>(false);

  const installApp = async () => {
    const rawAuthInfo = localStorage.getItem("@moico/cafe24/auth-info");
    const authInfo = rawAuthInfo == null ? null : JSON.parse(rawAuthInfo);
    const result = await createScript({
      mallId: authInfo?.mall_id,
      accessToken: authInfo?.access_token,
    });
    console.log(result);
  };

  const removeApp = async () => {
    const rawAuthInfo = localStorage.getItem("@moico/cafe24/auth-info");
    const authInfo = rawAuthInfo == null ? null : JSON.parse(rawAuthInfo);

    const result = await removeScript({
      mallId: authInfo?.mall_id,
      accessToken: authInfo?.access_token,
    });

    console.log(result);
  };

  const handleChangeToggle = (e: ChangeEvent<HTMLInputElement>) => {
    const { checked } = e.target;

    if (checked) {
      installApp();
    } else {
      removeApp();
    }
    setIsToggled(!isToggled);
  };
  return (
    <div>
      <div>Admin Home</div>

      <div>
        <div>
          <img src="" />
          최근에 본 상품
          <label className="relative inline-flex cursor-pointer items-center">
            <input
              type="checkbox"
              className="peer sr-only"
              checked={isToggled}
              onChange={handleChangeToggle}
            />
            <div className="peer h-6 w-11 rounded-full bg-gray-200 after:absolute after:top-0.5 after:left-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-blue-600 peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:ring-4 peer-focus:ring-blue-300 dark:border-gray-600 dark:bg-gray-700 dark:peer-focus:ring-blue-800"></div>
          </label>
        </div>
        <p>
          구매자에게 최근에 본 상품을 효과적으로 노출해 구매율을 향상해보세요!
        </p>
        <span>※ 앱을 활성화하면 상품 상세페이지에 스크립트를 설치해요.</span>
      </div>
    </div>
  );
}
