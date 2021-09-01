const inputName = document.querySelector('#name-input')
const nameOut = document.querySelector('#name-output')

const inputChange = (elem) => {
    nameOut.textContent = elem.currentTarget.value;

    if(nameOut.textContent  === ''){
        return  nameOut.textContent = 'незнакомец'
    }
}

inputName.addEventListener('input',inputChange)

