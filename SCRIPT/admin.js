// Admin

let tableContent = document.querySelector('[table-product]')

function adminContent(){
    try {
        let products = JSON.parse(localStorage.getItem('products')
    )
    products.forEach((product, i) => {
        tableContent.innerHTML += 
        `
        <tr>
            <td>
            img src="${product.image}" alt="${product.id}" class="img-fluid w-25"
            </td>
            <td>${product.name}</td>
            <td>${product.price}</td>
                <div>
                    <button>
                    <i class="bi bi-pencil-fill" data-bs-toggle="modal" data-bs-target="#updateProduct"></i>
                    </button>
                    <button>Delete</button>
                </div>
                    <button class="btn btn-primary">
                    <i class="bi bi-file-x-fill"></i>
                    </button>
                </div>
    // modal
                <div class="modal fade" id="updateProduct" tabindex="-1" aria-labelledby="updateProduct" aaria-hidden="true">
                <div class="modal-dialog">
                <div class="modal-footer">
                    <button class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary">Save changes</button>
                    </button>
                </div>
                </div>
                </div>
            </td>
        </tr>
        `
    })
    }
};