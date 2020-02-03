//Aca iria el PUT
const editEmployee = async (id, fullname, email, address, phone) => {

    try{            
        let info = {
            id,
            fullname, 
            email, 
            address, 
            phone
        };
        const employee = await axios.put(`${baseUrl}${id}`, info)//Como le pasamos el id?w
       getEmployees();
    }
    catch (err){
        handleError(err);
    }
}

const submitUpdtButton = document.querySelector("#submitUpdt");
submitUpdtButton.addEventListener("click", ()=>{
    editEmployee(currentId, fullnameUpd.value, emailUpd.value, addressUpd.value, phoneUpd.value);
});