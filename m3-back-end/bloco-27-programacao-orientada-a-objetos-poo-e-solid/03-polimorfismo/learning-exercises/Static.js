class Employee {
    constructor(name) {
        this.name = name;
        Employee.addEmployee();
    }
    ;
    static addEmployee() {
        this.employeeCount += 1;
    }
    ;
    static get employees() {
        return this.employeeCount;
    }
    ;
}
Employee.employeeCount = 0;
;
console.log(Employee.employees);
const e1 = new Employee('Cíntia');
console.log(Employee.employees);
const e2 = new Employee('Ronaldo');
console.log(Employee.employees);
