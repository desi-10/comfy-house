import { ICart } from "./main";

export const getProductsFromLocalStorage = (): ICart[] | null => {
  const cart = localStorage.getItem("products");
  if (cart) {
    return JSON.parse(cart);
  }
  return null;
};

export const saveTolocalStorage = (newProducts: ICart[]) => {
  localStorage.setItem("products", JSON.stringify(newProducts));
};

export const clearLocalStorage = () => {
  localStorage.removeItem("products");
};
