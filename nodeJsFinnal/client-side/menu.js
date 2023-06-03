import {
  decrementCounter,
  incrementCounter,
} from "./global-functions/globalFunctions.js";
import { gettingImg,addingToCart } from "./menuController.js";
const mainBody = document.querySelector("#mainBody");

export function renderMenu1(arrayFromData) {
  const container = document.createElement("div");
  container.classList.add("container", "mt-4");

  const row = document.createElement("div");
  row.classList.add("row", "justify-content-center");

  arrayFromData.forEach((menuItem) => {
    const col = document.createElement("div");
    col.classList.add("col-md-6", "mb-4");

    const card = document.createElement("div");
    card.classList.add("card");

    const cardBody = document.createElement("div");
    cardBody.classList.add("card-body");

    const mealImage = document.createElement("img");
    mealImage.classList = "meal-image text-center ";
    mealImage.src = gettingImg(menuItem.img);
    mealImage.src = menuItem.img;
    mealImage.style.width = "100%";
    mealImage.style.height = "12rem";

    const cardTitle = document.createElement("h5");
    cardTitle.classList = "text-center card-title";
    cardTitle.textContent = menuItem.name;

    const cardText = document.createElement("p");
    cardText.classList = "text-center card-text";
    cardText.textContent = menuItem.description;

    const cardPrice = document.createElement("p");
    cardPrice.classList = "text-center card-text";
    cardPrice.textContent = menuItem.price;

    const inputGroup = document.createElement("div");
    (inputGroup.classList = "input-group"), "mb-3";

    const inputField = document.createElement("input");
    inputField.classList.add("form-control", "text-center");
    inputField.setAttribute("type", "text");
    inputField.value = 0;
    inputField.setAttribute("readonly", "true");

    const incrementButton = document.createElement("button");
    incrementButton.classList.add("btn", "btn-outline-secondary");
    incrementButton.setAttribute("type", "button");
    incrementButton.textContent = "+";
    incrementButton.addEventListener("click", () => {
      incrementCounter(inputField);
    });

    const addToCartButton = document.createElement("button");
    addToCartButton.classList.add("btn", "btn-primary");
    addToCartButton.textContent = "Add to Cart";
    addToCartButton.addEventListener("click", async () => {
      const quantity = parseInt(inputField.value);
      if (quantity > 0) {
        menuItem.quantity = quantity;
        addingToCart(menuItem)
        alert("Added to cart: " + quantity + " item(s)");
      }
    });

    const decrementButton = document.createElement("button");
    decrementButton.classList.add("btn", "btn-outline-secondary");
    decrementButton.setAttribute("type", "button");
    decrementButton.textContent = "-";
    decrementButton.addEventListener("click", () => {
      decrementCounter(inputField);
    });

    inputGroup.append(decrementButton, inputField, incrementButton);
    cardBody.append(
      mealImage,
      cardTitle,
      cardText,
      cardPrice,
      inputGroup,
      addToCartButton
    );
    card.appendChild(cardBody);
    col.appendChild(card);
    row.appendChild(col);
  });

  container.appendChild(row);
  mainBody.appendChild(container);
}
