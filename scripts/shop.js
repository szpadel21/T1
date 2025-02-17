import { renderNavbar } from "./navbarRender.js";
import { products } from "../data/products.js";
import { formatCurrency } from "./utils/money.js";
import { cart,addToCart } from "./cart.js";
renderNavbar()

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
                            <button class="add-to-cart-button js-add-to-cart-button" data-product-id='${product.id}'>book item</button>
                            
                        </div>            
                        <div class="product-cart-quantity-background">
                            <p class="product-cart-quantity">&#10004;</p>
                        </div>
                        

                    </div>
        `;
        
    })





document.querySelector('.js-products-grid').innerHTML = productsHTML

window.addEventListener("scroll", function () {

    let searchbarContainer = document.querySelector(".shop-searchbar-container");
    let searchbarInput = document.querySelector('.js-product-search');
    let searchButton = document.querySelector('.js-search-button')

    if (window.scrollY > 300) {

      searchbarContainer.classList.add("scrolled"); 
      searchbarInput.classList.add('remove-search-bar')
      searchButton.classList.add('edit-search-button')

    } else {

      searchbarContainer.classList.remove("scrolled"); 
      searchbarInput.classList.remove('remove-search-bar')
      searchButton.classList.remove('edit-search-button')
    }
  });


let button = document.querySelector(".cart-button-container");
let popup = document.querySelector(".cart-item-list");

button.addEventListener("click", () => {
    if (popup.style.display === "none" ) {
        popup.style.display = "block"; 
     } else { 
        popup.style.display = "none"; 
     }
  
});

document.addEventListener("click", (event) => {
  if (!button.contains(event.target) && !popup.contains(event.target)) {
    popup.style.display = "none"; 
  }
});

function updateCartQuantity () {
    let cartQuantity = 0;
    cart.forEach((cartItem) => {
        cartQuantity += cartItem.quantity
    })
    document.querySelector('.js-cart-quantity').innerHTML = cartQuantity; 
}

document.querySelectorAll('.js-add-to-cart-button').forEach((button) => { 
    button.addEventListener('click', ( ) => { 
        const productId = button.dataset.productId
        addToCart(productId)
        updateCartQuantity()
    })
})

document.querySelector('.checkout-button')
.addEventListener('click',
    () => {
        window.location.href='checkout.html'
    }
)

alert('WORK IN PROGRESS --- 80%')