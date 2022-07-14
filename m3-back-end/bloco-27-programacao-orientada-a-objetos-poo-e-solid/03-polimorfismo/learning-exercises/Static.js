var Employee = /** @class */ (function () {
    function Employee(name) {
        this.name = name;
        Employee.addEmployee();
    }
    ;
    Employee.addEmployee = function () {
        this.employeeCount += 1;
    };
    ;
    Object.defineProperty(Employee, "employees", {
        get: function () {
            return this.employeeCount;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Employee.employeeCount = 0;
    return Employee;
}());
;
