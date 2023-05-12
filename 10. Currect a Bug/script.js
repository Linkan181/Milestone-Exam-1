
let cartQuantities = [1, 2, 3, 4]; // Incorrect cart quantities
cartQuantities = doubleCartQuantities(cartQuantities);
console.log(cartQuantities);

//Function to double the quantity of each item
function doubleCartQuantities(cart) {
  for (let i = 0; i < cart.length; i++) {
    cart[i] *= 2;
  }
  return cart;
}