// Sample JSON data with multiple products
var productData = [
    {
      "id" : 1,
      "name": "Red Tshirt",
      "price": 50.00,
      "rating":'<i class="fa fa-star"></i> <i class="fa fa-star"></i> <i class="fa fa-star"></i> <i class="fa fa-star-o"></i> <i class="fa fa-star-o"></i>',
      "image_url": "images/product-1.jpg",
      "category": "Tshirt",
    },
    {
      "id" : 2,
      "name": "Black Shoes",
      "price": 60.00,
      "rating":'<i class="fa fa-star"></i> <i class="fa fa-star"></i> <i class="fa fa-star"></i> <i class="fa fa-star"></i> <i class="fa fa-star-half-o"></i>',
      "category": "shoes",
      "image_url": "images/product-2.jpg",
    },
    {
        "id" : 3,
        "name": "Gray Trouser",
        "price": 40.00,
        "rating":'<i class="fa fa-star"></i> <i class="fa fa-star"></i> <i class="fa fa-star"></i> <i class="fa fa-star"></i> <i class="fa fa-star-o"></i>',
        "image_url": "images/product-3.jpg",
        "category": "trouser",
      },
      {
        "id" : 4,
        "name": "Blue Tshirt",
        "price": 55.00,
        "rating":'<i class="fa fa-star"></i> <i class="fa fa-star"></i> <i class="fa fa-star"></i> <i class="fa fa-star"></i> <i class="fa fa-star-half-o"></i>',
        "image_url": "images/product-4.jpg",
        "category": "tshirt",
      },
      {
        "id" : 5,
        "name": "gray Shoes",
        "price": 65.00,
        "rating":'<i class="fa fa-star"></i> <i class="fa fa-star"></i> <i class="fa fa-star"></i> <i class="fa fa-star-o"></i> <i class="fa fa-star-o"></i>',
        "image_url": "images/product-5.jpg",
        "category": "shoes",
      },
      {
        "id" : 6,
        "name": "Black Tshirt",
        "price": 45.00,
        "rating":'<i class="fa fa-star"></i> <i class="fa fa-star"></i> <i class="fa fa-star"></i> <i class="fa fa-star"></i> <i class="fa fa-star-half-o"></i>',
        "image_url": "images/product-6.jpg",
        "category": "tshirt",
      },
      {
        "id" : 7,
        "name": "Socks",
        "price": 20.00,
        "rating":'<i class="fa fa-star"></i> <i class="fa fa-star"></i> <i class="fa fa-star"></i> <i class="fa fa-star-o"></i> <i class="fa fa-star-o"></i>',
        "image_url": "images/product-7.jpg",
        "category": "socks",
      },
      {
        "id" : 8,
        "name": "Fossils watch",
        "price": 85.00,
        "rating":'<i class="fa fa-star"></i> <i class="fa fa-star"></i> <i class="fa fa-star"></i> <i class="fa fa-star-half-o"></i> <i class="fa fa-star-o"></i>',
        "image_url": "images/product-8.jpg",
        "category": "watch",
      },
      {
        "id" : 9,
        "name": "Roadster Watch",
        "price": 90.00,
        "rating":'<i class="fa fa-star"></i> <i class="fa fa-star"></i> <i class="fa fa-star"></i> <i class="fa fa-star"></i> <i class="fa fa-star-o"></i>',
        "image_url": "images/product-9.jpg",
        "category": "watch",
      },
      {
        "id" : 10,
        "name": "Red Black Shoes",
        "price": 70.00,
        "rating":'<i class="fa fa-star"></i> <i class="fa fa-star"></i> <i class="fa fa-star"></i> <i class="fa fa-star-half-o"></i> <i class="fa fa-star-o"></i>',
        "image_url": "images/product-10.jpg",
        "category": "shoes",
      },
      {
        "id" : 11,
        "name": "Gray Shoes",
        "price": 69.00,
        "rating":'<i class="fa fa-star"></i> <i class="fa fa-star"></i> <i class="fa fa-star"></i> <i class="fa fa-star-o"></i> <i class="fa fa-star-o"></i>',
        "image_url": "images/product-11.jpg",
        "category": "shoes",
      },
      {
        "id" : 12,
        "name": "Black Trouser",
        "price": 42.00,
        "rating":'<i class="fa fa-star"></i> <i class="fa fa-star"></i> <i class="fa fa-star"></i> <i class="fa fa-star"></i> <i class="fa fa-star-half-o"></i>',
        "image_url": "images/product-12.jpg",
        "category": "trouser",
      },
    // Add more products here
  ];

 // Function to populate the product page with JSON data
 function populateProductPage(data) {
  // window.location.href= "productdetails.html";
    var productContainer = document.getElementById("productList");

    data.forEach(function (product) {
      var productHTML = `
        <div class="col-4 product ${product.category}" onclick="openProductDetails(${product.id})" data-price="${product.price}" data-name="${product.name}" >
              <a href = "#">
                  <img src="${product.image_url}" alt="">
                  <h4>${product.name}</h4>
                  <div class="rating">
                      ${product.rating}
                  </div>
                  <p>$${product.price}.00</p>
              </a>
          </div>
      `;
      productContainer.innerHTML += productHTML;
    });
  }



  // Function to open the product details page
    function openProductDetails(productId) {

    // window.location.href = 'productdetail.html';

    var productDetailsContent = document.getElementById("product-details-content");

    // Find the selected product in the data
    var selectedProduct = productData.find(product => product.id === productId);
        // alert("selectedProduct");
        console.log("hii")

    if (selectedProduct) {
      productDetailsContent.innerHTML = `
        <h1>${selectedProduct.name}</h1>
        <p>${selectedProduct.description}</p>
        <p>Price: $${selectedProduct.price} ${selectedProduct.currency}</p>
        <img src="${selectedProduct.image_url}" alt="${selectedProduct.name}" width="200">
        <p>Availability: ${selectedProduct.availability ? 'In Stock' : 'Out of Stock'}</p>
      `;
    }
  }
    // Call the function to populate the product page
    populateProductPage(productData);
