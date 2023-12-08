// display current year within the footer.
document.querySelector('#currYear').textContent = new Date().getUTCFullYear()

// initialise the products from the local storage.
let products = localStorage.getItem('products')  ?
JSON.parse(localStorage.getItem('products')) :
    localStorage.setItem('products', JSON.stringify([

// create your sample data - objects
    {
        id: 1,
        name: "Bubble Candle",
        price: 60,
        description: "perfect gift for someone with minimalistic style.",
        image: "https://i.postimg.cc/kgFrpCrN/Screenshot-2023-12-05-085816.png"
    },
    {
        id: 2,
        name: "Bamboo Steamer",
        price: 250,
        description: "Steam bao, fish or vegetables, essential for every Asian kitchen",
        image: "https://i.postimg.cc/9MGqyQg9/Screenshot-2023-12-05-085221.png"
    },
    {
        id: 3,
        name: "Polka Mustard Set",
        price: 400,
        description: "12 piece set. includes 4 dinner plates, 4 side plates and 4 soup bowls",
        image: "https://i.postimg.cc/m2K2sB60/Screenshot-2023-12-05-084745.png"
    },
    {
        id: 4,
        name: "Starter Baking Set",
        price: 300,
        description: "includes two silicone baking trays and a lava cake mold.",
        image: "https://i.postimg.cc/RZ367gjz/Screenshot-2023-12-05-085321.png"
    },
    {
        id: 5,
        name: "Glass Container",
        price: 150,
        description: "could be used for make-up, hands-towels or underwear.",
        image: "https://i.postimg.cc/jd1Y7cHN/Screenshot-2023-12-05-084903.png"
    },
    {
        id: 6,
        name: "6 Piece Knife Set",
        price: 200,
        description: "includes a 6 inch knife, a peeler, 8inch knife, 13 inch, 14 inch, 15 inch",
        image: "https://i.postimg.cc/0j21pHXG/Screenshot-2023-12-05-085144.png"
    },
    {
        id: 7,
        name: "Charcuterie Board Set",
        price: 350,
        quantity: 1,
        description: "A set of three different boards, can be used for chopping as well.",
        image: "https://i.postimg.cc/SQ7KCBR9/Screenshot-2023-12-05-084835.png"
    },
    {
        id: 8,
        name: "Spice Container",
        price: 65,
        quantity: 1,
        description: "Bamboo lid, 500ml container",
        image: "https://i.postimg.cc/VLmdhYp4/Screenshot-2023-12-05-084316.png"
    },
    {
        id: 9,
        name: "Rounded Charcuterie Board",
        price: 180,
        description: "rounded charcuterie board with four ini utensils.",
        image: "https://i.postimg.cc/dt2G7NPN/Screenshot-2023-12-05-084947.png"
    },
    {
        id: 10,
        name: "Bear Candle",
        price: 80,
        description: "perfect gift for a baby shower or to display in a nursery room",
        image: "https://i.postimg.cc/Bnqvw3Qx/Screenshot-2023-12-05-085614.png"
    },
    {
        id: 11,
        name: "I Love You Candle",
        price: 75,
        description: "Love is in the air, quite literally... Amazing gift for date night or Valentines Day.",
        image: "https://i.postimg.cc/yxfS7tSk/Screenshot-2023-12-05-085650.png"
    },
    {
        id: 12,
        name: "Geometric Dining Set",
        price: 350,
        description: "12 Piece Rounded kitchenware with Geometric patterns. Includes 4 bowls, 4 side plates and 4 dinner plates.",
        image: "https://i.postimg.cc/1tfhj9dY/Screenshot-2023-12-05-084754.png",
        addToCart: ""
    }
])
)
let purchase = JSON.parse(localStorage.getItem('purchase')) || []
// display the functions and images
let productsWrapper = document.querySelector('[data-products]')
function displayProducts(){
    productsWrapper.innerHTML = ''
    if(products){
        products.forEach((products, i) => {
            productsWrapper.innerHTML += 
            `
            <div class="product">
            <img src="${products.image}" alt="${products.name}" class="images2">
        <h3>${products.name}</h3>
        <p>${products.description}</p>
        <p>Price: R${products.price}</p>
        <button class="add-to-cart" data-id="${products.cart}" onclick='addPurchase(${JSON.stringify(products)})'>Add to Cart</button>
            `
        });
    
}
else{
    productsWrapper.innerHTML = "No Products"
}}
displayProducts()



// create a function which allows us to search for a specific product
let searchProducts = document.querySelector('[data-search-products]')
function displayProducts(){
    let productsWrapper = document.querySelector('[data-products]')
    productsWrapper.innerHTML = " "
    if(products) {
        products.forEach((product, i) => {
            productsWrapper.innerHTML += 
            `
            <div class="col9" id="product">
            <img src="${product.image}" alt="${product.name}" class="images2">
        <h3>${product.name}</h3>
        <p>${product.description}</p>
        <p>Price: R${product.price}</p>
        <button class="add-to-cart" data-id="${product.cart}" onclick='addPurchase(${JSON.stringify(product)})'>Add to Cart</button>
            `
        });
} else {
    productsWrapper.innerHTML = `
    <div class="col">
    <div class="spinner-border" role="status">
    </div>
    <p>no items found.</p>
    </div>
    
    `
}}
// display on the web page
displayProducts()

// add an event listener.
searchProducts.addEventListener('keyup', () => {
    try{
        let searchItem = products.filter(products=>{
            return products.name.toLowerCase().includes(searchProducts.value.toLowerCase())
    })
    if(searchItem.length > 0) { 
        productsWrapper.innerHTML = ''
        searchItem.forEach((product, i) => {
            productsWrapper.innerHTML += 
            `
            <div class="product">
            <img src="${product.image}" alt="${product.name}">
        <h3>${product.name}</h3>
        <p>${product.description}</p>
        <p>Price: R${product.price}</p>
        <button onclick='addPurchase(${JSON.stringify(product)})'>Add to Cart</button>
            `
        });
    } else {
        productsWrapper.innerHTML = `
        <div class="col">
   <div class="spinner-border" role="status">
       </div>
     <p>no items found</p>
     </div>
        `
    }
    // if the following method doesn't work it should display an error message.
}catch(e) {
    console.log(e.message);
}
});

// declare a button and create a new function to sort your products by highest or lowest costs.
let sort = document.querySelector('#sortButton');

function productSort() {
    let highest = false;
    productsWrapper.innerHTML = ' '
    highest = highest ? false : true;
    let prod = [];

    if(highest) {
        prod = products.sort((prod1, prod2) => {
            return prod1.price - prod2.price
        });
    }else {
        prod = products.sort((prod1, prod2) => {
            return prod2.price - prod1.price;
        });
    }

    displayProducts(prod);
}
sort.addEventListener('click', productSort);

// add to cart
function addPurchase(item){
    if(item)
        purchase.push(item)
    localStorage.setItem('purchase', JSON.stringify(purchase))
}