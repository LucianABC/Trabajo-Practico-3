//Aca iria el PUT

const fullnameUpd = document.querySelector("#fullname-update");
const emailUpd = document.querySelector("#email-update");
const addressUpd = document.querySelector("#address-update");
const phoneUpd = document.querySelector("#phone-update")

const editEmployee = async ( fullname, email, address, phone) => {
    let data = {
        fullname, 
        email, 
        address, 
        phone
    };
    try{
        const employee = await axios.put(`${baseURL}/users/:${id}`, data)
        for ( let i=0; i < employeeList.length; i++) {
            if ( employeeList[i].id == id) {
                employeeList[i] = employee.data;
            }
        }
        fullnameUpd.value = " ";
        emailUpd.value = " ";
        addressUpd.value = " ";
        phoneUpd.value = " ";
    }
    catch (err){
        handleError(err);
    }
}