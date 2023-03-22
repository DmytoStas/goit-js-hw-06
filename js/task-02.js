const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientListRef = document.querySelector('#ingredients');

function makeItem(item) {
  const listItem = document.createElement('li');
  listItem.textContent = item;

  return listItem;
}

const listItemsArray = ingredients => {
  return ingredients.map(makeItem);
};

ingredientListRef.append(...listItemsArray(ingredients));
