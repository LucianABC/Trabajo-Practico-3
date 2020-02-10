let allTextInputs = document.querySelectorAll("input[type=text]");
let allEmailInputs = document.querySelectorAll("input[type=email");

const validation = (input) => {
    let validateInput= input.validity;
    if (!validateInput.checkValidity){
      alert(input.validationMessage);
    } else {
        return true
    }
}

allTextInputs.forEach(input =>{
    input.addEventListener("focusout", ()=> {
        validation(input);
    })
});

allEmailInputs.forEach(input =>{
    input.addEventListener("focusout", ()=> {
        validation(input);
    })
});