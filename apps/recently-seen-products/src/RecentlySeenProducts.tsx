import { useEffect } from "react";
import { useProductHistory } from "./hooks/useProductHistory";

export function RecentlySeenProducts() {
  const { data, update } = useProductHistory();

  useEffect(update, []);

  console.log(data);

  return <h3>최근에 본 상품</h3>;
}
