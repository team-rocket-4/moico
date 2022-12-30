import { Cafe24ProductCategory } from "./cafe24-product-category";

export interface Cafe24Product {
  shop_no: number;
  product_no: number;
  category: Cafe24ProductCategory[];
  project_no: number[];
  product_code: string;
  custom_product_code: string;
  product_name: string;
  eng_product_name: string;
  model_name: string;
  price_excluding_tax: string;
  price: string;
  retail_price: string;
  detail_image: string;
  list_image: string;
  tiny_image: string;
  small_image: string;
}
