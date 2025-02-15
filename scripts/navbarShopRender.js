
export function renderNavbarshop () {

    const navbar = document.querySelector('.js-navbar-target-shop') 

    

    
        const renderNavbarHTML =
        `
        <div class="top-navbar ">
                      <div class="top-navbar-logo-image-container">
                          <a href="mainPage.html" class="logo-link">
                              <img class="company-logo" src="images/TOREBKI LOGO.png">
                          </a>
                      </div>   
                      <div class="top-buttons-container">      
                            <div class="shop-searchbar-container">
                            <button class="expand-searchbar">
                              <img class="search-icon-edit" src="../images/search-icon3.png">
                            </button>
                                <input class="product-search" type="text" name="product-search" placeholder="Search products" >
                            </div>                      

                          <div class="start-button-container">
                              <button class="start-button-top js-home-btn">HOME</button>
                          </div>

                          <div class="shop-button-container">
                              <button class="shop-button-top js-shop-btn">SHOP</button>
                          </div>

                          <div class="contact-button-container js-contact-btn">
                              <button class="contact-button-top">CONTACT</button>
                          </div>

                          <div class="shop-cart-icon"> </div>
                      </div>
                    
                  </div>
      `
      document.querySelector('.js-navbar-target-shop').innerHTML = renderNavbarHTML

      document.querySelector('.js-home-btn').addEventListener('click', () => {
        window.location.href="mainPage.html"
    } )
    document.querySelector('.js-shop-btn').addEventListener('click', () => {
        window.location.href="Shop.html"
    } )
    document.querySelector('.js-contact-btn').addEventListener('click', () => {
        window.location.href="contact.html"
    } )



}






  