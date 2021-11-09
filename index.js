// Write your solution in this file!
const employee = {
    name: "Bobby",
    streetAddress: "555 Main Street",
}

function updateEmployeeWithKeyAndValue(employee, key, value){
    const newEmployee ={...employee};
    newEmployee[key] = value;
    return newEmployee;
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    employee[key]= value;
    return employee;
}
function deleteFromEmployeeByKey(employee, key){
    const oldEmployee = {...employee};
    delete oldEmployee.name;
    return oldEmployee;
}
function destructivelyDeleteFromEmployeeByKey(employee, key){
    delete employee.name;
    return employee
}

