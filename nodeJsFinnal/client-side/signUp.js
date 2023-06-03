import { newClient } from "./ClientControllerJS.js"
const title = document.querySelector('#title')


export function renderSignUp(mainBody1) {
    title.innerHTML = `Sign Up`
    const signUpBox = document.createElement('div')
    const CoverDiv = document.createElement('div')
    const containerDiv = document.createElement('div')
    const h2 = document.createElement('h2')
    const form = document.createElement('form')
    const inputName = document.createElement('input')
    const divFormGroup = document.createElement('div')
    const divFormGroup2 = document.createElement('div')
    const inputEmail = document.createElement('input')
    const divFormGroup3 = document.createElement('div')
    const inputPassword = document.createElement('input')
    const br = document.createElement('br')
    const confirmPassword = document.createElement('input')
    const subBtn = document.createElement('button')

    inputEmail.classList = "form-control"
    containerDiv.classList = 'container text-center col-12'
    divFormGroup.classList = "form-group"
    divFormGroup2.classList = "form-group"
    inputName.classList = "form-control"
    divFormGroup3.classList = "form-group"
    inputPassword.classList = "form-control"
    confirmPassword.classList = "form-control"
    subBtn.classList = 'btn btn-primary'
    inputName.id = "name"
    inputName.placeholder = 'Enter your name'
    inputName.required = "true"
    inputName.type = 'text'
    CoverDiv.id = "signUpCover"

    signUpBox.id = "signUpBox"
    h2.textContent = "Sign Up"

    form.name = 'signupForm'
    form.id = "fromDetail"
    form.classList ="col-12 col-md-6  text-center m-auto"

    inputEmail.id = "Email"
    inputEmail.placeholder = 'Enter your Email'
    inputEmail.required = "true"
    inputEmail.type = 'email'

    inputPassword.id = "password"
    inputPassword.placeholder = 'Enter your Password'
    inputPassword.required = "true"
    inputPassword.type = 'password'

    confirmPassword.id = "confirmPassword"
    confirmPassword.placeholder = 'Confirm the Password'
    confirmPassword.required = "true"
    confirmPassword.type = 'password'

    containerDiv.style.width = '100%'
    containerDiv.style.marginRight = '10%'
    containerDiv.style.paddingTop = '3rem'
    subBtn.textContent = 'submit'
    subBtn.addEventListener('click', () => {
        newClient(
            inputName.value,
            inputEmail.value,
            inputPassword.value,
            confirmPassword.value,
        )
        inputName.value =""
        inputEmail.value = ""
        inputPassword.value = ""
        confirmPassword.value = ""

    })
    divFormGroup.appendChild(inputName)
    divFormGroup2.appendChild(inputEmail)
    divFormGroup3.append(inputPassword, br, confirmPassword)
    form.append(divFormGroup, divFormGroup2, divFormGroup3, subBtn)
    containerDiv.append(h2, form)
    CoverDiv.appendChild(containerDiv)
    mainBody1.append(CoverDiv)
}


