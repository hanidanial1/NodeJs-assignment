import { gettingImg, deleting, pizaa } from "./menuController.js";

const title = document.querySelector("#title");
const mainBody = document.querySelector("#mainBody");
const url = "http://127.0.0.1:4000/";

//creating inputs for DOM
function createInputElement(type, name, placeholder, classNames) {
  const inputElement = document.createElement("input");
  inputElement.type = type;
  inputElement.name = name;
  inputElement.placeholder = placeholder;
  inputElement.classList = classNames;
  return inputElement;
}

async function workerInputsForEditingOrAdding() {
  const FileUpload = createInputElement(
    "file",
    "fileInput",
    "",
    "form-control m-3"
  );
  const nameInput = createInputElement(
    "text",
    "name",
    "Enter meal name",
    "form-control m-3"
  );
  const descriptionInput = createInputElement(
    "text",
    "description",
    "Enter the description",
    "form-control m-3"
  );
  const priceInput = createInputElement(
    "text",
    "price",
    "Enter the price",
    "form-control m-3"
  );
  const submitBtn = document.createElement("button");

  submitBtn.classList = "btn btn-primary m-3";
  submitBtn.textContent = "add Meal";

  submitBtn.addEventListener("click", async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("img", FileUpload.files[0]);
    formData.append("name", nameInput.value);
    formData.append("description", descriptionInput.value);
    formData.append("price", priceInput.value);
    const token = { token: localStorage.getItem("token") || "" };
    try {
      const res = await fetch(`${url}addMeal`, {
        method: "POST",
        headers: token,
        body: formData,
      });

      // Rendering from database
    } catch (error) {
      throw error;
    }
  });

  mainBody.append(
    FileUpload,
    nameInput,
    descriptionInput,
    priceInput,
    submitBtn,
    searchInput
  );
}

export async function workerMenuEdit(arrayFromData) {
  title.innerHTML = "Worker Menu";
  mainBody.innerHTML = "";

  workerInputsForEditingOrAdding();

  const container = document.createElement("div");
  container.classList.add("container", "mt-2", "justify-content-center");

  const row = document.createElement("div");
  row.classList.add("row", "justify-content-center");
  row.className += " board_menu";

  arrayFromData.forEach((menuItem) => {
    const col = document.createElement("div");
    col.classList.add("col-md-6", "mb-2");

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
    cardTitle.classList = "card-title text-center";
    cardTitle.textContent = menuItem.name;

    const cardText = document.createElement("p");
    cardText.classList = "card-text text-center";
    cardText.textContent = menuItem.description;

    const cardPrice = document.createElement("p");
    cardPrice.classList = "card-text text-center";
    cardPrice.textContent = menuItem.price;

    const deleteBtn = document.createElement("button");
    deleteBtn.classList.add("btn", "btn-primary");
    deleteBtn.textContent = "delete this meal";
    deleteBtn.addEventListener("click", (e) => {
      e.preventDefault();
      deleting(menuItem._id);
    });

    cardBody.append(mealImage, cardTitle, cardText, cardPrice, deleteBtn);
    card.appendChild(cardBody);
    col.appendChild(card);
    row.appendChild(col);
  });

  container.append(searchInput, row);
  mainBody.append(container);
}

const workerMenuEditInner = (arrayFromData) => {
  const row = document.querySelector(".board_menu");

  arrayFromData.forEach((menuItem) => {
    const col = document.createElement("div");
    col.classList.add("col-md-6", "mb-2");

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
    cardTitle.classList = "card-title text-center";
    cardTitle.textContent = menuItem.name;

    const cardText = document.createElement("p");
    cardText.classList = "card-text text-center";
    cardText.textContent = menuItem.description;

    const cardPrice = document.createElement("p");
    cardPrice.classList = "card-text text-center";
    cardPrice.textContent = menuItem.price;

    const deleteBtn = document.createElement("button");
    deleteBtn.classList.add("btn", "btn-primary");
    deleteBtn.textContent = "delete this meal";
    deleteBtn.addEventListener("click", (e) => {
      e.preventDefault();
      deleting(menuItem._id);
    });

    cardBody.append(mealImage, cardTitle, cardText, cardPrice, deleteBtn);
    card.appendChild(cardBody);
    col.appendChild(card);
    row.appendChild(col);
  });
};
const searchInput = createInputElement(
  "text",
  "search",
  "Search Meal By name",
  "btn w-100 m-3"
);

searchInput.addEventListener("keyup", (e) => {
  const bigdiv = document.querySelector(".board_menu");
  bigdiv.innerHTML = "";
  const name = e.target.value;
  let ar = pizaa.filter((item) => item.name.includes(name));
  workerMenuEditInner(ar);
});
