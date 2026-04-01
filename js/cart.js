let cart =
JSON.parse(
localStorage.getItem("cart")
) || [];

function addToCart(id){

if(typeof products === "undefined"){
alert("المنتجات لم يتم تحميلها");
return;
}

let product =
products.find(
p => p.id === id
);

if(product){

cart.push(product);

localStorage.setItem(
"cart",
JSON.stringify(cart)
);

updateCartCount();

alert("تمت إضافة المنتج إلى السلة");

}

}

function updateCartCount(){

const cartNumber =
document.getElementById(
"cart-count"
);

if(cartNumber){

cartNumber.textContent =
cart.length;

}

}

updateCartCount();