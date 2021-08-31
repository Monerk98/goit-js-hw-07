const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
  ];


  const element = []
  ingredients.map(elem => {
    const ulItemEl = document.createElement('li')
    ulItemEl.textContent = elem

    element.push(ulItemEl)
  })
//   console.log(element)

const secondIngredients = document.querySelector('#ingredients')
secondIngredients.append(...element)
// console.log(element)

console.log(secondIngredients)






