import "./style.css";
import getDOMImageElements from "./getDomImages";
import getDOMButtons from "./getDOMButtons";
import { getProductsFromLocalStorage, clearLocalStorage } from "./localStorage";
import data from "./data";

const productsEl = document.querySelector(".products") as HTMLDivElement;
const cartEl = document.querySelector(".cart-icon") as HTMLDivElement;
const cartOverlay = document.querySelector(".cart") as HTMLDivElement;
const closeCart = document.querySelector(".close-cart") as HTMLDivElement;
const clearAllEl = document.querySelector(".clear-all") as HTMLDivElement;
const localStorageEl = document.querySelector(
  ".cart-products"
) as HTMLDivElement;

export interface IProducts {
  id: string;
  name: string;
  image: string;
  price: string;
}

export interface ICart {
  id: string;
  name: string;
  image: string;
  price: string;
  amount: number;
}

const newData: IProducts[] = data;
let cartItems: ICart[] = getProductsFromLocalStorage() || [];

const displayRooms = () => {
  let result = "";
  newData.forEach((room) => {
    result += ` 
        <div class="">
          <div class="image-container" data-id=${room.id}>
          <img src=${room.image} alt="" class="product-image" />
          <Button class="product-btn" data-id=${room.id}>Add to cart</Button>
          </div>
          <p class="product-title">${room.name}</p>
          <p class="product-price">$${room.price}</p>
        </div>`;
  });
  productsEl.innerHTML = result;
  getDOMButtons(newData, cartItems);
  getDOMImageElements();
};

const displayRoomsInLocalStorage = () => {
  let results = "";
  cartItems.forEach((item) => {
    results += `
      <div class="single-cart-product">
            <img src=${item.image} alt="" />
            <div class="cart-product-title">
              <p>${item.name}</p>
              <p>${item.price}</p>
            </div>
            <div class="cart-quantity">
              <p>///</p>
              <p>${item.amount}</p>
              <p>///</p>
            </div>
          </div>
    `;
  });
  localStorageEl.innerHTML = results;
};
document.addEventListener("DOMContentLoaded", () => {
  displayRooms();
  displayRoomsInLocalStorage();
});

cartEl.addEventListener("click", () => {
  cartOverlay.classList.add("show-cart");
  displayRoomsInLocalStorage();
});

closeCart.addEventListener("click", () => {
  cartOverlay.classList.remove("show-cart");
});

clearAllEl?.addEventListener("click", () => {
  clearLocalStorage();
  cartItems = [];
  displayRoomsInLocalStorage();
});
