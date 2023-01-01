import { useQuery } from "@tanstack/react-query";
import { useMallId } from "./useMallId";
import { Cafe24Product } from "../models/Cafe24Product";
import { coreApi } from "@moico/api-client";

const dummyLocalRecentProduct1 = JSON.stringify({
  0: {
    iProductNo: 9,
    sProductName: "샘플상품 1",
    sImgSrc: "imjaehoo_1.gif",
    isAdultProduct: "F",
    link_product_detail: "/product/샘플상품-1/9/display/2/",
    sParam: "?product_no=9&cate_no=1&display_group=2",
  },
});

export function useCurrentProduct() {
  const mallId = useMallId();
  const localRecentProducts = import.meta.env.DEV
    ? dummyLocalRecentProduct1
    : sessionStorage.getItem("localRecentProduct1");
  const localRecentProduct1 = JSON.parse(localRecentProducts ?? "{}");
  const currentProductData = localRecentProduct1[0];

  return useQuery(
    [
      "/cafe24/malls/:mallId/products/:productId}",
      mallId,
      currentProductData?.iProductNo,
    ],
    async () => {
      const res = await coreApi.get<{ productsdetail: Cafe24Product }>(
        `http://localhost:8000/cafe24/malls/${mallId}/products/${currentProductData.iProductNo}`,
      );

      return res.productsdetail;
    },
    {
      enabled: mallId != null && currentProductData?.iProductNo != null,
    },
  );
}
