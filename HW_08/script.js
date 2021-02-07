///////////1_1//////////////
function fib(n) {
    let a = 1, b = 1;
    for (let i = 3; i <= n; i++) {
      temp = a + b;
      a = b;
      b = temp;
    }
    return b;}

    console.log(fib(7));

//////////////1_2///////////

const fib2 = n => {
  if(n == 0){
    return [0, 1];
  }else{
    const [prev, next] = fib2(n - 1);
    return [next, prev + next];
  }
}

const fib3 = n => fib2(n)[0];

console.log(fib2(6));

//////////2_1///////////

function sumTo (n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i
  }
  return sum
}

console.log(sumTo(100));

///////////2_2/////////////

function sumTo(n) {
  if (n == 1) return 1;
  return n + sumTo(n - 1);
}

console.log( sumTo(10000) );

//////////3//////////

function printNumbers(from, to) {
  let timer = setInterval(function() {
    console.log(from);
    if (from == to) {
      clearInterval(timer);
    }
    from++;
  }, 1000);
}

printNumbers(15, 20);

//////////3_1//////////

// function printNumbers(from, to) {

//   setTimeout(function start() {
//     console.log(from);
//     if (from < to) {
//       setTimeout(start, 1000);
//     }
//     from++;
//   }, 1000);
// }

// printNumbers(1, 20);

//////////4//////////
let counter = 0; 
const interval = setInterval(function () {
  counter++,
  console.log('Прошло ' + counter + ' сек')
  if (counter === 5) {
    clearInterval(interval)
  }
},1000)

// setTimeout(() => clearInterval(interval), 5000)

/////////5///////////

const li = document.getElementById('ulList')
const arr = li.textContent.split(' ').map(Number)
const inp = document.getElementById('inp')
sumArr = []

function num (){
  for (let i of arr) {
  if ( i > 0) {
    sumArr.push(i)
  }}}

num()

const result = sumArr.reduce(function(sum, current) {
  return sum + current;
}, 0);

const sum = document.getElementById('sum')
sum.addEventListener('click', inner)
function inner () {
  inp.value = sumArr.join('+') + '=' + result
  }
///////////////////
