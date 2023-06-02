import { login } from "./ClientControllerJS.js";
import {
  buildDiv,
  createButton,
  createInputElement,
} from "./global-functions/globalFunctions.js";
const mainBody = document.querySelector("#mainBody");
export function loginJS() {
  const container = { class: "container  pb-5 pt-2 " };
  const row = { class: "row justify-content-center col-12 mt-5 " };
  const col_6 = { class: "col-md-12 text-center col-lg-6 col-md-12 " };
  const FormDiv1 = { class: "form-group" };

  

  const container1 = buildDiv(container);
  const row1 = buildDiv(row);
  const colDiv = buildDiv(col_6);
  const h2 = document.createElement("p");
  const form1 = buildDiv(FormDiv1);
  const username = createInputElement(
    "email",
    "username",
    "Username",
    "form-control col-12 text-center"
  );
  const form2 = buildDiv(FormDiv1);
  const password = createInputElement(
    "password",
    "password",
    "Password",
    "form-control col-12 text-center"
  );

    row1.style.backgroundColor = "#333333a1"
    row1.style.padding = "3rem"
    row1.style.borderRadius = "2.5rem"

  h2.classList = "text-center";
  h2.textContent = "Forgot Your Password";
  h2.style.color = " #f54842";
  h2.style.fontFamily = "tahome";
  h2.style.fontSize = "1.2rem";

  const loginBtn = createButton(
    "Enter To Login",
    "btn btn-primary  col-12",
    () => {},
    "",
    { id: "loginBtn" }
  );

  const br = document.createElement("br");
  const br1 = document.createElement("br");

  form1.append(username);
  form2.append(password);

  loginBtn.addEventListener("click", () => {
    login(username.value, password.value);
  });

  //this div to design the inputs
  colDiv.append(username, br, password, loginBtn, br1, h2);
  row1.appendChild(colDiv);
  container1.appendChild(row1);
  mainBody.appendChild(container1);
}
