// Carrinho de compras

function getCart() {
  return JSON.parse(localStorage.getItem('labelle_cart') || '[]');
}

function saveCart(cart) {
  localStorage.setItem('labelle_cart', JSON.stringify(cart));
  updateCartCount();
}

function addToCart(product) {
  let cart = getCart();
  const existing = cart.find(item => item.id === product.id);

  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({ ...product, qty: 1 });
  }

  saveCart(cart);
  alert(`${product.name} adicionado ao carrinho!`);
}

function removeFromCart(id) {
  let cart = getCart().filter(item => item.id !== id);
  saveCart(cart);
  renderCart();
}

function updateQty(id, change) {
  let cart = getCart();
  const item = cart.find(i => i.id === id);
  if (item) {
    item.qty += change;
    if (item.qty <= 0) {
      cart = cart.filter(i => i.id !== id);
    }
  }
  saveCart(cart);
  renderCart();
}

function getCartTotal() {
  return getCart().reduce((sum, item) => sum + (item.price * item.qty), 0);
}

function updateCartCount() {
  const count = getCart().reduce((sum, item) => sum + item.qty, 0);
  const badges = document.querySelectorAll('.cart-count');
  badges.forEach(badge => {
    badge.textContent = count;
    badge.style.display = count > 0 ? 'flex' : 'none';
  });
}

function renderCart() {
  const container = document.getElementById('cart-items');
  const summary = document.getElementById('cart-summary');
  if (!container) return;

  const cart = getCart();

  if (cart.length === 0) {
    container.innerHTML = `
      <div style="text-align: center; padding: 60px 20px;">
        <p style="font-size: 1.2rem; margin-bottom: 20px;">Seu carrinho está vazio</p>
        <a href="catalogo.html" class="btn btn-bordo">Ver produtos</a>
      </div>
    `;
    if (summary) summary.style.display = 'none';
    return;
  }

  container.innerHTML = cart.map(item => `
    <div class="cart-item">
      <img src="${item.image}" alt="${item.name}">
      <div class="cart-item-info">
        <h3>${item.name}</h3>
        <p style="color: var(--bordo); font-weight: 600;">R$ ${item.price.toFixed(2)}</p>
      </div>
      <div class="cart-item-actions">
        <button class="qty-btn" onclick="updateQty(${item.id}, -1)">−</button>
        <span>${item.qty}</span>
        <button class="qty-btn" onclick="updateQty(${item.id}, 1)">+</button>
        <button onclick="removeFromCart(${item.id})" style="margin-left: 12px; color: #c00; background: none; border: none; cursor: pointer;">Remover</button>
      </div>
    </div>
  `).join('');

  if (summary) {
    summary.style.display = 'block';
    document.getElementById('cart-total').textContent = `R$ ${getCartTotal().toFixed(2)}`;
  }
}

document.addEventListener('DOMContentLoaded', () => {
  updateCartCount();
  renderCart();
});
