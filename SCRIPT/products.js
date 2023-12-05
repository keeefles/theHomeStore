document.querySelector('#currYear').textContent = new Date().getUTCFullYear()

let products = localStorage.getItem('products')  ?
JSON.parse(localStorage.getItem('products')) :
    localStorage.setItem('products', JSON.stringify([
    {
        id: 1,
        name: "Bubble Candle",
        price: "R60",
        description: "perfect gift for someone with minimalistic style.",
        image: "https://i.postimg.cc/kgFrpCrN/Screenshot-2023-12-05-085816.png"
    },
    {
        id: 2,
        name: "Bamboo Steamer",
        price: "R250",
        description: "Steam bao, fish or vegetables, essential for every Asian kitchen",
        image: "https://i.postimg.cc/9MGqyQg9/Screenshot-2023-12-05-085221.png"
    },
    {
        id: 3,
        name: "Polka Mustard Set",
        price: "R400",
        description: "12 piece set. includes 4 dinner plates, 4 side plates and 4 soup bowls",
        image: "https://i.postimg.cc/m2K2sB60/Screenshot-2023-12-05-084745.png"
    },
    {
        id: 4,
        name: "Starter Baking Set",
        price: "R300",
        description: "includes two silicone baking trays and a lava cake mold.",
        image: "https://i.postimg.cc/RZ367gjz/Screenshot-2023-12-05-085321.png"
    },
    {
        id: 5,
        name: "Glass Container",
        price: "R150",
        description: "could be used for make-up, hands-towels or underwear.",
        image: "https://i.postimg.cc/jd1Y7cHN/Screenshot-2023-12-05-084903.png"
    },
    {
        id: 6,
        name: "6 Piece Knife Set",
        price: "R200",
        description: "includes a 6 inch knife, a peeler, 8inch knife, 13 inch, 14 inch, 15 inch",
        image: "https://i.postimg.cc/0j21pHXG/Screenshot-2023-12-05-085144.png"
    },
    {
        id: 7,
        name: "Charcuterie Board Set",
        price: "R350",
        description: "A set of three different boards, can be used for chopping as well.",
        image: "https://i.postimg.cc/SQ7KCBR9/Screenshot-2023-12-05-084835.png"
    },
    {
        id: 8,
        name: "Spice Container",
        price: "R65",
        description: "Bamboo lid, 500ml container",
        image: "https://i.postimg.cc/VLmdhYp4/Screenshot-2023-12-05-084316.png"
    },
    {
        id: 9,
        name: "Rounded Charcuterie Board",
        price: "R180",
        description: "rounded charcuterie board with four ini utensils.",
        image: "https://i.postimg.cc/dt2G7NPN/Screenshot-2023-12-05-084947.png"
    },
    {
        id: 10,
        name: "Bear Candle",
        price: "R80",
        description: "perfect gift for a baby shower or to display in a nursery room",
        image: "https://i.postimg.cc/Bnqvw3Qx/Screenshot-2023-12-05-085614.png"
    },
    {
        id: 11,
        name: "I Love You Candle",
        price: "R75",
        description: "Love is in the air, quite literally... Amazing gift for date night or Valentines Day.",
        image: "https://i.postimg.cc/yxfS7tSk/Screenshot-2023-12-05-085650.png"
    },
    {
        id: 12,
        name: "Geometric Kitchenware Set",
        price: "R350",
        description: "12 Piece Rounded kitchenware with Geometric patterns. Includes 4 bowls, 4 side plates and 4 dinner plates.",
        image: "https://i.postimg.cc/1tfhj9dY/Screenshot-2023-12-05-084754.png"
    }
])
)

let productsWrapper = document.querySelector('[data-products]')
function displayProducts(){
    productsWrapper.innerHTML = ''
    if(products){
        products.forEach((products, i) => {
            productsWrapper.innerHTML += 
            `
            <div class="product">
            <img src="${products.image}" alt="${products.name}">
        <h3>${products.name}</h3>
        <p>${products.description}</p>
        <p>Price: ${products.price}</p>
            `
        });
}
else{
    productsWrapper.innerHTML = "No Products"
}}
displayProducts()




let searchProducts = document.querySelector('[data-search-products]')
function displayProducts(){
    let productsWrapper = document.querySelector('[data-products]')
    productsWrapper.innerHTML = " "
    if(products) {
        products.forEach((products, i) => {
            productsWrapper.innerHTML += 
            `
            <div class="product">
            <img src="${products.image}" alt="${products.name}">
        <h3>${products.name}</h3>
        <p>${products.description}</p>
        <p>Price: ${products.price}</p>
            `
        });
} else {
    productsWrapper.innerHTML = "No Products"
}
}
displayProducts()

searchProducts.addEventListener('keyup', () => {
    try{
        let searchItem = products.filter(products=>{
            return products.name.toLowerCase().includes(searchProducts.value.toLowerCase())
    })
    if(searchItem.length > 0) { 
        productsWrapper.innerHTML = ''
        searchItem.forEach((products, i) => {
            productsWrapper.innerHTML += 
            `
            <div class="product">
            <img src="${products.image}" alt="${products.name}">
        <h3>${products.name}</h3>
        <p>${products.description}</p>
        <p>Price: ${products.price}</p>
            `
        });
    } else {
        productsWrapper.innerHTML = "No Products"
    }
}catch(e) {
    console.log(e.message);
}
});

let prices = document.getElementById('btn')
function sortPrice() {
    let highest = false;
    productsWrapper.innerHTML = ' '
    highest = highest ? false : true;
    let prod = [];
    if(highest){
        prod = prices.sort((prod1, prod2) => {
            return parseInt(prod1.price.split('').slice(1, prod1.price.length).join('')) - parseInt(prod2.price.split('').slice(1, prod2.price.length).join(''));
        } )
    }else {
        prod = prices.sort((prod1, prod2) => {
            return parseInt(prod2.price.split('').slice(1, prod2.price.length).join('')) - parseInt(prod1.price.split('').slice(1, prod1.price.length).join(''));
        } )
    }
}
// displaysortPrices()

prices.addEventListener('click', sortPrice);
