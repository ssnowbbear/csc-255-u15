//make a product ourselves(different ways)
function ProductA(id, price, rating, brand, name, url) {
    return { id, price, rating, brand, name, url, toString() { return this.brand + ' ' + this.name; } };
}
//OR!!! Class constructors must be invoked with the new keyword
class ProductB {
    id;
    price;
    rating;
    brand;
    name;
    url;
    constructor(id, price, rating, brand, name, url) {
        this.id = id;
        this.price = price;
        this.rating = rating;
        this.brand = brand;
        this.name = name;
        this.url = url;
    }
    toString() { return this.brand + ' ' + this.name; }
}
//Image URLs
const urls = [
    "https://m.media-amazon.com/images/I/513DZ5zwCiL._AC_UY575_.jpg",
    "https://m.media-amazon.com/images/I/61smfbfj6WS._AC_UX575_.jpg",
    "https://m.media-amazon.com/images/I/61KKDNRxkIL._AC_UX575_.jpg",
    "https://m.media-amazon.com/images/I/61Acku41SwL._AC_UX575_.jpg",
    "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/da257c6f-fe36-4465-9792-32f15b1c2887/phantom-gt2-academy-flyease-easy-on-off-multi-ground-soccer-cleats-8vkqJ4.png",
    "https://m.media-amazon.com/images/I/814xp34gtcL._AC_UX575_.jpg"
];
//Shoes
const items = [];
//ProductA 
items.push(ProductA(1, 65.09, 4.7, "Under Armour", "Charged Assert 8 Running Shoe", urls[0]));
items.push(ProductA(2, 239.89, 4.6, "Nike", "Jordan 1 Mid Igloo", urls[1]));
items.push(ProductA(3, 49.79, 4.3, "Puma", "Roma Basic Sneaker", urls[2]));
//ProductB (Must use 'new' keyword!)
items.push(new ProductB(4, 47.98, 4.7, "Adidas", "Grand Court Sneaker", urls[3]));
items.push(new ProductB(5, 80.00, 1, "Nike", "Phantom GT Academy Flyease", urls[4]));
items.push(new ProductB(6, 49.99, 4.8, "Crocs", "Classic Clog", urls[5]));
//html functions needed
function check(brand) {
    //checking through update function
    update();
}
;
//cart update
function cartTotal() {
    const markedBoxes = document.querySelectorAll('input[name="cart-selector"]:checked');
    let currentTotal = 0;
    markedBoxes.forEach((checkbox) => {
        const inputElement = checkbox;
        const price = parseFloat(inputElement.dataset.price);
        if (!isNaN(price)) {
            currentTotal += price;
        }
    });
    const cartCost = document.getElementById('cart-cost');
    if (cartCost) {
        cartCost.textContent = `Cart Cost: $${currentTotal.toFixed(2)}`;
    }
    ;
}
;
//toggle border for fun, why not (hehe)
function toggleBorder() {
    const container = document.getElementById('main-container');
    const checkbox = document.getElementById('border');
    if (container && checkbox) {
        container.style.border = checkbox.checked ? '1px solid #000' : '1px solid transparent';
    }
    ;
}
;
//toggle images cause maybe people are weird and don't like seeing the shoes they're buying
function toggleImages() {
    const showImages = document.getElementById('images').checked;
    const images = document.querySelectorAll('#main img');
    images.forEach((img) => {
        img.classList.toggle('hidden-image', !showImages);
    });
}
;
//Final list of rendered stuff -> html render stuff area
function renderTheeProducts(products) {
    const listContainer = document.getElementById('main');
    if (!listContainer)
        return;
    //current cart
    const currentCart = {};
    document.querySelectorAll('input[name="cart-selector"]').forEach((cb) => {
        const inputElement = cb;
        const itemIdentifier = inputElement.dataset.name;
        if (itemIdentifier) {
            currentCart[itemIdentifier] = inputElement.checked;
        }
        ;
    });
    listContainer.innerHTML = '';
    const showImages = document.getElementById('images').checked;
    if (products.length === 0) {
        listContainer.innerHTML = '<p>No shoes found matching the current filters.</p>';
        return;
    }
    ;
    products.forEach((product) => {
        const itemDiv = document.createElement('div');
        itemDiv.className = 'product-item';
        const imageClass = showImages ? '' : 'hidden-image';
        const itemIdentifier = `${product.brand}: ${product.name}`;
        const isChecked = currentCart[itemIdentifier] != undefined ? currentCart[itemIdentifier] : false;
        const checkedAttr = isChecked ? 'checked' : '';
        const infoHtml = `<div class="product-info">
                <img src="${product.url}" alt="${product.name}" class="${imageClass}" onerror="this.onerror=null;this.src='https://placehold.co/60x60/cccccc/000000?text=Shoe'">
                <div>
                    <strong>${product.brand}: ${product.name}</strong><br>
                    Price: $${product.price.toFixed(2)} | Rating: ${product.rating.toFixed(1)} / 5
                </div>
            </div>`;
        const checkboxHtml = `<input type="checkbox" 
                   name="cart-selector" 
                   data-price="${product.price}" 
                   data-name="${itemIdentifier}"
                   ${checkedAttr} 
                   onchange="cartTotal()">`;
        itemDiv.innerHTML = infoHtml + checkboxHtml;
        listContainer.appendChild(itemDiv);
    });
}
;
//filter, sort, render 
function update() {
    let filteredProducts = [...items];
    //price filter
    const maxPrice = parseFloat(document.getElementById('price').value);
    if (maxPrice < 10000) {
        filteredProducts = filteredProducts.filter((product) => product.price <= maxPrice);
    }
    ;
    //rating filter
    const minRate = parseFloat(document.getElementById('rating').value);
    filteredProducts = filteredProducts.filter((product) => product.rating >= minRate);
    //brand filter
    const brands = ["Adidas", "Crocs", "Nike", "Puma", "Under Armour"];
    const selectBrand = [];
    brands.forEach((brand) => {
        //lowercase to match
        const checkboxId = brand.toLowerCase().replace(/\s/g, ''); //'/\s/g' finds all spaces, replace with empty string, makes Under Armour -> under armour
        //handle under armour
        const realId = brand == "Under Armour" ? "under" : checkboxId;
        const brandCheckbox = document.getElementById(realId);
        if (brandCheckbox && brandCheckbox.checked) {
            selectBrand.push(brand);
        }
        ;
    });
    if (selectBrand.length > 0) {
        filteredProducts = filteredProducts.filter((product) => selectBrand.includes(product.brand));
    }
    ;
    const sortByElement = document.getElementById('sort-by');
    const sortBy = sortByElement ? sortByElement.value : 'default';
    switch (sortBy) {
        case 'price-asc':
            filteredProducts.sort((a, b) => a.price - b.price);
            break;
        case 'price-desc':
            filteredProducts.sort((a, b) => b.price - a.price);
            break;
        case 'rating-price-tie':
            filteredProducts.sort((a, b) => {
                if (a.rating != b.rating) {
                    return b.rating - a.rating;
                }
                ;
                return a.price - b.price;
            });
            break;
        case 'default':
        default:
            filteredProducts.sort((a, b) => a.id - b.id);
            break;
    }
    ;
    //bring em in!
    renderTheeProducts(filteredProducts);
    cartTotal();
}
;
//lab questions, didnt want to separate into new file
function runLabProblems() {
    //1) See Nike brand shoes (filter by brand)(All brands?)
    function brandFilter(products) {
        //gather brands together
        const brands = [...new Set(products.map(product => product.brand))];
        //store lists
        const brandGroups = new Map();
        //loop through brand, filter items array
        for (const brand of brands) {
            //keep products where brand matches
            const spcfcBrand = products.filter(product => product.brand == brand);
            //store filtered array in Map
            brandGroups.set(brand, spcfcBrand);
        }
        return brandGroups;
    }
    console.log('-Filter by brand-');
    const brandProducts = brandFilter(items);
    //console.log(brandProducts)
    brandProducts.forEach((products, brand) => {
        console.log(`${brand} (${products.length} item(s))`);
        products.forEach(shoe => console.log(`${shoe.toString ? shoe.toString() : shoe.name}`));
    });
    console.log(`\n`);
    //2) See shoes under $50 (filter by price)
    //should be able to handle filtering any criteria.
    console.log('-Shoes under $50-');
    const cheapShoes = items.filter(product => product.price < 50.00).sort((a, b) => a.price - b.price);
    cheapShoes.forEach(shoe => console.log(shoe.toString ? shoe.toString() : shoe.name));
    console.log(`\n`);
    //add acsending function
    //3) Sort shoes by cost (Look at old assignments, theres a function in there somewhere)
    console.log('-Sorted by price-');
    const priceSort = items.slice().sort((a, b) => a.price - b.price);
    priceSort.forEach(shoe => console.log(shoe.toString ? shoe.toString() : shoe.name));
    console.log(`\n`);
    //4) Sort shoes by rating, if tie -> sort by cheapest (Look at sort assignments)
    console.log('-Sorted by rating-');
    const ratingSort = items.slice().sort((a, b) => {
        //rating (better first)
        if (a.rating != b.rating) {
            return b.rating - a.rating; //descending
        }
        //tie breaker, cheap first
        return a.price - b.price; //ascending
    });
    ratingSort.forEach(shoe => console.log(shoe.toString ? shoe.toString() : shoe.name));
    console.log(`\n`);
    //User has shopping cart, user is going to buy all shoes with 'id <= 3'.
    //need to find how much money to charge them. Sum of price.
    //1st collect products into an array.
    // const cart = ar.filter(p => p.id <=3);
    //5) Reduce to find sum of the price. Map to price before doing reduction.
    //skip reduction and use a loop. either way = $354.77
    console.log('-Sum of cart-');
    const cart = items.filter(product => product.id <= 3).sort((a, b) => a.price - b.price);
    const cartSum = cart.map(product => product.price).reduce((acc, currentPrice) => acc + currentPrice, 0);
    console.log(`Shoes in cart (${cart.length}):`);
    cart.forEach(item => console.log(`  -${item.toString ? item.toString() : item.name}`));
    console.log(`\nThe total is: $${cartSum.toFixed(2)}`); //toFixed(2) for decimals
    //6) Congratulate our user on their purchase.
    console.log('\n***CONGRATULATIONS!***');
    console.log(`Your order for $${cartSum.toFixed(2)} has been received!`);
    //FINE TO STOP HERE BUUUUUUUTTTT A GOOD WEB DEVELOPER WOULD
    //MAKE IT PRETTIER(Look at lab page for examples)
}
;
//initializing commenced 
function initApp() {
    window.update = update;
    window.check = check;
    window.cartTotal = cartTotal;
    window.toggleBorder = toggleBorder;
    window.toggleImages = toggleImages;
    //run lab problems
    runLabProblems();
    update();
}
;
//PULL THE LEVER KRONK
initApp();
//use --target esnext
