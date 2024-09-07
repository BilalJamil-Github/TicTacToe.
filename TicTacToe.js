let winningCombinations = [
    [0,1,2], [2,1,0], [0,2,1], [1,2,0], [1,0,2], [2,0,1],
    [3,4,5], [5,4,3], [3,5,4], [4,5,3], [4,3,5], [5,3,4],
    [6,7,8], [8,7,6], [6,8,7], [7,8,6], [7,6,8], [8,6,7],
    [0,3,6], [1,4,7], [2,5,8], [6,3,0], [7,4,1], [8,5,2],
    [0,4,8], [8,4,0], [2,4,6], [6,4,2], [0,8,4], [4,8,0],
    [4,2,6], [6,2,4], [4,6,2], [2,6,4], [8,0,4], [2,8,5],
    [5,8,2], [3,6,0], [0,6,3]
];

let turn = "X"; 
let boxes = document.getElementsByClassName('boxes');
let TurnNum = document.getElementById('turn');

let changingTurn = () => {
    turn = turn === "X" ? "0" : "X";
    TurnNum.style.fontSize = '50px';
    TurnNum.innerText = turn;
};

let arrX = [];
let arr0 = [];

Array.from(boxes).forEach(element => {
    element.addEventListener('click', () => {
        if (!element.classList.contains('adapted')) {
            element.classList.add('adapted');
            let fun = element.getAttribute("id");
            if (turn === "0") {     
                arr0.push(Number.parseInt(fun));
            } else {
                arrX.push(Number.parseInt(fun));
            }
            check(turn);
            element.innerText = turn;
            element.style.fontSize = "70px";
            element.style.fontStyle = 'italic';
            element.style.textAlign = 'center';
            changingTurn();
        }
    });
});

function check(turn) {
    const arrayToCheck = turn === 'X' ? arrX : arr0;  
    if (arrayToCheck.length > 2) {
        winningCombinations.forEach(element => {
            const str = element.join("");
            const revStr = element.reverse().join("");
            if (arrayToCheck.join("").includes(str) || arrayToCheck.join("").includes(revStr)) {
                alert(turn + " won");
            }
        });
    }
}
