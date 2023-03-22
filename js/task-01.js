const categoriesListRef = document.querySelector('#categories');
const categoryItemsRef = categoriesListRef.querySelectorAll('.item');

console.log('Number of categories: ' + categoryItemsRef.length);

function getCategoryTitle(item) {
  return item.firstElementChild.textContent;
}

function getInCategoryRefCount(item) {
  return item.lastElementChild.children.length;
}

function parceCategoryItems(itemsArray) {
  itemsArray.forEach(item => {
    console.log('Category: ' + getCategoryTitle(item));
    console.log('Elements: ' + getInCategoryRefCount(item));
  });
}

parceCategoryItems(categoryItemsRef);
