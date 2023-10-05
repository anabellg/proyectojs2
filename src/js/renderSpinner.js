// Inciso 23
const renderSpinner = (spinnerParentElement) => {

    spinnerParentElement.innerHTML = ""

    let markup = `
        <div class="spinner">
            <svg>
                <use href="src/img/icons.svg#icon-loader"></use>
            </svg>
        </div>
    `;

    spinnerParentElement.insertAdjacentHTML('afterbegin', markup)

}

export default renderSpinner
