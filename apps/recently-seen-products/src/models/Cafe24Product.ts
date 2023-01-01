export interface Cafe24Product {
  shop_no: number;
  product_no: number;
  detail_image: string;
  small_image: string;
  additional_images: Array<{
    big: string;
    medium: string;
    small: string;
  }>;
  product_name: string;
  retail_price: string;
  price: string;
}
