let adminModal = document.querySelector('[admin-tbody]')
function adminContent(){
    try{
        let products = JSON.parse(
            localStorage.getItem('products')
        )
        adminModal.innerHTML = ''
        products.forEach( (product, i) =>{
            adminModal.innerHTML += `
            <tr class="text-center">
                <td>${product.name}</td>
                <td><img src="${product.image}" id="admin-image"></td>
                <td>${product.price}</td>
                <td><button adminEdit type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal"> <i class="bi bi-pencil-square"> </i>Edit</button></td>
                <td><button class="btn" admin-delete><i class="bi bi-trash3"></i></button>
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
            </tr>
            <button type="button" class="btn" admin-clear></button>`
        })
    }catch(e){
    }
}
adminContent()

function adminContent(sortOption = 'name') {
  try {
      let products = JSON.parse(localStorage.getItem('products')) || [];
      
      // Sort products based on the specified option
      if (sortOption === 'name') {
          products.sort((a, b) => a.name.localeCompare(b.name));
      } else if (sortOption === 'price') {
          products.sort((a, b) => a.price - b.price);
      }

      adminModal.innerHTML = '';
      products.forEach((product, i) => {
          adminModal.innerHTML += `
          <tr class="text-center">
              <td>${product.name}</td>
              <td> <img src="${product.image}" id="adminImage"></td>
              <td> <button id="adminEdit" type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal"></> </button></td>
              <td> <button id="adminDelete" admin-delete data-id="${i}"> <i class="bi bi-trash3"></i> </button>
              <!-- rest of the modal -->
              </td>
          </tr>`;
      });
  } catch (e) {
      console.log(e.message);
  }
}

adminContent();

// Event listener for sort button
let sortButton = document.querySelector('[admin-sort]');
sortButton.addEventListener('click', function () {

  let sorting = sortButton.getAttribute('data-sort');
  let newSort = sorting === 'name' ? 'price' : 'name';
  sortButton.setAttribute('data-sort', newSort);
  
  adminContent(newSort);
});

let remove = document.querySelector('[admin-delete]')
//deletes the edits by using the id
function deleteProduct(){
    try{
        let index = admin.findIndex(admin =>{
            return admin.id == admin.id
        })
        // to remove.
        admin.splice(index, 1)
        localStorage.setItem('products', JSON.stringify('products'))
    }catch(e){
        console.log(e.message);
    }
}
// delete using index.
function deleteProduct(index) {
  try {
      let products = JSON.parse(localStorage.getItem('products')) || [];
      products.splice(index, 1);
      localStorage.setItem('products', JSON.stringify(products));
  // refreshes the content to display wihtout the deleted item.
      adminContent();
  } catch (e) {
      console.log(e.message);
  }
}

// call it to bring the data from the localStorage.
adminContent();
// event listener for delete button
adminModal.addEventListener('click', function (event) {
  if (event.target.matches('[admin-delete]')) {
      let index = event.target.getAttribute('data-id');
      deleteProduct(index);
  }
});

function addProduct(newProduct) {
  try {
      let products = JSON.parse(localStorage.getItem('products')) || [];
      products.push(newProduct);
      localStorage.setItem('products', JSON.stringify(products));
      adminContent(); // Update the UI after adding
  } catch (e) {
      console.log(e.message);
  }
}

let addProductButton = document.querySelector('[admin-prod]');
addProductButton.addEventListener('click', function () {

  let productName = document.getElementById('admin-name').value;
  let productImage = document.getElementById('admin-image').value;
  let productDescription = document.getElementById('admin-description').value;
  let productPrice = document.getElementById('admin-price').value;

  if (!productName || !productImage || !productDescription || !productPrice) {
      alert('Please fill in all fields');
      return;
  }
  let newProduct = {
      name: productName,
      image: productImage,
      description: productDescription,
      price: parseFloat(productPrice),
  };
  addProduct(newProduct);

  let modal = new bootstrap.Modal(document.getElementById('exampleModal'));
  modal.hide();
});

// clearbutton displays thanks for purchasing.
let clear = document.querySelector('[admin-clear]');
clear.addEventListener('click', function () {
    // Clear the modal inputs (modify as per your modal structure)
    document.getElementById('admin-name').value = '';
    document.getElementById('admin-image').value = '';
    document.getElementById('admin-description').value = '';
    document.getElementById('admin-price').value = '';

    alert('Thanks for purchasing!');
});