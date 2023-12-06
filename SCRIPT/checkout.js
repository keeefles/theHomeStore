let cart = JSON.parse(localStorage.getItem('purchase'));

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
            <td>${products.quantity}</td> 
            <td>${products.price}</td>
        </tr>
            `
        });
    
}
else{
    productsWrapper.innerHTML = `<div class="col">
    <div class="spinner-border" role="status">
        </div>
      <p>no items found</p>
      </div>
         `
}}
displayProducts()