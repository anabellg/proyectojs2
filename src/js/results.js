 
export const result_Markup=({image_url, publisher,title,id,recipe_id}) => {
    return `<li class="preview">
        <a class="preview__link preview__link--active" href="#${id}" onclick="showconsult(${recipe_id})">
            <figure class="preview__fig">
            <img src="${image_url}" alt="Test" /> 
            </figure>
            <div class="preview__data">
            <h4 class="preview__title">${title}</h4>
            <p class="preview__publisher">${publisher}</p>
            <div class="preview__user-generated">
                <svg>
                <use href="src/img/icons.svg#icon-user"></use>
                </svg>
            </div>
            </div>
        </a>
</li>`
}