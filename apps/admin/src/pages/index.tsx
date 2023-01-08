import { ChangeEvent, useState } from "react";
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
    <div className="m-auto flex h-screen flex-col items-center justify-center">
      <div className="mb-11">
        <img src="images/moico.svg" alt="로고" />
      </div>
      <div className="bg-moico-gray-100 flex w-96 flex-row gap-5 rounded-lg p-8">
        <img src="images/icon.svg" alt="아이콘" className="h-10 w-10" />
        <div className="flex flex-col">
          <div className="mb-3 flex justify-between">
            <span className="text-xl font-semibold">최근에 본 상품</span>
            <div>
              <label className=" relative inline-flex cursor-pointer items-center">
                <input
                  type="checkbox"
                  className="peer sr-only"
                  checked={isToggled}
                  onChange={handleChangeToggle}
                />
                <div className="peer-checked:bg-moico-blue-100 peer h-6 w-9 rounded-full bg-gray-200 after:absolute after:top-0.5 after:left-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:after:translate-x-3 peer-checked:after:border-white  dark:border-gray-600 dark:bg-gray-700 "></div>
              </label>
            </div>
          </div>
          <p className="mb-2 text-base">
            구매자에게 최근에 본 상품을 효과적으로 노출해 구매율을 향상해보세요!
          </p>
          <span className="text-moico-gray-900 text-xs">
            ※ 앱을 활성화하면 상품 상세페이지에 스크립트를 설치해요.
          </span>
        </div>
      </div>
    </div>
  );
}
