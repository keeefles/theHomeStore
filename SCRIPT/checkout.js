// create a variable to get the stuff from the localsotrage
let cart = JSON.parse(localStorage.getItem('purchase'));

// display a table of products once they're pulled form the local storage.
let productsWrapper = document.querySelector('[table-checkout]')
function displayProducts(){
    productsWrapper.innerHTML = ''
    if(cart){
        cart.forEach((products, i) => {
            productsWrapper.innerHTML += 

            `
            <tr>
            <th scope="row"><img src="${products.image}"></th>
            <td>${products.name}</td>
            <td value="${products.quantity}" class="quantity-input"></td> 
            <td>R${products.price}</td>
        </tr>
        `
        });  
        
    }
    // if no products are displayed, then show this.
    else{
        productsWrapper.innerHTML = `<div class="col">
        <div class="spinner-border" role="status">
        </div>
        <p>no items found</p>
        </div>
        `
    }
}

    displayProducts();
    // display in the cart.

// create a function that returns only unique objects from an array and gets rid of the duplicates.
function getUniqueProducts(cart) {

    // get the products from the cart and remove duplicates
    let uniqueProducts = Array.from(new Set(cart.map(product => product.name))).map(name => cart.find(product => product.name === name));
// display only the unique products
    return uniqueProducts;
}

function displayUniqueProducts() {
    productsWrapper.innerHTML = '';

    if (cart) {
        let uniqueCart = getUniqueProducts(cart);

        uniqueCart.forEach((product, i) => {
            productsWrapper.innerHTML += `
                <tr>
                    <th scope="row"><img src="${product.image}"></th>
                    <td>${product.name}</td> 
                    <td value="${product.quantity}" class="quantity-input"></td>
                    <td>R${product.price}</td>
                </tr>
            `;
        });
    } else {
        productsWrapper.innerHTML = `<div class="col">
            <div class="spinner-border" role="status"></div>
            <p>no items found</p>
        </div>`;
    }
}


displayUniqueProducts();

let cartWrapper = document.querySelector('[table-checkout]')

let btnPurchase = document.querySelector ('[purchase-remove]');
function removePurchase(){
  localStorage.clear(purchase)
  cartWrapper.innerHTML = ''
}
btnPurchase.addEventListener('click', purchasedItem)

function purchasedItem(){
  if(cart){
    alert('Thank you for purchasing.')
    removePurchase();
cartWrapper.innerHTML = '';

  }else{
    alert('Please add products to your cart.')
  }
}

function calculateTotal(products) {
    let total = 0;
   
    for (let i = 0; i < products.length; i++) {
       let product = products[i];
       total += product.price;
    }
   
    return total;
   }
let totalPrice = calculateTotal(price);
let totalPriceElement = document.querySelector('[admin-price]');
totalPriceElement.textContent = `Total Price: R${totalPrice}`;