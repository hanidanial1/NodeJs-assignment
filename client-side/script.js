import { renderSignUp } from "./signUp.js";
import { loginJS } from "./login.js";
import {renderingAddedToCart}from "./addedToCart.js"
import { generateAboutUsContent } from "./aboutUs.js";
import { gettingMeals, workerMenu,getAddedMeals } from "./menuController.js";

const index = document.querySelector("#index");
const logo = document.querySelector("#index1");
const menu = document.querySelector("#menu");
const signUp = document.querySelector("#signUp");
const title = document.querySelector("#title");
const mainBody = document.querySelector("#mainBody");
const editMenu = document.querySelector("#editMenu");
const login = document.querySelector("#login");
const aboutUsPage = document.querySelector("#about");
  const addedItems = document.querySelector('#addedItems')


const homePage = () => {
  title.textContent = "HomePage";
  mainBody.innerHTML = "";

  mainBody.innerHTML = `        <h1 class="text-center p3" style=" text-shadow:3px -2px 5px #333; color: #ff625b;  ">Welcome to Restaurant VaPiano</h1>

        <section class="hero-section">
        <div class="card1-grid">
          <a class="card1" >
            <div class="card1__background" style="background-image: url(./pics/44.jpeg)"></div>
            <div class="card1__content">

            </div>
          </a>
          <a class="card1" >
            <div class="card1__background" style="background-image: url(./pics/pizza.jpg)"></div>
            <div class="card1__content">

            </div>
          </a>
          <a class="card1" >
            <div class="card1__background" style="background-image: url(./pics/pasta.jpg)"></div>
            <div class="card1__content">
   
            </div>
          </li>
          <a class="card1" >
            <div class="card1__background" style="background-image: url(./pics/p.jpg)"></div>
            <div class="card1__content">
        
            </div>
          </a>
        <div>
      </section>

        
        `;
};

homePage();
logo.addEventListener("click", homePage);
index.addEventListener("click", homePage);

signUp.addEventListener("click", () => {
  mainBody.innerHTML = "";
  mainBody.style = "";

  renderSignUp(mainBody);
});

menu.addEventListener("click", () => {
  mainBody.style.backgroundImage = "none";
  mainBody.innerHTML = "";

  title.textContent = "Menu List";
  gettingMeals();
});

editMenu.addEventListener("click", async () => {
  mainBody.style.backgroundImage = "none";

  mainBody.innerHTML = "";

  workerMenu();
});

login.addEventListener("click", async () => {
  mainBody.innerHTML = "";
  mainBody.style.height = "100vh";
  mainBody.style.backgroundSize = "cover";
  mainBody.style.backgroundImage = "url('./pics/1.jpg')";
  mainBody.style.backgroundPosition = "center";
  loginJS();
});

aboutUsPage.addEventListener("click", () => {
  mainBody.innerHTML = "";
  mainBody.style.backgroundImage = "none";
  generateAboutUsContent(mainBody);
});


addedItems.addEventListener('click',async()=>{
  mainBody.innerHTML =''
  const data = await getAddedMeals()
  renderingAddedToCart(data)
})