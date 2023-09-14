document.addEventListener("DOMContentLoaded", function () {
    const productId = new URLSearchParams(window.location.search).get("id");

    // Fetch product data from a JSON file
    fetch("product.json")
        .then(response => response.json())
        .then(data => {
            const product = data.find(p => p.id === parseInt(productId, 10));

            if (product) {
                const productDetailsElement = document.getElementById("product-details-content");
                productDetailsElement.innerHTML = `
                    <p>Home / ${product.category}</p>
                    <h1>${product.name}</h1>
                    <h4>$${product.price}.00</h4>
                    <!-- Add more product details here -->
                `;
                const productImg = document.getElementById("product_img");
                productImg.innerHTML = `
                    <img src="${product.image_url}" alt="" width="100%" id="ProductImg">
                `
                

                var ProductImg = document.getElementById("ProductImg");
                var SmallImg = document.getElementsByClassName("small-img");
                SmallImg[0].onclick = function(){
                    ProductImg.src = SmallImg[0].src;
                }
                SmallImg[1].onclick = function(){
                    ProductImg.src = SmallImg[1].src;
                }
                SmallImg[2].onclick = function(){
                    ProductImg.src = SmallImg[2].src;
                }
                SmallImg[3].onclick = function(){
                    ProductImg.src = SmallImg[3].src;
                }
            } else {
                // Handle the case where the product is not found
                console.error("Product not found");
            }
        })
        .catch(error => {
            console.error("Error fetching product data:", error);
        });
});