// function User(name, age, isProgrammer) {
//   this.name = name;
//   this.age = age;
//   isProgrammer = true;
//   this.sayHi = () => {
//     console.log("HIIIII " + this.name);
//   };
// }

// let vasya = new User("Vasya", 33);

// console.log(vasya);
// vasya.sayHi();

///////////////Calculator///////////
// const num1 = document.getElementById("num1");
// const num2 = document.getElementById("num2");
// const result = document.getElementById("result");

// function selectedOperation(event) {
//   result.value = "";

//   if (event.value === "+") {
//     result.value = Number(num1.value) + Number(num2.value);
//   }
//   if (event.value === "-") {
//     result.value = Number(num1.value) - Number(num2.value);
//   }
//   if (event.value === "*") {
//     result.value = Number(num1.value) * Number(num2.value);
//   }
//   if (event.value === "/") {
//     result.value = Number(num1.value) / Number(num2.value);
//   }
// }
//////////////Factory Pattern////////////////
class ITCompany {
  create(employeeType) {
    if (employeeType === "Programmer") {
      return new Programmer(employeeType);
    }
    if (employeeType === "Tester") {
      return new Tester(employeeType);
    }
  }
}

class Human {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  static getType() {
    console.log("Человек");
  }
  getName() {
    console.log(this.name);
  }
  getAge() {
    console.log(this.age);
  }
}

// const test = new Human("Vasya", 35);
// console.log(test);
console.log(Human.getType());

class Programmer extends Human {
  constructor(name, age, job) {
    name = "Vasya";
    age = 27;
    job = "Programmer";
    super(name, age, job);
  }
  static getJob(job) {
    console.log(this.job);
  }
}

class Tester extends Human {
  constructor(name, age, job) {
    name = "Petya";
    age = 28;
    job = "Tester";
    super(name, age, job);
  }
  static getJob(job) {
    console.log(this.job);
  }
}

const company = new ITCompany();
const testProgrammer = company.create("Programmer", 27);
const testTester = company.create("Tester", 27);

console.log(Programmer.getJob(test.job)); ///////возвращает undefined
