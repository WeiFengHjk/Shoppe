const productList = document.getElementById('product-list');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');

let currentProductIndex = 0;
const products = document.querySelectorAll('.product-item');

// Function to show the current product
function showProduct(index) {
    products.forEach((product, i) => {
        product.style.display = (i === index) ? 'block' : 'none';
    });
}

// Event listener for Previous button
prevBtn.addEventListener('click', () => {
    currentProductIndex = (currentProductIndex > 0) ? currentProductIndex - 1 : products.length - 1;
    showProduct(currentProductIndex);
});

// Event listener for Next button
nextBtn.addEventListener('click', () => {
    currentProductIndex = (currentProductIndex < products.length - 1) ? currentProductIndex + 1 : 0;
    showProduct(currentProductIndex);
});

// Show the first product on page load
showProduct(currentProductIndex);