import { renderMenu1 } from "./menu.js";
import { workerMenuEdit } from "./workerMenu.js";
import {  renderingAddedToCart} from"./addedToCart.js"
  const mainBody = document.querySelector('#mainBody')
export let pizaa;

export async function gettingImg(p1) {
  try {
    const res = await fetch(p1);
    const data = await res;
    return data;
  } catch (error) {
    throw error;
  }
}

export async function gettingMeals() {
  try {
    const response = await fetch("http://127.0.0.1:4000");
    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }
    const data = await response.json();
    renderMenu1(data);
  } catch (error) {
    console.log(error);
  }
}

export async function workerMenu() {
  try {
    const response = await fetch("http://127.0.0.1:4000");
    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }
    const data = await response.json();
    pizaa = data;
    workerMenuEdit(data);
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export async function deleting(params) {
  const token = localStorage.getItem("token") || "";
  try {
    await fetch("http://127.0.0.1:4000/delete/" + params, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        token: token,
      },
    });
    workerMenu();
  } catch (error) {
    throw error;
  }
}

// export async function edit(params, obj) {
//     try {
//         await fetch(url + `update/${params}`, {
//             method: 'PUT',
//             headers: { 'Content-Type': 'application/json' },
//             body: JSON.stringify(obj)

//         })
//         //rendering from database
//     } catch (error) {
//         throw error
//     }
// }

// http://localhost:4000/getAddedMeals

export async function addingToCart(addedMeal) {

  try {
    await fetch("http://127.0.0.1:4000/addedToCart", {
      method: "post",
      headers: {
        "Content-Type": "application/json",

      },
      body: JSON.stringify(addedMeal),
    });
  } catch (error) {
    throw error;
  }
}

export async function getAddedMeals() {

  try {
    const res = await fetch("http://127.0.0.1:4000/getAddedMeals");
    const data = await res.json();
    return data;
  } catch (error) {
    throw error;
  }
}



export async function deletingAddedMeal(params) {

  try {
   const res = await fetch("http://127.0.0.1:4000/deleteAddedMeal/" + params, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    
    })
   const data = res.json()
   return data
  } catch (error) {
    throw error;
  }

  
}