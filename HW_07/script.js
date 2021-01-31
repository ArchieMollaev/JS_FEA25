//////////1//////////
const p = document.getElementById('p')


const createImg = function () {
const createImage = document.createElement('div')
createImage.id = 'image'
createImage.style.width = '100px'
createImage.style.height = '100px'
createImage.style.backgroundImage = 'url(./1314.jpg)'
return document.body.append(createImage)
}

const pigGrow = document.getElementById('image')

const transition = function (){
    pigGrow.style.width = '200px'
    pigGrow.style.height = '200px'
    pigGrow.style.transition = 'all 5s'
}

p.addEventListener('click', createImg)

// pigGrow.addEventListener('mouseover', transition)


//////////2//////////

const arr = [1, 2, 3, 0, 4, 5, 6];
let acc = 0;
const result = arr.reduceRight(function(sum, elem) {
	if (elem === 0) {
		acc = sum;
	} else {
		return sum + elem;
	}
});
console.log(acc)

//////////3//////////

let counter = 1;
const resultCounter = arr.reduce(function(sum, elem) {
	if (sum > 10) {
		console.log(counter);
		return;
	} else {
		counter++;
		return sum + elem;
	}
}); 