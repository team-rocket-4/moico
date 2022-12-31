const dummyItem = JSON.stringify({
  "0": {
    iProductNo: 9,
    sProductName: "샘플상품 1",
    sImgSrc: "imjaehoo_1.gif",
    isAdultProduct: "F",
    link_product_detail: "/product/샘플상품-1/9/display/2/",
    sParam: "?product_no=9&cate_no=1&display_group=2",
  },
});

export function useCurrentProduct() {
  const item = import.meta.env.DEV
    ? dummyItem
    : sessionStorage.getItem("localRecentProduct1");

  if (item == null) {
    return null;
  }

  const localRecentProduct1 = JSON.parse(item);
  const currentProductData = localRecentProduct1[0];

  return currentProductData;
}
