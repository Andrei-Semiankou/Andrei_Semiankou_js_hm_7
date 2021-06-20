
// вообщем, когда делал задание из-за невнимательности скопировал данные из 5 задания в 4, и начал делать по своему:) и решил оставить это, вроде получилось:)
//  (САТАНИЗМ)!!!!!!!

/*
let h1 = document.querySelector('h1');
let incrementBtn = document.createElement('button');
let decrementBtn = document.createElement('button');
let resetBtn = document.createElement('button');
let p = document.createElement('p');
p.textContent = 'Значение равно:';
p.classList.add('instant_value');
p.insertAdjacentHTML("beforeEnd",'<span class="result">0</span>');

h1.after(p);
let resultValue = document.querySelector('.result');
incrementBtn.textContent = 'Увеличить на 1';
decrementBtn.textContent = 'Уменьшить на 1';
resetBtn.textContent = 'Сброс';
h1.after(incrementBtn, decrementBtn, resetBtn);

let counterValue = 0;
incrementBtn.addEventListener("click",() => {
    counterValue+=1;
  resultValue.textContent=counterValue;  
})
decrementBtn.addEventListener("click",()=> {
    counterValue-=1;
    resultValue.textContent=counterValue;  
})
resetBtn.addEventListener("click",()=> {
    counterValue=0;
    resultValue.textContent=counterValue;  
})
*/

let decrementBtn = document.querySelector('button[data-action="decrement"]');
let incrementBtn = document.querySelector('button[data-action="increment"]');
let resultValue = document.querySelector('#value');

decrementBtn.addEventListener("click", decrement);
incrementBtn.addEventListener("click", increment);
let counterValue = 0;
function decrement(){
    counterValue-=1;
    resultValue.textContent = counterValue;
}

function increment(){
    counterValue+=1;
    resultValue.textContent = counterValue;
}