

const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
  ];

let liIngredients = document.createElement('li');
let ul = document.querySelector('#ingredients')

function createList(ingredientsArr, domElem){
 let html ='';
 ingredientsArr.forEach((ingredient) => {
   html+=`<li>${ingredient}</li>`
 })
 domElem.innerHTML = html
 return domElem;
}
createList(ingredients, ul)
