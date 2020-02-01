//Aca va el get ( el de todos y el individual)
const getEmployees = async() =>{
    try {
        const data = await axios.get(`${baseUrl}/users`);
        employeeList = data.data;
        console.log(data);
        printList(employeeList);
    }catch(err){
        handleError(err);
    }  
};

getEmployees();
