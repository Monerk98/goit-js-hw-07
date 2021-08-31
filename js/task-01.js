const categories = document.querySelectorAll('#categories li.item')

categories.forEach(category => {
    const categoryFirst = category.querySelector('h2').textContent
    const categoryCount = category.querySelector('ul').children.length
    
    console.log(`Категория ${categoryFirst}`)
    console.log(`Количество элементов ${categoryCount}`)
})


