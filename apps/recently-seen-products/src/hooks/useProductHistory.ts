import { useEffect, useState } from "react";
import { useCurrentProduct } from "./useCurrentProduct";

const key = "@moico/cafe24/recently-seen-products";

interface HistoryItem {
  id: number;
  imagePath: string;
}

export function useProductHistory() {
  const { data: currentProduct } = useCurrentProduct();
  const saved = localStorage.getItem(key);
  const [history, setHistory] = useState<HistoryItem[]>(
    saved == null ? [] : JSON.parse(saved),
  );

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(history));
  }, [history]);

  const update = () => {
    if (currentProduct == null) {
      return;
    }

    const index = history.findIndex((item) => {
      return item.id === currentProduct.product_no;
    });

    setHistory((history) => {
      if (index > -1) {
        history.splice(index, 1);
      }

      history.push({
        id: currentProduct.product_no,
        imagePath: currentProduct.small_image,
      });

      return history;
    });
  };

  return {
    data: history.slice(-11, -1),
    update,
  };
}
