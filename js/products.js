const products = [

{
id:1,
name:"قلم أزرق",
price:1500,
image:"images/pen.jpg"
},

{
id:2,
name:"دفتر",
price:3000,
image:"images/notebook.jpg"
},

{
id:3,
name:"ممحاة",
price:500,
image:"images/eraser.jpg"
},

{
id:4,
name:"قلم رصاص",
price:4000,
image:"images/pencil.jpg"
},

{
id:5,
name:"ألوان خشبية",
price:5000,
image:"images/colors.jpg"
},

{
id:6,
name:"مبراة",
price:750,
image:"images/sharpener.jpg"
}

];

const container =
document.getElementById(
"products-list"
);

if(container){

products.forEach(function(product){

const card = `

<div class="card">

<img src="${product.image}">

<h3>${product.name}</h3>

<p>${product.price} دينار</p>

<button onclick="addToCart(${product.id})">

أضف إلى السلة

</button>

</div>

`;

container.innerHTML += card;

});

}