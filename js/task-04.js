// Создай переменную counterValue в которой будет хранится текущее значение счетчика.
// Создай функции increment и decrement для увеличения и уменьшения значения счетчика
// Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса

const valueMain = document.querySelector("#value");
const btnIncr = document.querySelector('[data-action="increment"]');
const btnDecr = document.querySelector('[data-action="decrement"]')


const incrementValue = () => valueMain.textContent = `${Number(valueMain.textContent) + 1}`;
const decrementValue = () => valueMain.textContent -= 1;

btnDecr.addEventListener('click',decrementValue)
btnIncr.addEventListener('click', incrementValue)


// const options = {
// valueMain: document.querySelector("#value"),
//  btnIncr: document.querySelector('[data-action="increment"]'),
//  btnDecr: document.querySelector('[data-action="decrement"]')
// }

// const {valueMain,btnIncr, btnDecr } = options

// let counterValue = 0
// const increment = () => {
//     counterValue += 1
//     valueMain.textContent = counterValue;
// }
// const decrement = () => {
//     counterValue -= 1;
//     valueMain.textContent = counterValue;
// }
// btnIncr.addEventListener('click', increment)
// btnDecr.addEventListener('click', decrement)

