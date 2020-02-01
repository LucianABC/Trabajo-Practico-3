//Abrir modal create
const openAddModal = document.querySelector("#addBttn");

const modal = document.querySelector(".modal");

openAddModal.addEventListener("click", () => {
  const addCard = document.querySelector("#add-employee");
  modal.classList.add("display");
  addCard.classList.add("display");
});

//Cerrar modal create 

const closeButtons = document.querySelectorAll(".closeBttn");

closeButtons.forEach(button => {
    button.addEventListener("click", ()=>{
        let form = button.parentElement;
        form = form.parentElement;
        form.classList.remove("display");

        modal.classList.remove("display");
    });
});