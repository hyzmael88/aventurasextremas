import { category } from "./schemas/category";
import { gender } from "./schemas/gender";
import { product } from "./schemas/product";
import { size } from "./schemas/size";

export const schema = {
  types: [product, size, category,gender],
}
