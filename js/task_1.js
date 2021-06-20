
let categories = document.querySelectorAll('.item');
console.log(`В списке ${categories.length} категории`);

categories.forEach((category) => {
    console.log(`Категория ${category.children[0].textContent} Количество элементов: ${category.children[1].children.length}`);
})





