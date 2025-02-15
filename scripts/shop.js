
import { renderNavbarshop } from "./navbarShopRender.js";
renderNavbarshop()



document.querySelector('.js-toggle-sidebar').addEventListener('click', () => {

    document.querySelector('.js-filter-list').classList.toggle('open')
    document.querySelector('.js-hide').classList.toggle('open')
})
