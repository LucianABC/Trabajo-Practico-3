//Acá va el post

const fullnameid = document.querySelector("#fullname");
const emailid = document.querySelector("#email");
const adressid = document.querySelector("#adress");
const phoneid = document.querySelector("#phone");
const createEmployee = async (fullname, email, adresss, phone) => {
  newfullname=fullnameid.value
  newemail=emailid.value
  newadresss=adresssid.value
  newphone=phoneid.value
    let data = {
    fullname,
    email,
    adresss,
    phone
  };
  try {
    const res = await axios.post(baseUrl, data);
    employeeList.push(res.data);
    fullnameid = "";
    emailid = "";
    adressid = "";
    phoneid = "";
  } catch (err) {
    handleError(err);
  }
};
