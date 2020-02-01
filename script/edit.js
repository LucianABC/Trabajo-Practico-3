//Aca iria el PUT


const editEmployee = async ( fullname, email, address, phone) => {
    let data = {
        fullname, 
        email, 
        address, 
        phone
    };
    try{
        const employee = await axios.put(`${baseUrl}:${id}`, data)
        for ( let i=0; i < employeeList.length; i++) {
            if ( employeeList[i].id == id) {
                employeeList[i] = employee.data;
            }
        }

        printList(employeeList);
    }
    catch (err){
        handleError(err);
    }
}

const submitUpdtButton = document.querySelector("#submitUpdt");
submitUpdtButton.addEventListener("click", ()=>{
    editEmployee(fullnameUpd.value, emailUpd.value, addressUpd.value, phoneUpd.value)
});