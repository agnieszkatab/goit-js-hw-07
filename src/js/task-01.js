
const allCategories = document.querySelectorAll('.item');
console.log(allCategories);
const heading = allCategories.innerText = "Number Of Categories: 3";
console.log(heading);

const numberOfCategories = allCategories.length;
console.log(numberOfCategories);


const category = document.querySelectorAll('h2');
console.log(category);
console.log(category[0].innerText = "Category: Animals");
console.log(category[1].innerText = "Category: Products");
console.log(category[2].innerText = "Category: Technologies");


const allUl = document.querySelectorAll('ul');
console.log(allUl);
console.log(allUl[1].innerText = "Elements: 4");
console.log(allUl[2].innerText = "Elements: 3");
console.log(allUl[3].innerText = "Elements: 5");