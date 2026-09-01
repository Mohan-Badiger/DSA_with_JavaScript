class Employee {
    constructor(salary, overtime, rate) {
        this.salary = salary, //Base salary
            this.overtime = overtime, //Extra Hours Worked
            this.rate = rate // Pay per overtime hour
    }

    getWage() {
        return this.salary + (this.overtime * this.rate);
    }
}

const emp1 = new Employee(50000, 10, 500);

console.log(emp1.getWage());
