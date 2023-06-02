const url = "http://127.0.0.1:4000/";

export async function newClient(name, email, password, confirmPassword) {
  try {
    const res = await fetch(url + "addClient", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, password, confirmPassword }),
    });

    const data = await res.json();
    console.log(data);
  } catch (error) {
    throw error;
  }
}

export const login = async (email, password) => {
  const obj = {
    email,
    password,
  };
  try {
    const response = await fetch(url + "login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(obj),
    });


   
      const data = await response.json();

      console.log(response,data);
   if (response.ok) {
      const token = data.token;
  
      // Handle the response data
      // For example, store the received token in local storage
      localStorage.setItem("token", token);
      console.log("Login successful");
    } else {
      // Handle specific error cases
      if (response.status === 401) {
        console.log("Login failed: Unauthorized");
      } else if (response.status === 404) {
        console.log("Login failed: User not found");
      } else {
        console.log("Login failed with status:", response.status);
      }
    }
  } catch (error) {
    console.log("An error occurred:", error);
  }}