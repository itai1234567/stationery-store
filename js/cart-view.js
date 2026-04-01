let cart =
JSON.parse(
localStorage.getItem("cart")
) || [];

const container =
document.getElementById(
"cart-items"
);

let total = 0;

cart.forEach(function(item,index){

total += item.price;

container.innerHTML += `

<div class="card">

<img src="${item.image}">

<h3>${item.name}</h3>

<p>${item.price} دينار</p>

<button onclick="removeItem(${index})">

حذف

</button>

</div>

`;

});

document.getElementById(
"total-price"
).textContent =
"المجموع: " +
total +
" دينار";

function removeItem(index){

cart.splice(index,1);

localStorage.setItem(
"cart",
JSON.stringify(cart)
);

location.reload();

}