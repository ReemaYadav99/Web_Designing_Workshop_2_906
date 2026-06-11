let cartCount = 0;

function addToCart(){
    cartCount++;
    document.getElementById("cart-count").innerText = cartCount;
}

function searchProduct(){

    let input =
    document.getElementById("searchInput")
    .value.toLowerCase();

    let products =
    document.querySelectorAll(".product");

    products.forEach(product=>{

        let name =
        product.querySelector("h3")
        .innerText.toLowerCase();

        if(name.includes(input)){
            product.style.display="block";
        }
        else{
            product.style.display="none";
        }

    });
}