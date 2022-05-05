interface person {
    name:string; 
    age: number;
    getPerson :(name:string, age:number) => string;
}             

class Employee implements person {
    name: string;
    age: number;
    salary:number;
    constructor(salary:number) {
        this.salary = salary;
    }
    getPerson = (name: string, age: number) : string => {
        this.name = name;
        this.age = age;
        return "Employee Name is: " + name + ', age is: ' + age + ' and salary is: ' + this.salary; 
    }

}

let ep1: person = new Employee(75000);
console.log(ep1.getPerson('Ayush', 21)); 

let ep2: person= new Employee(45000);
console.log(ep2.getPerson('Abhijeet', 26));