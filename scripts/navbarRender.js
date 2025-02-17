
//navBar render code

export function renderNavbar () {

    const renderNavbarHTML =
    `
      <div class="top-navbar ">
                    <div class="top-navbar-logo-image-container">
                        <a href="mainPage.html" class="logo-link">
                            <img class="company-logo" src="images/TOREBKI LOGO.png">
                        </a>
                    </div>   
                    <div class="top-buttons-container">                              
                        <div class="start-button-container">
                            <button class="start-button-top js-home-btn">HOME</button>
                        </div>
                        <div class="shop-button-container">
                            <button class="shop-button-top js-shop-btn">SHOP</button>
                        </div>
                        <div class="contact-button-container js-contact-btn">
                            <button class="contact-button-top">CONTACT</button>
                        </div> 
                    </div>
                  
                </div>
    `
    document.querySelector('.js-navbar-target').innerHTML = renderNavbarHTML

    

    document.querySelector('.js-home-btn').addEventListener('click', () => {
        window.location.href="mainPage.html"
    } )
    document.querySelector('.js-shop-btn').addEventListener('click', () => {
        window.location.href="Shop.html"
    } )
    document.querySelector('.js-contact-btn').addEventListener('click', () => {
        window.location.href= window.location.href="contact.html"
    } )


    }



 
