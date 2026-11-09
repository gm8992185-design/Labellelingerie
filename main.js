// Produtos de exemplo (substitua depois pelos seus)
const products = [
  {
    id: 1,
    name: "Conjunto Renda Bordô",
    price: 189.90,
    image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=500&h=600&fit=crop",
    description: "Conjunto sensual em renda delicada na cor bordo."
  },
  {
    id: 2,
    name: "Body Transparente Off-White",
    price: 159.90,
    image: "https://images.unsplash.com/photo-1571513722275-4b41940f54b8?w=500&h=600&fit=crop",
    description: "Body semi-transparente em tom off-white."
  },
  {
    id: 3,
    name: "Sutiã & Calcinha Clássico",
    price: 129.90,
    image: "https://images.unsplash.com/photo-1581044777550-4cfa60707c03?w=500&h=600&fit=crop",
    description: "Conjunto clássico em microfibra bordo."
  },
  {
    id: 4,
    name: "Camisola Longa Renda",
    price: 219.90,
    image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=500&h=600&fit=crop",
    description: "Camisola longa com detalhes em renda."
  },
  {
    id: 5,
    name: "Conjunto Strappy Bordô",
    price: 179.90,
    image: "https://images.unsplash.com/photo-1566174053879-31528523f8ae?w=500&h=600&fit=crop",
    description: "Conjunto com tiras e design moderno."
  },
  {
    id: 6,
    name: "Baby Doll Off-White",
    price: 149.90,
    image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=500&h=600&fit=crop",
    description: "Baby doll leve e sensual."
  }
];

function renderProducts(containerId, limit = null) {
  const container = document.getElementById(containerId);
  if (!container) return;

  const list = limit ? products.slice(0, limit) : products;

  container.innerHTML = list.map(product => `
    <div class="product-card">
      <div class="product-image">
        <img src="${product.image}" alt="${product.name}" loading="lazy">
      </div>
      <div class="product-info">
        <h3 class="product-name">${product.name}</h3>
        <p class="product-price">R$ ${product.price.toFixed(2)}</p>
        <div class="product-actions">
          <button class="btn btn-bordo btn-sm" onclick='addToCart(${JSON.stringify(product)})'>
            Adicionar
          </button>
        </div>
      </div>
    </div>
  `).join('');
}

document.addEventListener('DOMContentLoaded', () => {
  renderProducts('featured-products', 4); // página inicial
  renderProducts('all-products');         // catálogo
});
