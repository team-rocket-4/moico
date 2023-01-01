import { useProductHistory } from "./hooks/useProductHistory";

export function RecentlySeenProducts() {
  const productHistory = useProductHistory();

  console.log(productHistory);

  return <h3>최근에 본 상품</h3>;
}
