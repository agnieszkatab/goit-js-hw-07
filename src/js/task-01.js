

const allCategories = document.querySelectorAll('.item');
console.log(`Number of categories: ${allCategories.length}`)

allCategories.forEach(category => {
    const categoryName = category.querySelector('h2').innerText;
    const categoryElements = category.querySelectorAll('li').length;
    console.log(`Category: ${categoryName}\nElements: ${categoryElements}`)
})

