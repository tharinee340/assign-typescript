"use strict";
function employee(config) {
    var newEmployee = { firstName: "Hello", lastName: "World", id: 404, age: 100, salary: 80000, bonus: true };
    if (config.firstName) {
        newEmployee.firstName = config.firstName;
    }
    if (config.lastName) {
        newEmployee.lastName = config.lastName;
    }
    if (config.id) {
        newEmployee.id = config.id;
    }
    if (config.age) {
        newEmployee.age = config.age;
    }
    if (config.salary) {
        newEmployee.salary = config.salary;
        if (config.bonus == true) {
            newEmployee.salary = config.salary * 2.5;
            newEmployee.bonus = config.bonus;
        }
    }
    if (config.bonus == false) {
        newEmployee.bonus = config.bonus;
    }
    return newEmployee;
}
var myEmployee = employee({ firstName: "Tharinee", lastName: "Thuengnok", id: 340, age: 19, salary: 100, bonus: true });
console.log("myEmployee", myEmployee);
