///////////Дан массив [1, 2, 3, 4, 5]. Используя splice сделайте из него массив [1, 'a', 'b', 2, 3, 4, 'c', 5, 'e'].///////
// const arr1 = arr.map(elem => elem * 2)

const arr = [1, 2, 3, 4, 5];

arr.splice(1, 0, 'a', 'b')
console.log(arr);
arr.splice(6, 0, 'c')
console.log(arr);
arr.splice(arr.length, 0, 'e')
console.log(arr);