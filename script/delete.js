//Aca va el delete

const deleteEmployee = async id => {
    try {
      const res = await axios.delete(`${baseUrl}/users/:${id}`);
      const index = employeeList.findIndex(employee => {
        return employee.id == id;
      });
      employeeList.splice(index, 1);
    } catch (err) {
      handleError(err);
    }
  };
  