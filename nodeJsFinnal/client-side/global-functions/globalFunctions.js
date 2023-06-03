export function incrementCounter(input) {
    input.value = parseInt(input.value) + 1;
}

export function decrementCounter(input1) {
    if (parseInt(input1.value) > 0) {
        input1.value = parseInt(input1.value) - 1;
    }
}





export function addToCart(input1) {
    const quantity = parseInt(input1.value);
    if (quantity > 0) {
        // Code to add the selected item to the cart
        // You can implement this according to your requirements
        // For example, you can store the item details and quantity in an array or send an AJAX request to the server
        alert("Added to cart: " + quantity + " item(s)");
    }
}

const loaderParent = document.querySelector('#loader')

export function showLoader() {
    loaderParent.style.display = "flex";
}

// Add a function to hide the loader
export function hideLoader() {
    loaderParent.style.display = "none";
}


//building inputs in js
export function createInputElement(type, name, placeholder, classNames) {
    const inputElement = document.createElement('input');
    inputElement.type = type;
    inputElement.name = name;
    inputElement.placeholder = placeholder;
    inputElement.classList = classNames;
    return inputElement;
}


//building div in js 
export function buildDiv(options) {
    const div = document.createElement('div');

    // Set optional attributes
    if (options.id) {
        div.id = options.id;
    }
    if (options.class) {
        div.className = options.class;
    }
    if (options.style) {
        Object.assign(div.style, options.style);
    }

    // Set optional content
    if (options.text) {
        div.innerText = options.text;
    }
    if (options.html) {
        div.innerHTML = options.html;
    }

    // Return the created div element
    return div;
}
const options = {
    id: 'myDiv',
    class: 'customDiv',
    style: {
        backgroundColor: 'red',
        padding: '10px',
        color: 'white'
    },
    text: 'Hello, world!',
    html: '<strong>This is a div.</strong>'
};


//building btn 
export function createButton(text, classNames, onClick, type = 'button', attributes = {}) {
    const button = document.createElement('button');
    button.textContent = text;
    button.classList = classNames;
    button.type = type;
    button.addEventListener('click', onClick);

    for (const [key, value] of Object.entries(attributes)) {
        button.setAttribute(key, value);
    }

    return button;
}
