// Inciso 23
import icons from '../img/icons.svg'
const renderSpinner = (spinnerParentElement) => {

    spinnerParentElement.innerHTML = ""

    let markup = `
        <div class="spinner">
            <svg>
                <use href="${icons}#icon-loader"></use>
            </svg>
        </div>
    `;
    spinnerParentElement.insertAdjacentHTML('afterbegin', markup)
}

export default renderSpinner
