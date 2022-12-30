import { trpc } from "../utils/trpc";

export function Test() {
  const { data } = trpc.cafe24.product.useQuery({
    mallId: "imjaehoo",
    productId: 9,
  });

  console.log(data);

  return null;
}
