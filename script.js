//Product Array starts
// document.getElementById("products").innerHTML = "";
let products = {
    data: [
        {
            productName: "Regular White T-Shirt",
            category: "Mens",
            price: "30",
            image: "Images/men-1.jpg",
            addtocart: "Add To Cart",
        },
        {
            productName: "Beige Short Skirt",
            category: "Womens",
            price: "49",
            image: "Images/women-1.jfif",
            addtocart: "Add To Cart",
        },
        {
            productName: "Sporty SmartWatch",
            category: "Watch",
            price: "99",
            image: "Images/watch-3.png",
            addtocart: "Add To Cart",
        },
        {
            productName: "Basic Knitted Top",
            category: "Mens",
            price: "29",
            image: "Images/men-2.jpg",
            addtocart: "Add To Cart",
        },
        {
            productName: "Black Leather Jacket",
            category: "Kids",
            price: "129",
            image: "Images/kid-1.jfif",
            addtocart: "Add To Cart",
        },
        {
            productName: "Stylish Pink Trousers",
            category: "Womens",
            price: "89",
            image: "Images/women-2.jfif",
            addtocart: "Add To Cart",
        },
        {
            productName: "Brown Men's Jacket",
            category: "Kids",
            price: "189",
            image: "Images/kid-2.jfif",
            addtocart: "Add To Cart",
        },
        {
            productName: "Comfy Gray Pants",
            category: "Womens",
            price: "49",
            image: "Images/women-3.jfif",
            addtocart: "Add To Cart",
        },
        {
            productName: "Regular White T-Shirt",
            category: "Mens",
            price: "30",
            image: "Images/men-3.jpg",
            addtocart: "Add To Cart",
        },
        {
            productName: "Beige Short Skirt",
            category: "Womens",
            price: "49",
            image: "Images/women-4.jfif",
            addtocart: "Add To Cart",
        },
        {
            productName: "Sporty SmartWatch",
            category: "Watch",
            price: "99",
            image: "Images/watch-2.jpg",
            addtocart: "Add To Cart",
        },
        {
            productName: "Basic Knitted Top",
            category: "Mens",
            price: "29",
            image: "Images/men-4.jfif",
            addtocart: "Add To Cart",
        },
        {
            productName: "Black Leather Jacket",
            category: "Kids",
            price: "129",
            image: "Images/kid-3.jfif",
            addtocart: "Add To Cart",
        },
        {
            productName: "Stylish Pink Trousers",
            category: "Womens",
            price: "89",
            image: "Images/women-5.jfif",
            addtocart: "Add To Cart",
        },
        {
            productName: "Brown Men's Jacket",
            category: "Kids",
            price: "189",
            image: "Images/kid-4.jfif",
            addtocart: "Add To Cart",
        },
        {
            productName: "Comfy Gray Pants",
            category: "Womens",
            price: "49",
            image: "Images/women-6.jfif",
            addtocart: "Add To Cart",
        },
        {
            productName: "Regular White T-Shirt",
            category: "Mens",
            price: "30",
            image: "Images/men-5.jfif",
            addtocart: "Add To Cart",
        },
        {
            productName: "Beige Short Skirt",
            category: "Womens",
            price: "49",
            image: "Images/women-7.jfif",
            addtocart: "Add To Cart",
        },
        {
            productName: "Sporty SmartWatch",
            category: "Watch",
            price: "99",
            image: "Images/watch-1.png",
            addtocart: "Add To Cart",
        },
        {
            productName: "Basic Knitted Top",
            category: "Mens",
            price: "29",
            image: "Images/men-6.jfif",
            addtocart: "Add To Cart",
        },
        {
            productName: "Black Leather Jacket",
            category: "Kids",
            price: "129",
            image: "Images/kid-5.jfif",
            addtocart: "Add To Cart",
        },
        {
            productName: "Stylish Pink Trousers",
            category: "Womens",
            price: "89",
            image: "Images/women-8.jfif",
            addtocart: "Add To Cart",
        },
        {
            productName: "Brown Men's Jacket",
            category: "Kids",
            price: "189",
            image: "Images/kid-6.jfif",
            addtocart: "Add To Cart",
        },
        {
            productName: "Comfy Gray Pants",
            category: "Womens",
            price: "49",
            image: "Images/women-9.jfif",
            addtocart: "Add To Cart",
        },
    ],
};
//Product Array ends


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


FillProducts();

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
    let elements = document.querySelectorAll(".card");
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
    let elements = document.querySelectorAll(".product-name");
    let cards = document.querySelectorAll(".card");
    var found = false;
    //loop through all elements
    elements.forEach((element, index) => {
        //check if text includes the search value
        if (element.innerText.includes(searchInput.toUpperCase())) {
            //display matching card
            found = true;
            
            cards[index].classList.remove("hide");
        } else {
            //hide others
            cards[index].classList.add("hide");
        }
    });
    if(found == false)
    {
        document.getElementById("products").innerHTML = "<p class='not_found'>No product found!</p>";
    }
    else
    {
        FillProducts();
    }
});

//Initially display all products
window.onload = () => {
    filterProduct("all");
};