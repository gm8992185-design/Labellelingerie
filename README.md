# La Belle Lingerie

Loja virtual de lingerie nas cores **bordo** e **off-white**.

## Como usar

1. Baixe o arquivo ZIP
2. Extraia a pasta `la-belle-lingerie`
3. Abra a pasta no VS Code
4. Use a extensão **Live Server** (recomendado) ou abra o `index.html` direto no navegador

## Funcionalidades

- Página inicial com destaques
- Catálogo de produtos
- Carrinho de compras (salva no navegador com localStorage)
- Sistema de login e cadastro
- Checkout preparado para Mercado Pago

## Personalização

### Produtos
Edite o array `products` no arquivo `js/main.js`

### Cores
Altere as variáveis CSS em `css/style.css` (`--bordo` e `--off-white`)

### Mercado Pago
1. Crie conta em [mercadopago.com.br](https://www.mercadopago.com.br)
2. Pegue sua **Public Key** de teste
3. Cole no arquivo `checkout.html` (substitua o valor de `PUBLIC_KEY`)

## Estrutura de pastas

```
la-belle-lingerie/
├── index.html
├── catalogo.html
├── carrinho.html
├── login.html
├── checkout.html
├── css/
│   └── style.css
├── js/
│   ├── main.js
│   ├── cart.js
│   └── auth.js
└── README.md
```

## Próximos passos recomendados

- Backend (Node.js + Express ou Firebase)
- Banco de dados real
- Upload de fotos dos produtos
- Preferência de pagamento gerada no servidor (obrigatório para produção)
