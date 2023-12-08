let products = JSON.parse(
    localStorage.getItem('products')
) || []
let adminModal = document.querySelector('[admin-tbody]')
function adminContent(data){
    try{
        adminModal.innerHTML = ''
        data.forEach( (product, i) =>{
            adminModal.innerHTML += `
            <tr class="text-center">
                <td>${product.name}</td>
                <td><img src="${product.image}" id="admin-image"></td>
                <td>R${product.price}</td>
                <td><button adminEdit type="button" class="btn" data-bs-toggle="modal" data-bs-target="#updateModal${product.id}"> <i class="bi bi-pencil-square"></i></button></td>
                <div class="modal fade" id="updateModal${product.id}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                  <div class="modal-dialog">
                    <div class="modal-content">
                      <div class="modal-header">
                        <h1 class="modal-title fs-5" id="exampleModalLabel">${product.name}</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                      </div>
                      <div class="modal-body">
                        <label for="admin-name${product.id}" class="col-form-label">Name:</label>
                        <input type="text" class="form-control" id="admin-name${product.id}" value="${product.name}">
                      </div>
                      <div class="modal-body">
                        <label for="admin-price${product.price}" class="col-form-label">Price:</label>
                        <input type="text" class="form-control" id="admin-price${product.id}" value="${product.price}">
                      </div>
                      <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-primary" onclick='new UpdateAdminProduct(${JSON.stringify(product)}, ${JSON.stringify(i)})'>Save changes</button>
                      </div>
                    </div>
                  </div>
                </div>
                </td>
                <td><button class="btn" admin-delete onclick='deleteProduct(${JSON.stringify(i)})'><i class="bi bi-trash3"></i></button>

            </tr>
            `
          })
        }catch(e){
    }
}
adminContent(products) 



// delete using index.
function deleteProduct(index) {
  try {
    
    products.splice(index, 1);
    localStorage.setItem('products', JSON.stringify(products));
    adminContent(products);
  } catch (e) {
    console.log(e.message);
  }
}

adminModal.addEventListener('click', function (event) {
  if (event.target.matches('[admin-delete]')) {
    let index = parseInt(event.target.getAttribute('data-id'));
    deleteProduct(index);
  }
});
// sorts lowest to highest
function sortProducts(){
    adminModal.innerHTML =''
    let highest = false;
    highest = highest ? false : true;
    // let prod = [];

    if(highest) {
        products.sort((prod1, prod2) => {
            return prod1.price - prod2.price
        });
    }else {
        products.sort((prod1, prod2) => {
            return prod2.price - prod1.price;
        });
    }
    adminContent()
}


// update the product
function UpdateAdminProduct(products, index) {
  // try{
    // this.id = products.id 
    this.name = document.querySelector(`#admin-name${products.id}`).value;
    this.price = +document.querySelector(`#admin-price${products.id}`).value;
    products[index] = Object.assign({}, this)
    console.log(products);
    // localStorage.setItem('products', JSON.stringify(products));
    // adminContent()
    // location.reload()
  // }catch(e){
  //   let err = e.message;
  // }
}

// edits the content in the admin page
function addNewProduct(){
  try{
    let id = products.length + 1;
    let name = document.querySelector(`#recipient-name`).value;
    let price = document.querySelector(`#recipient-price`).value;
    let image = document.querySelector(`#recipient-image`).value;
    let newProduct = {
      id: id,
      name: name,
      price: price,
      image: image,
    };

    // supposed to displayt he content on the webpage
    products.push(newProduct);
    localStorage.setItem('products', JSON.stringify(products));
    adminContent();

    adminModal.innerHTML += '';
    `
    <!-- Modal 2 -->
<button type="button" class="btn btn-primary" data-bs-toggle="modal" 

</button>

<!-- Modal -->
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
<div class="modal-dialog">
<div class="modal-content">
<div class="modal-header">
<h1 class="modal-title fs-5" id="exampleModalLabel">Add New Products</h1>
<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
</div>
<div class="modal-body">
...
</div>
<div class="modal-footer">
<button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
<button type="button" class="btn btn-primary">Save changes</button>
</div>
</div>
</div>
</div>`
  }catch(e){
    console.log(e.message);
  }
}

// displays the modal for ADD
document.getElementById('#modalHome').addEventListener('click', addNewProduct)
function UpdateAdminProduct(products, index) {
  try{
     let id = products.id;
     let name = document.querySelector(`#recipient-name${id}`).value;
     let price = document.querySelector(`#recipient-price${id}`).value;
 
     let updatedProduct = {
       id: id,
       name: name,
       price: price,
       image: products.image,
     };
 
     products[index] = updatedProduct;
     localStorage.setItem('products', JSON.stringify(products));
     adminContent();
  }catch(e){
     console.log(e.message);
  }
 }