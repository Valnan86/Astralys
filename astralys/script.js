let cart = [];

function addToCart(product, price) {
  cart.push({ product, price });
  updateCart();
}

function updateCart() {
  const list = document.getElementById('cart-list');
  const count = document.getElementById('cart-count');
  const total = document.getElementById('total');
  list.innerHTML = '';
  let sum = 0;
  cart.forEach((item) => {
    const li = document.createElement('li');
    li.textContent = `${item.product} - $${item.price}`;
    list.appendChild(li);
    sum += item.price;
  });
  count.textContent = cart.length;
  total.textContent = `Total: $${sum}`;
}

function handleContact(e) {
  e.preventDefault();
  alert('Mensaje enviado correctamente. ¡Gracias por contactarnos!');
  e.target.reset();
}
