import { useEffect, useState } from "react";
import { useCurrentProduct } from "./useCurrentProduct";

const key = "@moico/cafe24/recently-seen-products";

interface Product {
  iProductNo: number;
}

export function useProductHistory() {
  const currentProduct = useCurrentProduct();
  const saved = localStorage.getItem(key);
  const [history, setHistory] = useState<Product[]>(
    saved == null ? [] : JSON.parse(saved),
  );

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(history));
  }, [history]);

  const update = () => {
    const index = history.findIndex((item) => {
      return item.iProductNo === currentProduct.iProductNo;
    });

    setHistory((history) => {
      if (index > -1) {
        history.splice(index, 1);
      }

      history.push(currentProduct);

      return history;
    });
  };

  return {
    data: history.slice(-11, -1),
    update,
  };
}
