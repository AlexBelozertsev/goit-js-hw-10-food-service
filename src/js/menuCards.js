import menu from '../menu.json';
import menuCardsTpl from '../templates/menuCards.hbs';

const menuCardList = document.querySelector('.js-menu');

menuCardList.insertAdjacentHTML('beforeend', createMenuCardsMarkup(menu));

function createMenuCardsMarkup(menu) {
    return menuCardsTpl(menu);
};

let result = [];
menuCardList.addEventListener('click', onIngridientClick);

function onIngridientClick(e) {
    if (!e.target.classList.contains('tag-list__item')) {
        return;
    }
    const value = e.target.textContent;
    menu.map(item => {
        if (item.ingredients.includes(value)) {
            result.push(item);
        }
    });
    menuCardList.innerHTML = '';
    menuCardList.insertAdjacentHTML('beforeend', createMenuCardsMarkup(result));
}
