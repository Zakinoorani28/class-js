let items = [
    { name: 'Bike', price: 100 },
    { name: 'TV', price: 200 },
    { name: 'Album', price: 100 },
    { name: 'Book', price: 5 },
    { name: 'Phone', price: 500 },
    { name: 'Computer', price: 1000 },
    { name: 'Keyboard', price: 25 },
    { name: 'Mouse', price: 35 },
    { name: 'Monitor', price: 150 },
    { name: 'Printer', price: 75 },
    { name: 'Speaker', price: 65 },
    { name: 'Tablet', price: 300 },
    { name: 'Headphones', price: 50 },
    { name: 'Bike', price: 100 },
]

let itemsBox = document.querySelector('.items-box');

for (let i = 0; i < items.length; i++) {
    itemsBox.innerHTML += `<div class="item">
    <h3>${items[i].name}</h3>
    <p>$${items[i].price}</p>
    <button onclick="add(this)">Add to cart</button>
    </div>`
}

let add = (item) => {
    let h3 = item.parentNode.childNodes[1].innerHTML;
    let p = item.parentNode.childNodes[3].innerHTML;
    let cart = document.querySelector('.cart-box');
    cart.innerHTML += `<div class="item">
    <h3>${h3}</h3>
    <p>${p}</p>
    <button onclick="remove(this)">Remove</button>
    </div>`
}

let remove = (item) => {
    item.parentNode.remove();
}