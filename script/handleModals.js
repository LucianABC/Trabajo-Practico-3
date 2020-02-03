
const modal = document.querySelector(".modal");

//Abrir modal 

const openModal = (openCard) => {
    let card = document.querySelector(`#${openCard}`);
    modal.classList.add("display");
    card.classList.add("display");
}
const closeModal = (close) => {

    modal.classList.remove("display");
    close.classList.remove("display");
}
//Cerrar modals 
const closeButtons = document.querySelectorAll(".closeBttn");

closeButtons.forEach(button => {
    button.addEventListener("click", ()=>{
        let form = button.parentElement;
        form = form.parentElement;
        closeModal(form);
    });
});