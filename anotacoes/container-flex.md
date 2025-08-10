# 📄 Documentação: Layout Responsivo com Flexbox

## 🎯 Objetivo

Este conjunto de classes CSS define um layout **responsivo em linha (row)** usando **Flexbox**, ideal para organizar blocos de conteúdo lado a lado, com quebra automática em telas menores.

---

## 📁 Estrutura das Classes

### `.container-fluid`

```css
.container-fluid {
  width: 100%;
  padding: 4rem 2rem;
}
```

- **`width: 100%`**: ocupa toda a largura disponível da tela.
- **`padding: 4rem 2rem`**: espaçamento interno generoso — 4rem vertical e 2rem horizontal — para respiro visual.

---

### `.flex-row`

```css
.flex-row {
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  justify-content: space-between;
}
```

- **`display: flex`**: ativa o modelo Flexbox.
- **`flex-wrap: wrap`**: permite que os itens quebrem linha em telas menores.
- **`gap: 2rem`**: define o espaçamento entre os itens.
- **`justify-content: space-between`**: distribui os itens com espaço entre eles, alinhando o primeiro à esquerda e o último à direita.

---

### `.flex-item`

```css
.flex-item {
  flex: 1 1 45%;
  background-color: var(--color-bg-secondary);
  padding: 2rem;
  border-radius: 8px;
}
```

- **`flex: 1 1 45%`**:
  - `1`: o item pode crescer.
  - `1`: o item pode encolher.
  - `45%`: base inicial de largura.
- **`background-color: var(--color-bg-secondary)`**: cor de fundo definida por variável CSS.
- **`padding: 2rem`**: espaçamento interno.
- **`border-radius: 8px`**: cantos arredondados para suavidade visual.

---

## 🧱 Exemplo de Uso no HTML

```html
<section class="container-fluid">
  <div class="flex-row">
    <div class="flex-item">
      <h2>História</h2>
      <p>Resumo da Era dos Ancestrais...</p>
    </div>
    <div class="flex-item">
      <h2>Bosses</h2>
      <p>Detalhes sobre Gwyn, Nito e outros...</p>
    </div>
  </div>
</section>
```

---

## 📱 Responsividade

- Em telas maiores, os itens aparecem lado a lado (45% cada).
- Em telas menores, os itens quebram linha automaticamente por causa do `flex-wrap: wrap`.

---
