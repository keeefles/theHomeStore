// Admin

let tableContent = document.querySelector('[table-product]')
let addProduct = document.querySelector('[add-product]')
let products = JSON.parse(localStorage.getItem('products')) || []

function adminContent(){
    try {
    products.forEach((product, i) => {
        tableContent.innerHTML += 
        `
        <tr>
            <td><img src="${product.image}"></td>
            <td>${product.description}</td>
            <td>${product.name}</td>
            <td>${product.price}</td>
            <button class="btn btn-success" data-bs-toggle="modal" data-bs-target="#editProduct${product.id}">Edit</button>
            <!-- Modal -->
            <div class="modal fade" id="editProduct${product.id}" tabindex="-1" aria-label="editProductLabel${product.id}" aria-hidden="true">
                <div class="modal-dialog">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h1 class="modal-title fs-5" id="editProductLabel${product.id}">Edit Product</h1>
                      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                    <form class="form g-2">
                    <div class="container">
                    <input class="form-control" type="url" placeholder="Enter the Product Image URL" name="addImage" id="addImage" required>
                    <input class="form-control my-2" placeholder="Enter the Product Name" name="addName" id="addName" required></input>
                    <textarea class="form-control" type="text" placeholder="Enter the Description" name="addDescription" id="addDescription" required></textarea>
                    <input class="form-control my-2" type="text" placeholder="Enter the Product Price" name="addPrice" id="addPrice" required></input>
                      </form>
                    </div>
                    <div class="modal-footer my-2">
                      <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" id="btnCloseModal">Close</button>
                      <button type="button" class="btn btn-success" onclick='new EditProduct(${JSON.stringify(product)}, ${JSON.stringify(i)})'>Save changes</button>
                    </div>
                  </div>
                </div>
            </div>        
            <button class="btn btn-secondary" onclick='deleteProduct(${JSON.stringify(i)})'>Delete</button>
        </td>     
    </tr>
        `
    })
    }catch(e){
        tableContent.innerHTML += 
    }
};

adminContent()
function UpdateProduct(item, e){
    e.preventDefault()
    try{
        console.log()
        this.id = item.id;
        this.name = document.querySelector(`#admin-name${this.id}`).value;
        this.price = document.querySelector(`#admin-price${this.id}`).value;
        this.image = document.querySelector(`#admin-image${this.id}`).value;

    let itemIndex = products.findIndex((data)=>{
        return data.id === item.id;
    })
    console.log(itemIndex);
    console.log(this);

    products[itemIndex] = Object.assign({}, this); localStorage.setItem('admin-products', JSON.stringify(products));
    console.log(products);
    adminContent();
    location.reload()
    }
}

