const game = document.getElementById('game')
const cell = document.getElementsByClassName('cell')
const curPl = document.getElementById('curPl')
const info = document.getElementById('info')

let player = 'x'///присвоил начального игрока в переменную player

const winIndex = [
    [1,2,3],
    [4,5,6],
    [7,8,9],
    [1,4,7],
    [2,5,8],
    [3,6,9],
    [1,5,9],
    [3,5,7]
]//////////////создал массив комбинаций для победы

for (let el in cell) {
    cell[el].addEventListener('click', cellClick);
}/////для каждой ячейки HTML-коллекции устанавливаем EventListener

function cellClick () {

    if(!this.innerHTML) {
        this.innerHTML = player;
    }else {
        alert("Ячейка занята");
}

let data = [] /////////данные текущего игрока в массив data

for(let i in cell){
    if(cell[i].innerHTML == player){
        data.push(parseInt(cell[i].getAttribute('position'))); /////////у каждого div в игровом поле есть аттрибут position, который мы получаем через метод getAttribute и пушим в массив data предварительно преобразовав к числу через метод parseInt
    }
}

if (whoWin(data)) {
    restart('Выиграл: ' + player.toUpperCase())
} else {
    let draw = true;
    for(let i in cell) {
        if(cell[i].innerHTML === '') draw = false;
    }
    if(draw) {
        restart("Ничья");
    }
}

player = player == 'x' ? 'o' : 'x';///////смена игрока после каждого хода
curPl.innerHTML = player.toUpperCase();//////кто сейчас ходит
}

function whoWin(data) {
    for(let i in winIndex) {
        let win = true;
        for(let j in winIndex[i]) {
            let id = winIndex[i][j];
            let ind = data.indexOf(id);////////если в массиве data была найдена первая победная комбинация, то ind равен 1, если не найдена, то -1
            console.log(data);

            if(ind == -1) {
                win = false
            }
        }

        if(win) return true;
    }
    return false;
}

function restart(text) {
    
    alert(text);
    for(let i in cell) {
        cell[i].innerHTML = '';
    }
}