import { saveTolocalStorage } from "./localStorage";
import { IProducts, ICart } from "./main";

export const getDOMButtons = (newData: IProducts[], cartItems: ICart[]) => {
  const btnsEl = document.querySelectorAll(
    ".product-btn"
  ) as HTMLCollectionBase;
  const btns = Array.from(btnsEl);

  btns.forEach((btn) => {
    const btnEl = btn as HTMLDivElement;
    if (btnEl) {
      const id = btnEl.dataset.id;
      const inCart = cartItems.find((item) => item.id === id);

      if (inCart) {
        const att = document.createAttribute("disable");
        att.value = "true";
        btnEl.setAttributeNode(att);
        btnEl.textContent = "In cart";
      }
    }

    btn.addEventListener("click", (e) => {
      const target = e.target as HTMLButtonElement;
      if (target) {
        const addtocart = newData.find(
          (product) => product.id === target.dataset.id
        );
        if (addtocart) {
          cartItems.push({ ...addtocart, amount: 1 });
        }
        saveTolocalStorage(cartItems);
        target.disabled = true;
        target.textContent = "In cart";
      }
    });
  });
};

export default getDOMButtons;
