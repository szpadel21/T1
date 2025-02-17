export let cart;

loadFromStorage()



export function loadFromStorage ( ) { 
    cart = JSON.parse(localStorage.getItem('cart'))
       if (!cart)   {
        cart =
        [{
            id: "as9d8f7-a9s8dyfh-klj23h41-f9as8d7f-4klj12bh34",
            image: '../images/productimages/naszyjnik1.jpg',
            name: "Gold necklace with pearl and diamonds",
            priceCents: 699900,
            karats: '24kt',
          },{
            id: "kj1234hn-bl15io9-a098sdyrh-23i4hgvbo-8ffsekmhw",
            image: '../images/productimages/white-purse.png',
            name: "GG Marmont small shoulder bag",
            priceCents: 220000,
            karats: ''
          }]
       }
}



export function saveToStorage ( ) { 
    localStorage.setItem('cart' , JSON.stringify(cart))
}

export function addToCart ( ) {
    let matchingItem    

    cart.forEach((cartItem) => { 
        if (productId === cartItem.productId)
        {matchingItem = cartItem}

    })

    if ( matchingItem ) { 
        matchingItem.quantity +=1
    } else { 
        cart.push ({
            productId: productId,
            quantity: 1

        })
    }
    saveToStorage()
}   

export function removeFromCart (productId) {
    const newCart = []
    cart.forEach((cartItem) => {
        if ( cartItem.productId !== productId) {
            newCart.push(cartItem);

        }
    })
    cart = newCart;
    saveToStorage();
    
}



export function updateQuantity(productId, newQuantity) {
    let matchingItem;
  
    cart.forEach((cartItem) => {
      if (productId === cartItem.productId) {
        matchingItem = cartItem;
      }
    });
  
    matchingItem.quantity = newQuantity;
  
    saveToStorage();
}
