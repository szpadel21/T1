
import { renderNavbarshop } from "./navbarShopRender.js";
import { products } from "../data/products.js";
import { formatCurrency } from "./utils/money.js";
renderNavbarshop()

document.querySelector('.js-toggle-sidebar').addEventListener('click', () => {

    document.querySelector('.js-filter-list').classList.toggle('open')
    document.querySelector('.js-hide').classList.toggle('open')
})


    let productsHTML = ``

    products.forEach((product) => { 
        productsHTML+=
                    `
        <div class="product-container">
                        <div class="product-image-container">
                            <img class="product-image" src="${product.image}">

                        </div>
                        <div class="product-name-container">${product.name}</div>
                        <div class="product-price-container">$${formatCurrency(product.priceCents)}</div>
                        <div class="karat-count-container">${product.karats}</div>
                        <div class="add-to-cart-button-container">
                            <button class="add-to-cart-button">add to cart</button>
                            
                        </div>            
                        <div class="product-cart-quantity-background">
                            <p class="product-cart-quantity">&#10004;</p>
                        </div>
                        

                    </div>
        `;
        
    })




console.log(productsHTML)
document.querySelector('.js-products-grid').innerHTML = productsHTML
