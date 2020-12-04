import menu from '../menu.json';
import menuCardsTpl from '../templates/menuCards.hbs';

const menuCardList = document.querySelector('.js-menu');

menuCardList.insertAdjacentHTML('beforeend', createMenuCardsMarkup(menu));

function createMenuCardsMarkup(menu) {
    return menuCardsTpl(menu);
}