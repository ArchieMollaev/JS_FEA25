//////////1//////////
const p = document.getElementById('p')


const createImg = function () {
const createImage = document.createElement('div')
createImage.id = 'image'
createImage.style.width = '100px'
createImage.style.height = '100px'
createImage.style.backgroundImage = 'url(./1314.jpg)'
return document.body.prepend(createImage)
}

const pigGrow = document.getElementById('image')

const transition = function (){
    pigGrow.style.width = '200px'
    pigGrow.style.height = '200px'
    pigGrow.style.transition = 'all 5s'
}

p.addEventListener('click', createImg, {once:true})/////////не могу получить доступ к созданному через append элементу

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

//////////4//////////
// const resultSpan = document.getElementById('result')
const inputId = document.getElementById('inputId');
    // inputId.oninput = function () {
    //     resultSpan.innerHTML = inputId.value;
	// };
	
const button = document.getElementById('button')
button.onclick = function() {
	return console.log(inputId.value);
}

//////////5//////////
const elems = document.getElementsByTagName('a');
for (let i of elems) {
	i.addEventListener('mouseover', innerHref);
}
 
function innerHref () {
	this.innerHTML = this.innerHTML + '(' + this.href + ')';
	return this.removeEventListener('mouseover', innerHref);////////как сделать чтобы после того как убрал курсор ссылка пропадала?
}

//////////6//////////
const hide = document.getElementById('hide')
const hidden = document.getElementById('hidden')

hide.onclick = function () {
	hidden.style.display = 'none'
}

//////////7//////////
const inputRound = document.getElementById('inputRound')
const buttonRound = document.getElementById('buttonRound')
const round = document.getElementById('round')


buttonRound.onclick = function () {
	if (isNaN(inputRound.value)) {
		inputRound.value = 'insert correct value'
	} else {
	round.style.marginLeft = `${inputRound.value}px`
	round.style.transition = 'all 2s'
}
}