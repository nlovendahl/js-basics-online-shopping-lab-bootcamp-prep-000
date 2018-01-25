var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 var itemPrice = Math.floor(Math.random() * 100);
 var itemName = item;
 var cartObject = { [itemName] : itemPrice };
 cart.push(cartObject);
 console.log(`${itemName} has been added to your cart.`);
 return cart;
}

function viewCart() {
  if (cart.length === 0) {
   console.log(`Your shopping cart is empty`);
 } else if (cart.length === 1) {
   console.log(`In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}.`);
 } else if (cart.length === 2) {
   console.log(`In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice} and ${cart[1].itemName} at $${cart[1].itemPrice}.`);
 } else {
   var bigCart = [];
   for (var i = 0; i < cart.length; i++) {
     bigCart.push(`${cart[i].itemName} at $${cart[i].itemPrice}`);
   } 
   if (i === cart.length) {
     bigCart.push(`and ${cart[i].itemName} at $${cart[i].itemPrice}.`);
   }
   console.log(`In your cart, you have ${bigCart}.`)
 }
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
