export function useMallId() {
  // TODO(@Jaehoo-dev): 로컬 환경변수에 아이디 설정해서 사용
  return import.meta.env.DEV ? "imjaehoo" : window.CAFE24API.MALL_ID;
}
