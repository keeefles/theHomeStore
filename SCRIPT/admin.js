let adminTable = document.querySelector('[admin-tbody]')
function adminContent(){
    try{
        let products = JSON.parse(
            localStorage.getItem('products')
        )
        adminTable.innerHTML = ''
        products.forEach( (product, i) =>{
            adminTable.innerHTML += `
            <tr class="text-center">
                <td> ${product.name} </td>
                <td> <img src="${product.image}" id="adminImage"></td>
                <td> <button id="adminEdit" type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal"></> </button></td>
                <td> <button id="adminDelete" admin-delete> <i class="bi bi-trash3"></i> </button>
                <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                  <div class="modal-dialog">
                    <div class="modal-content">
                      <div class="modal-header">
                        <h1 class="modal-title fs-5" id="exampleModalLabel">${product.name}</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                      </div>
                      <div class="modal-body">
                        <label for="recipient-name" class="col-form-label">Name:</label>
                        <input type="text" class="form-control" id="recipient-name">${product.name}
                      </div>
                      <div class="modal-body">
                        <label for="recipient-name" class="col-form-label">Desciption:</label>
                        <input type="text" class="form-control" id="recipient-name">${product.description}
                      </div>
                      <div class="modal-body">
                        <label for="recipient-name" class="col-form-label">Price:</label>
                        <input type="text" class="form-control" id="recipient-name">R${product.price}
                      </div>
                      <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-primary">Save changes</button>
                      </div>
                    </div>
                  </div>
                </div>
                </td>
            </tr>`
        })
    }catch(e){
    }
}
adminContent()

let sort = document.querySelector('[admin-prod]')
sort.addEventListener('click', sort)

let remove = document.querySelector('[admin-delete]')
//for the delete function for admin edits
function deleteProduct(){
    try{
        let index = admin.findIndex(admin =>{
            return admin.id == admin.id
        })
        admin.splice(index, 1)
        localStorage.setItem('products', JSON.stringify('products'))
    }catch(e){
        console.log(e.message);
    }
}
deleteProduct()
del.addEventListener('click', deleteProduct)


