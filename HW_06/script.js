//////////////1//////////////
const arr = ['Vasya', 'Petya', 'Alexey']

function removeUser (arrName, index) {
    arrName.splice(index, 1);
}

removeUser(arr, 1)

console.log(arr)

////////////2////////////////
const container = document.getElementById('windows')
container.style.marginTop = '50px';
container.style.marginBottom = '50px';

function createElement(parentElement, el = 'div', id, width, height, backgroundColor, position = 'absolute', left, top, zIndex = '0') {

    const createWindow = document.createElement(el);
    createWindow.id = id;
    createWindow.style.width = width;
    createWindow.style.height = height;
    createWindow.style.backgroundColor = backgroundColor;
    createWindow.style.position = position;
    createWindow.style.left = left;
    createWindow.style.top = top;
    createWindow.style.zIndex = zIndex;

    return parentElement.append(createWindow); 

}
createElement (container, 'div', 'windowOne', '150px', '150px', '#fd898a', 'absolute', '30px','50px');
createElement (container, 'div', 'windowTwo', '150px', '150px', '#7f8be8', 'absolute', '130px','130px', '1');
createElement (container, 'div', 'windowThree', '150px', '150px', '#56ec9c', 'absolute', '230px','210px');

// const createWindowOne = document.createElement('div');
// createWindowOne.id = 'windowOne';
// createWindowOne.style.width = '150px';
// createWindowOne.style.height = '150px';
// createWindowOne.style.backgroundColor = '#fd898a';
// createWindowOne.style.position = 'absolute';
// createWindowOne.style.left = '30px';
// createWindowOne.style.top = '50px';
// container.append(createWindowOne);

// const createWindowTwo = document.createElement('div');
// createWindowTwo.id = 'windowTwo';
// createWindowTwo.style.width = '150px';
// createWindowTwo.style.height = '150px';
// createWindowTwo.style.backgroundColor = '#7f8be8';
// createWindowTwo.style.position = 'absolute';
// createWindowTwo.style.left = '130px';
// createWindowTwo.style.top = '130px';
// createWindowTwo.style.zIndex = '1'
// container.append(createWindowTwo);

// const createWindowThree = document.createElement('div');
// createWindowThree.style.width = '150px';
// createWindowThree.style.height = '150px';
// createWindowThree.style.backgroundColor = '#56ec9c';
// createWindowThree.style.position = 'absolute';
// createWindowThree.style.left = '230px';
// createWindowThree.style.top = '210px';
// container.append(createWindowThree);

/////////////3////////////////

function createHolderItem(innerText, backgroundColor = 'red', width, order) {
  
const createHolderItem = document.createElement('div')
createHolderItem.innerHTML = innerText;
createHolderItem.className = 'Item'
createHolderItem.style.backgroundColor = backgroundColor
createHolderItem.style.minWidth = width
createHolderItem.style.overflow = 'hidden'
createHolderItem.style.minHeight = '110px'
createHolderItem.style.order = order


return createHolderItem
}

const_1 = createHolderItem ('1', '#FD644D', '50%', '1')
const_2 = createHolderItem ('2', '#4983B2', '33.333%', '4')
const_3 = createHolderItem ('3', '#663797', '33.333%', '3')
const_4 = createHolderItem ('4', '#0E7F12', '33.333%', '5')
const_5 = createHolderItem ('5', '#FDA429', '50%', '2')



const holder = document.getElementsByClassName('holder');
for (const item of holder) {
item.style.backgroundColor = 'black';
item.style.maxWidth = '900px';
item.style.minHeight = '220px';
item.style.border = '5px solid black'
item.style.borderRadius = '35px 35px 0px 0px'
item.style.marginTop = '400px'
item.style.display = 'flex'
item.style.justyfyContent = 'space-between'
item.style.flexWrap = 'wrap'
item.style.alignItems = 'center'
item.style.overflow = 'hidden'
item.style.fontSize = '155px'
item.append(const_1)
item.append(const_2)
item.append(const_3)
item.append(const_4)
item.append(const_5)
}

///////////4//////////////////
function sampleFunc () {
    console.log ( `${arguments.callee.name}: ${arguments[0]} | ${arguments[1]}` )}
    
    function modificator ( func ) {
        return function (){
            func('test', 'sample');
        }
    }
    const testFunc = modificator( sampleFunc )

    testFunc(); // sampleFunc: test | sample

////////////5/////////////////

const group = [{
    name: "Stas",
    lastName: "Domar",
    age: 17,
    notebook: true,
    toString() {
      return `name - ${this.name}, lastName - ${this.lastName}, age - ${this.age}, hasNotebook - ${this.notebook}`
    }
  }, 
  {
    name: "Alex",
    lastName: "Sakun",
    age: 18,
    notebook: true, 
    toString() {
      return `name - ${this.name}, lastName - ${this.lastName}, age - ${this.age}, hasNotebook - ${this.notebook}`
    }
  },
  {
    name: "Mert",
    lastName: "Alagoz",
    age: 19,
    notebook: true, 
    toString() {
      return `name - ${this.name}, lastName - ${this.lastName}, age - ${this.age}, hasNotebook - ${this.notebook}`
    } 
  },
]

function getStudentsList (arr) {
  for (let i of arr) {
    console.log(i.toString())
  }
}

getStudentsList(group)








/////////пробные варианты////////////////////

// function getStudentsList(arrayOfStudents) {
//   arrayOfStudents.forEach(function (item) {
//     item.toString = function () {
//       let str = "";
//       for (key in this) {
//         if (typeof this[key] !== "function") {
//           str +=
//             key.charAt(0).toUpperCase() +
//             key.slice(1) +
//             " - " +
//             this[key] +
//             ", ";
//         }
//       }

//       return str.substring(0, str.length - 2);
//     };
//     console.log(String(item));
//   });
// }

// getStudentsList(group);


// const getStudentsList = (arr) => {
//   arr.forEach(item => {
//     item.toString = function() {
//       return console.log`name - ${this.name}, lastName - ${this.lastName}, age - ${this.age}, hasNotebook - ${this.notebook}`
//     }
//   })
// }

// getStudentsList(group);

