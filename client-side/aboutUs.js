function createElement(tag, classes = [], text = "") {
  const element = document.createElement(tag);
  element.classList.add(...classes);
  element.textContent = text;
  return element;
}

// Function to create a paragraph element
function createParagraph(text) {
  return createElement("p", [], text);
}

// Function to create a heading element with a specified level
function createHeading(level, text) {
  return createElement(`h${level}`, [], text);
}

// Function to generate the About Us content and append it to the specified container
export function generateAboutUsContent(container) {
  const restaurantName = "Ristorante delizioso";
  const restaurantLocation = "the heart of the city";
  const restaurantDescription =
    "passion for Italian cuisine meets warm hospitality";
  const culinaryTraditions = "preserving the culinary traditions of Italy";
  const supportedInitiatives = "participate in various charitable initiatives";
  const eventsAndCatering = "private events and catering services";

  container.innerHTML = "";
  container.style.padding = "4rem";
  container.classList = "text-center ";

  container.appendChild(createHeading(1, "About Us"));
  container.appendChild(
    createParagraph(
      `Welcome to ${restaurantName}, where ${restaurantDescription}. Located in ${restaurantLocation}, our restaurant brings the authentic flavors of Italy to your plate. With a rich history and a dedication to excellence, we strive to provide an unforgettable dining experience for every guest.`
    )
  );

  container.appendChild(createHeading(2, "Authentic Italian Cuisine"));
  container.appendChild(
    createParagraph(
      `At ${restaurantName}, we believe in ${culinaryTraditions}. Our experienced chefs craft each dish with meticulous attention to detail, using only the finest and freshest ingredients. From handmade pasta to flavorful sauces and wood-fired pizzas, every bite reflects the true essence of Italian gastronomy.`
    )
  );

  container.appendChild(createHeading(2, "Passionate Team"));
  container.appendChild(
    createParagraph(
      `Our team is the backbone of ${restaurantName}. From our talented chefs to our friendly waitstaff, each member is driven by a shared love for Italian cuisine and a commitment to delivering exceptional service. We take pride in creating a welcoming and inviting atmosphere for our guests, ensuring that every visit is a delightful one.`
    )
  );

  container.appendChild(createHeading(2, "Cozy Ambiance"));
  container.appendChild(
    createParagraph(
      `Step into our restaurant and be transported to the charming streets of Italy. Our cozy and intimate setting is perfect for any occasion, whether you're enjoying a romantic dinner for two or celebrating a special event with friends and family. With soft lighting, rustic decor, and a vibrant atmosphere, ${restaurantName} offers an inviting space where you can relax and savor the flavors of Italy.`
    )
  );

  container.appendChild(createHeading(2, "Community Engagement"));
  container.appendChild(
    createParagraph(
      `We are proud to be a part of the local community and strive to give back whenever possible. ${restaurantName} actively supports local farmers and producers, sourcing ingredients from nearby suppliers to promote sustainability and support the regional economy. We also ${supportedInitiatives}, aiming to make a positive impact on the lives of those around us.`
    )
  );

  container.appendChild(createHeading(2, "Private Events and Catering"));
  container.appendChild(
    createParagraph(
      `In addition to our regular dining services, ${restaurantName} is the perfect venue for hosting private events. Whether it's a corporate gathering, a wedding reception, or a birthday celebration, our dedicated event team will work closely with you to create a memorable experience tailored to your needs. We also offer ${eventsAndCatering}, bringing the flavors of Italy to your preferred location.`
    )
  );

  container.appendChild(createHeading(2, "Come and Join Us"));
  container.appendChild(
    createParagraph(
      `We invite you to experience the culinary wonders of Italy at ${restaurantName}. Indulge in our mouthwatering dishes, unwind in our cozy ambiance, and allow our dedicated team to take care of you. Whether you're a longtime fan of Italian cuisine or a curious food lover looking for a new adventure, we guarantee a memorable dining experience that will keep you coming back for more.`
    )
  );
  container.appendChild(createParagraph("Buon appetito!"));
}
