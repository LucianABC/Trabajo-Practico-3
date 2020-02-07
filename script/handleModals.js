
const modal = document.querySelector(".modal");

//Abrir modal 

const openModal = (openCard) => {
    let card = document.querySelector(`#${openCard}`);
    modal.classList.add("display");
    card.classList.add("display");
}

const openDltCard = (openDltCard) =>{
    let dltCard = document.querySelector(`#${openDltCard}`);
    modal.classList.add("display");
    dltCard.classList.add("display");
}
//Cerrar modals 
const closeButtons = document.querySelectorAll(".closeBttn");

closeButtons.forEach(button => {
    button.addEventListener("click", ()=>{
        let form = button.parentElement;
        form = form.parentElement;
        form.classList.remove("display");

        modal.classList.remove("display");
    });
});