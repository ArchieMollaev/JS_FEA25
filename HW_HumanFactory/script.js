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
const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");
const result = document.getElementById("result");

function selectedOperation(event) {
  result.value = "";

  if (event.value === "+") {
    result.value = Number(num1.value) + Number(num2.value);
  }
  if (event.value === "-") {
    result.value = Number(num1.value) - Number(num2.value);
  }
  if (event.value === "*") {
    result.value = Number(num1.value) * Number(num2.value);
  }
  if (event.value === "/") {
    result.value = Number(num1.value) / Number(num2.value);
  }
}
