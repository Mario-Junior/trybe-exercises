class Employee {
  private static employeeCount = 0;

  constructor(public name: string) {
    Employee.addEmployee();
  };

  private static addEmployee() {
    this.employeeCount += 1;
  };

  static get employees() {
    return this.employeeCount;
  };
};

console.log(Employee.employees);
const e1 = new Employee('Cíntia');
console.log(Employee.employees);
const e2 = new Employee('Ronaldo');
console.log(Employee.employees);
