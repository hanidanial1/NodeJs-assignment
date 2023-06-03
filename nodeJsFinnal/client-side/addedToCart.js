import {
  buildDiv,
  createButton,
  decrementCounter,
  incrementCounter,
} from "./global-functions/globalFunctions.js";
import { getAddedMeals, deletingAddedMeal,updateMeal } from "./menuController.js";

const mainBody = document.querySelector("#mainBody");

const mainContainer = {
  class: "container ",
  style: {
    margin: "auto",
  },
};

const rowDiv = {
  class: "row m-auto mt-1",
};

const col = {
  class: "col-4 mt-1",
};

const col8 = {
  class: "col-8 mt-1",
};

const internalRow = {
  class: "row align-items-start justify-content-center col-sm-12",
};

export async function renderingAddedToCart(addedMeals) {
  addedMeals.forEach((meal) => {
    const mainContainer1 = buildDiv(mainContainer);
    const col_8 = buildDiv(col8);
    const col_4 = buildDiv(col);
    const bigRow = buildDiv(rowDiv);
    const internalRow1 = buildDiv(internalRow);
    const img = document.createElement("img");
    const h2 = document.createElement("h2");
    const p = document.createElement("p");
    const h4 = document.createElement("h4");

    p.textContent = meal.description;
    h2.textContent = meal.name;
    img.src = meal.img;
    img.classList = "img-fluid text-center";
    img.style.width = "100%";
    // img.classList ="text-center"
    img.style.minHeight = "100px";
    img.style.minWidth = "100px";
    h4.textContent = `${meal.quantity} X quantity`;
    h4.classList = "m-3";
    p.classList = "text-center";

    const newBtn = createButton(
      "Delete This Order",
      "btn  btn-danger text-center m-2 m-auto",
      async () => {
        const data = await deletingAddedMeal(meal._id);
        mainBody.innerHTML = " ";
        renderingAddedToCart(data);
      },
      "",
      ""
    );

    const edit = createButton(
      "Edit Order ",
      "btn  btn-danger text-center mx-4",
      async () => {
        const inputField = document.createElement("input");
        inputField.classList.add("form-control", "text-center");
        inputField.setAttribute("type", "text");
        inputField.value = meal.quantity;
        inputField.setAttribute("readonly", "true");

        const incrementButton = document.createElement("button");
        incrementButton.classList = "btn btn-outline-secondary mb-2 mt-2";
        incrementButton.setAttribute("type", "button");
        incrementButton.textContent = "+";
        incrementButton.addEventListener("click", () => {
          incrementCounter(inputField);
        });

        const submitEdit = document.createElement("button");
        submitEdit.textContent = "Submit Change";
        submitEdit.classList = "btn  btn-danger text-center mx-4";
        submitEdit.addEventListener("click", async () => {
          const quantity = parseInt(inputField.value);
          if (quantity >= 1) {
            try {
              meal.quantity = inputField.value;
              h4.textContent = meal.quantity + " X quantity";
              updateMeal(meal._id, meal)
              col_8.append(p, newBtn, edit);
              decrementButton.remove(decrementButton);
              incrementButton.remove(incrementButton);
              inputField.remove(inputField);
              submitEdit.remove(submitEdit);
            } catch (error) {
              throw console.log(error);
            }
          }
        });

        const decrementButton = document.createElement("button");
        decrementButton.classList = "btn btn-outline-secondary mb-2 mt-2 mx-2";
        decrementButton.setAttribute("type", "button");
        decrementButton.textContent = "-";
        decrementButton.addEventListener("click", () => {
          decrementCounter(inputField);
        });

        h4.after(inputField, decrementButton, incrementButton, submitEdit);
        edit.remove();
      },
      "",
      ""
    );

    const hr = document.createElement("hr");
    const hr1 = document.createElement("hr");

    internalRow1.append(img, h4, hr1);
    col_4.appendChild(internalRow1);
    col_8.append(p, newBtn, edit);
    bigRow.append(col_4, col_8);
    mainContainer1.append(h2, bigRow, hr);
    mainBody.append(mainContainer1);
  });
}
