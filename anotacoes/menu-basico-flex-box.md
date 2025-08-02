## 🧠 O que é `display: flex`?

- É uma propriedade CSS que transforma um container em um **flex container**.
- Os elementos filhos se tornam **flex items**, podendo ser alinhados e distribuídos com facilidade.

---

## 🧱 Estrutura HTML de um menu básico

```html
<nav class="navbar">
  <ul class="nav-list">
    <li><a href="#">Início</a></li>
    <li><a href="#">Sobre</a></li>
    <li><a href="#">Projetos</a></li>
    <li><a href="#">Contato</a></li>
  </ul>
</nav>
```

---

## 🎨 CSS com `display: flex`

```css
.navbar {
  background-color: var(--color-bg-secondary);
  padding: 1rem 2rem;
}

.nav-list {
  display: flex;              /* Ativa o Flexbox */
  gap: 2rem;                  /* Espaçamento entre os itens */
  list-style: none;           /* Remove os marcadores de lista */
  margin: 0;
  padding: 0;
}

.nav-list li a {
  text-decoration: none;
  color: var(--color-text-primary);
  font-family: var(--font-title);
  font-size: 1.6rem;
  transition: color 0.3s ease;
}

.nav-list li a:hover {
  color: var(--color-accent-gold);
}
```

---

## 📱 Responsividade (opcional)

Para transformar o menu em um layout vertical em telas menores:

```css
@media (max-width: 768px) {
  .nav-list {
    flex-direction: column;
    align-items: center;
  }
}
```

---

## 🧩 Explicação rápida das propriedades Flex

| Propriedade         | Função                                         |
|---------------------|------------------------------------------------|
| `display: flex`     | Ativa o Flexbox no container                   |
| `flex-direction`    | Define a direção (`row`, `column`, etc.)       |
| `justify-content`   | Alinha horizontalmente (`center`, `space-between`, etc.) |
| `align-items`       | Alinha verticalmente (`center`, `flex-start`, etc.) |
| `gap`               | Espaçamento entre os itens                     |

---

