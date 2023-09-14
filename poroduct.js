document.addEventListener("DOMContentLoaded", function () {
    const productList = document.getElementById("productList");

    // Fetch product data from a JSON file
    fetch("product.json")
        .then(response => response.json())
        .then(data => {
            data.forEach(product => {
                var productHTML = `
                    <div class="col-4 product ${product.category}" onclick="openProductDetails(${product.id})" data-price="${product.price}" data-name="${product.name}" >
                        <a href="productdetail.html?id=${product.id}">
                            <img src="${product.image_url}" alt="">
                            <h4>${product.name}</h4>
                            <div class="rating">
                                <i class="${product.rating.rate1}"></i>
                                <i class="${product.rating.rate2}"></i>
                                <i class="${product.rating.rate3}"></i>
                                <i class="${product.rating.rate4}"></i>
                                <i class="${product.rating.rate5}"></i>
                            </div>
                            <p>$${product.price}.00</p>
                        </a>
                    </div>
                `;
                productList.innerHTML += productHTML;
            });
        })
        .catch(error => {
            console.error("Error fetching product data:", error);
        });
});