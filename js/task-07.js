const bigName = document.querySelector('#font-size-control')
const bidText = document.querySelector('#text')

bigName.addEventListener("input", differentInput);

function differentInput(elem) {
    bidText.style.fontSize = elem.currentTarget.value + "px";
}