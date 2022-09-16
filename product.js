var products = [
    {
        product_name: "Regular White T-Shirt",
        category: "Mens",
        price: "30",
        image: "Images/men-1.jpg",
    },
    {
        product_name: "Beige Short Skirt",
        category: "Womens",
        price: "49",
        image: "Images/women-1.jfif",
    },
    {
        product_name: "Sporty SmartWatch",
        category: "Watch",
        price: "99",
        image: "Images/watch-3.png",
    },
    {
        product_name: "Basic Knitted Top",
        category: "Mens",
        price: "29",
        image: "Images/men-2.jpg",
    },
    {
        product_name: "Black Leather Jacket",
        category: "Kids",
        price: "129",
        image: "Images/kid-1.jfif",
    },
    {
        product_name: "Stylish Pink Trousers",
        category: "Womens",
        price: "89",
        image: "Images/women-2.jfif",
    },
    {
        product_name: "Brown Men's Jacket",
        category: "Kids",
        price: "189",
        image: "Images/kid-2.jfif",
    },
    {
        product_name: "Comfy Gray Pants",
        category: "Womens",
        price: "49",
        image: "Images/women-3.jfif",
    },
    {
        product_name: "Regular White T-Shirt",
        category: "Mens",
        price: "30",
        image: "Images/men-3.jpg",
    },
    {
        product_name: "Beige Short Skirt",
        category: "Womens",
        price: "49",
        image: "Images/women-4.jfif",
    },
    {
        product_name: "Sporty SmartWatch",
        category: "Watch",
        price: "99",
        image: "Images/watch-2.jpg",
    },
    {
        product_name: "Basic Knitted Top",
        category: "Mens",
        price: "29",
        image: "Images/men-4.jfif",
    },
    {
        product_name: "Black Leather Jacket",
        category: "Kids",
        price: "129",
        image: "Images/kid-3.jfif",
    },
    {
        product_name: "Stylish Pink Trousers",
        category: "Womens",
        price: "89",
        image: "Images/women-5.jfif",
    },
    {
        product_name: "Brown Men's Jacket",
        category: "Kids",
        price: "189",
        image: "Images/kid-4.jfif",
    },
    {
        product_name: "Comfy Gray Pants",
        category: "Womens",
        price: "49",
        image: "Images/women-6.jfif",
    },
    {
        product_name: "Regular White T-Shirt",
        category: "Mens",
        price: "30",
        image: "Images/men-5.jfif",
    },
    {
        product_name: "Beige Short Skirt",
        category: "Womens",
        price: "49",
        image: "Images/women-7.jfif",
    },
    {
        product_name: "Sporty SmartWatch",
        category: "Watch",
        price: "99",
        image: "Images/watch-1.png",
    },
    {
        product_name: "Basic Knitted Top",
        category: "Mens",
        price: "29",
        image: "Images/men-6.jfif",
    },
    {
        product_name: "Black Leather Jacket",
        category: "Kids",
        price: "129",
        image: "Images/kid-5.jfif",
    },
    {
        product_name: "Stylish Pink Trousers",
        category: "Womens",
        price: "89",
        image: "Images/women-8.jfif",
    },
    {
        product_name: "Brown Men's Jacket",
        category: "Kids",
        price: "189",
        image: "Images/kid-6.jfif",
    },
    {
        product_name: "Comfy Gray Pants",
        category: "Womens",
        price: "49",
        image: "Images/women-9.jfif",
    }

];
var product_names = Array();
for (var i in products) {
    product_names.push(products[i].product_name);
}

console.log(product_names);

function UpdateCartCount() {
    cart = JSON.parse(localStorage.getItem("cart"));
    if (cart != null) {
        var cart_count = cart.length;
        document.getElementById("cart_count").innerText = cart_count;
    }
}




// function FillProducts()
// {
//     for (let i of products.data) {
//         //Create Card
//         let card = document.createElement("div");
//         //Card should have category and should stay hidden initially
//         // card.classList.add("card", i.category, "hide");
//         card.classList.add("card", i.category,);
//         //image div
//         let imgContainer = document.createElement("div");
//         imgContainer.classList.add("image-container");
//         //img tag
//         let image = document.createElement("img");
//         image.setAttribute("src", i.image);
//         imgContainer.appendChild(image);
//         card.appendChild(imgContainer);
//         //container
//         let container = document.createElement("div");
//         container.classList.add("container");
//         //product name
//         let name = document.createElement("h5");
//         name.classList.add("product-name");
//         name.innerText = i.productName.toUpperCase();
//         container.appendChild(name);
//         //price
//         let price = document.createElement("h6");
//         price.classList.add("product-price");
//         price.innerText = "$" + i.price;
//         container.appendChild(price);
//         //category
//         let category = document.createElement("h4");
//         category.classList.add("product-category");
//         category.innerText = i.category;
//         container.appendChild(category);

//         //addtocart-btn
//         let addtocart = document.createElement("h4");
//         addtocart.classList.add("addtocart-btn");
//         addtocart.innerText = i.addtocart;
//         container.appendChild(addtocart);

//         card.appendChild(container);
//         document.getElementById("products").appendChild(card);
//     }
// }


//parameter passed from button (Parameter same as category)
function filterProduct(value) {
    //Button class code
    let buttons = document.querySelectorAll(".button-value");
    buttons.forEach((button) => {
        //check if value equals innerText
        if (value.toUpperCase() == button.innerText.toUpperCase()) {
            button.classList.add("active");
        } else {
            button.classList.remove("active");
        }
    });

    //select all cards
    let elements = document.querySelectorAll(".colmy");
    //loop through all cards
    elements.forEach((element) => {
        //display all cards on 'all' button click
        if (value == "all") {
            element.classList.remove("hide");
        } else {
            //Check if element contains category class
            if (element.classList.contains(value)) {
                //display element based on category
                element.classList.remove("hide");
            } else {
                //hide other elements
                element.classList.add("hide");
            }
        }
    });
}

//Search button click
document.getElementById("search").addEventListener("click", () => {
    //initializations
    let searchInput = document.getElementById("search-input").value;
    let elements = document.querySelectorAll(".productname");
    let cards = document.querySelectorAll(".colmy");
    var found = false;
    //loop through all elements
    elements.forEach((element, index) => {
        //check if text includes the search value
        if (element.innerText.includes(searchInput.toUpperCase())) {
            //display matching card
            found = true;

            colmy[index].classList.remove("hide");
        } else {
            //hide others
            colmy[index].classList.add("hide");
        }
    });
    if (found == false) {
        document.getElementById("products").innerHTML = "<p class='not_found'>No product found!</p>";
    }
    else {

    }
});

//Initially display all products
window.onload = () => {
    filterProduct("all");
};
