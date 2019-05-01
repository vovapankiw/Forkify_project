import { elements } from './base';

export const getInput = () => elements.serachInput.value;

export const clearInput = () => {
  elements.serachInput.value = '';
}

export const cleatResults = () => {
  elements.searchResList.innerHTML = '';
};

const limitRecipeTitle = (title, limit = 17) => {
  const newTitle = [];
  if(title.length > limit) {
    title.split(' ').reduce((acc, el) => {
      if(acc + el.lenth <= limit) {
        newTitle.push(el)
      };
      return acc + el.length;
    }, 0);
    return `${newTitle.join(' ')}...`;
  }
  return title;
}  

const renderRecipe = recipe => {
  const markup = `
    <li>
      <a class="results__link" href="#${recipe.recipe_id}">
        <figure class="results__fig">
          <img src="${recipe.image_url}" alt="${recipe.title}">
        </figure>
        <div class="results__data">
          <h4 class="results__name">${limitRecipeTitle(recipe.title)}</h4>
          <p class="results__author">${recipe.publisher}</p>
        </div>
      </a>
    </li>
  `;
  elements.searchResList.insertAdjacentHTML('beforeend', markup);
};

export const renderResults = recipes => {
  recipes.forEach(renderRecipe);
};