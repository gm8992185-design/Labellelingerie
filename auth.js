// Sistema de autenticação simples (localStorage)

function getUser() {
  const user = localStorage.getItem('labelle_user');
  return user ? JSON.parse(user) : null;
}

function saveUser(user) {
  localStorage.setItem('labelle_user', JSON.stringify(user));
}

function logout() {
  localStorage.removeItem('labelle_user');
  window.location.href = 'index.html';
}

function isLoggedIn() {
  return !!getUser();
}

// Atualiza o header com o nome do usuário
function updateAuthUI() {
  const user = getUser();
  const loginLink = document.getElementById('login-link');
  const userArea = document.getElementById('user-area');

  if (user && loginLink && userArea) {
    loginLink.style.display = 'none';
    userArea.innerHTML = `
      <span style="margin-right: 12px;">Olá, ${user.name.split(' ')[0]}</span>
      <button onclick="logout()" class="btn btn-bordo" style="padding: 6px 14px; font-size: 0.85rem;">Sair</button>
    `;
  }
}

// Formulário de Login
document.addEventListener('DOMContentLoaded', () => {
  updateAuthUI();

  const loginForm = document.getElementById('login-form');
  if (loginForm) {
    loginForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const email = document.getElementById('email').value;
      const password = document.getElementById('password').value;

      // Simulação de login (em produção use backend + hash)
      const users = JSON.parse(localStorage.getItem('labelle_users') || '[]');
      const user = users.find(u => u.email === email && u.password === password);

      if (user) {
        saveUser(user);
        alert('Login realizado com sucesso!');
        window.location.href = 'index.html';
      } else {
        alert('E-mail ou senha incorretos.');
      }
    });
  }

  // Formulário de Cadastro
  const registerForm = document.getElementById('register-form');
  if (registerForm) {
    registerForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('reg-name').value;
      const email = document.getElementById('reg-email').value;
      const password = document.getElementById('reg-password').value;

      let users = JSON.parse(localStorage.getItem('labelle_users') || '[]');
      
      if (users.find(u => u.email === email)) {
        alert('Este e-mail já está cadastrado.');
        return;
      }

      const newUser = { id: Date.now(), name, email, password };
      users.push(newUser);
      localStorage.setItem('labelle_users', JSON.stringify(users));
      saveUser(newUser);
      
      alert('Cadastro realizado com sucesso!');
      window.location.href = 'index.html';
    });
  }
});
