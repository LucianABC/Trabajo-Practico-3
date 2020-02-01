//Acá va el post
const openAddModal = document.querySelector("#addBttn");
openAddModal.addEventListener("click", () => {
    openModal("add-employee");
});

const fullnameid = document.querySelector("#add-name");
const emailid = document.querySelector("#add-email");
const adressid = document.querySelector("#add-adress");
const phoneid = document.querySelector("#add-phone");

const createEmployee = async (fullname, email, adresss, phone) => {
  newfullname = fullnameid.value;
  newemail = emailid.value;
  newadresss = adresssid.value;
  newphone = phoneid.value;

  let data = {
    fullname,
    email,
    adresss,
    phone
  };

  try {
    const res = await axios.post(baseUrl, data);
    employeeList.push(res.data);
  } catch (err) {
    handleError(err);
  }
};

const submitBttn = document.querySelector("#submitAdd");
submitBttn.addEventListener("click", createEmployee);
