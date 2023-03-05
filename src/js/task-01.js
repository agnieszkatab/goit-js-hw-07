

const allCategories = document.querySelectorAll('.item');
console.log(allCategories);
const heading = allCategories.innerText = "Number Of Categories: 3";
console.log(heading);

const numberOfCategories = allCategories.length;
console.log(numberOfCategories);

allCategories.forEach(category => {
    const categoryName = category.querySelector('h2').innerText;
    const categoryElements = category.querySelectorAll('li').length;
    console.log(`Category: ${categoryName}\nElements: ${categoryElements}`)
})

//const category = document.querySelectorAll('h2');
//console.log(category);
//console.log(category[0].textContent = "Category: Animals");
//console.log(category[1].textContent = "Category: Products");
//console.log(category[2].textContent = "Category: Technologies");


//const allUl = document.querySelectorAll('ul');
//console.log(allUl);
//console.log(allUl[1].innerText = "Elements: 4");
//console.log(allUl[2].innerText = "Elements: 3");
//console.log(allUl[3].innerText = "Elements: 5");