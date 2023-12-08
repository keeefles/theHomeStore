let products = JSON.parse(
    localStorage.getItem('products')
) || []
let adminModal = document.querySelector('[admin-tbody]')
function adminContent(){
    try{
        adminModal.innerHTML = ''
        products.forEach( (product, i) =>{
            adminModal.innerHTML += `
            <tr class="text-center">
                <td>${product.name}</td>
                <td><img src="${product.image}" id="admin-image"></td>
                <td>R${product.price}</td>
                <td><button adminEdit type="button" class="btn" data-bs-toggle="modal" data-bs-target="#updateModal${product.id}"> <i class="bi bi-pencil-square"></i></button></td>
                <td><button class="btn" admin-delete onclick='deleteProduct(${JSON.stringify(i)})'><i class="bi bi-trash3"></i></button>
                <div class="modal fade" id="updateModal${product.id}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                  <div class="modal-dialog">
                    <div class="modal-content">
                      <div class="modal-header">
                        <h1 class="modal-title fs-5" id="exampleModalLabel">${product.name}</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                      </div>
                      <div class="modal-body">
                        <label for="recipient-name" class="col-form-label">Name:</label>
                        <input type="text" class="form-control" id="recipient-name" value="${product.name}">
                      </div>
                      <div class="modal-body">
                        <label for="recipient-name" class="col-form-label">Price:</label>
                        <input type="text" class="form-control" id="recipient-name">R${product.price}
                      </div>
                      <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-primary" onclick='new UpdateAdminProduct(${JSON.stringify(product)}, ${JSON.stringify(i)})'>Save changes</button>
                      </div>
                    </div>
                  </div>
                </div>
                </td>
            </tr>
            `
        })
    }catch(e){
    }
}
adminContent()

// delete using index.
function deleteProduct(index) {
  try {
    
    products.splice(index, 1);
    localStorage.setItem('products', JSON.stringify(products));
    adminContent();
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



// products.sort()
// redisplay the products
function UpdateAdminProduct(item, index) {
  try{
    this.id = item.id 
    this.name = document.querySelector('').value

    products[index] = Object.assign({}, this)
    localStorage.setItem('products', JSON.stringify(products));
    adminContent()
  }catch(e){

  }
}