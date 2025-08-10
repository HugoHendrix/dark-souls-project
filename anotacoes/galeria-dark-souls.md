# 📁 Documentação: Boas Práticas para Galeria de Imagens

## 🖼️ Sobre o uso de `.jpg` com menos de 100 KB

- ✅ **Performance**: páginas carregam mais rápido, especialmente em conexões móveis.
- ✅ **SEO**: sites rápidos têm melhor ranqueamento nos mecanismos de busca.
- ✅ **Experiência do usuário**: menos tempo de espera, navegação mais fluida.
- ✅ **Compatibilidade**: `.jpg` é amplamente suportado e ideal para fotos e artes complexas.

### 🧪 Dica extra

Mesmo com arquivos leves, você pode aplicar `loading="lazy"` para adiar o carregamento de imagens fora da tela:

```html
<img src="galeria/bosses.jpg" alt="Boss lendário" loading="lazy" />
```

## 🖼️ Formatos de Imagem: Qual usar?

| Formato | Ideal para                   | Vantagens                              | Desvantagens                                 |
| ------- | ---------------------------- | -------------------------------------- | -------------------------------------------- |
| `.webp` | Imagens gerais e arte        | Alta compressão + qualidade            | Nem todos editores suportam nativamente      |
| `.jpg`  | Fotos e artes complexas      | Boa qualidade com compressão razoável  | Perde qualidade em compressão alta           |
| `.png`  | Ícones, logos, transparência | Alta fidelidade, suporta transparência | Tamanho maior                                |
| `.svg`  | Ícones vetoriais             | Escalável sem perda de qualidade       | Não ideal para fotos ou artes pintadas       |
| `.avif` | Alta performance moderna     | Compressão superior ao WebP            | Suporte ainda limitado em alguns navegadores |

**Recomendação**: Use `.webp` sempre que possível para imagens grandes. Mantenha `.png` para elementos com transparência e `.svg` para ícones.

---

## 🔍 SEO e Acessibilidade

- **`alt` obrigatório**: Sempre descreva a imagem com clareza. Isso ajuda leitores de tela e melhora o SEO.
- **`figcaption`**: Use para contextualizar a imagem.
- **Evite nomes genéricos**: Renomeie arquivos com palavras-chave relevantes (ex.: `anor-londo-catedral.webp`).
- **Use `<h2>` ou `<h3>` para títulos de seção**: Isso ajuda os mecanismos de busca a entender a estrutura do conteúdo.

---

## 📱 Responsividade

- Use `grid` ou `flexbox` para adaptar a galeria a diferentes tamanhos de tela.
- Evite fixar larguras em `px`; prefira `minmax`, `%`, `vw`, ou `rem`.

---

## 🧱 Estrutura HTML Básica

```html
<section class="galeria">
  <h2>Galeria de Imagens</h2>
  <div class="grid-galeria">
    <figure>
      <img
        src="assets/images/lordran.webp"
        alt="Vista de Lordran ao entardecer"
      />
      <figcaption>Lordran em sua glória decadente</figcaption>
    </figure>
    <figure>
      <img
        src="assets/images/anor-londo.webp"
        alt="Catedral de Anor Londo iluminada pelo sol"
      />
      <figcaption>Anor Londo — a cidade dos deuses</figcaption>
    </figure>
    <!-- Mais imagens -->
  </div>
</section>
```

---

## 🎨 Estilização com CSS

```css
.grid-galeria {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  padding: 2rem;
}

figure {
  margin: 0;
  text-align: center;
}

img {
  width: 100%;
  height: auto;
  border-radius: 8px;
  object-fit: cover;
}
```

---

## 🧱 Explicação Detalhada: Usando CSS Grid em Galerias

### 🎯 Por que usar Grid?

O **CSS Grid Layout** é uma das ferramentas mais poderosas e flexíveis para criar layouts responsivos e organizados. Ele permite dividir o espaço em linhas e colunas, posicionar elementos com precisão e adaptar o conteúdo automaticamente ao tamanho da tela — ideal para galerias de imagens.

---

### 🧩 Estrutura Básica

```css
.grid-galeria {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  padding: 2rem;
}
```

#### Explicando cada parte:

- **`display: grid`**  
  Ativa o modelo de layout Grid para o container.

- **`grid-template-columns: repeat(auto-fit, minmax(250px, 1fr))`**  
  Cria colunas automáticas que se ajustam ao espaço disponível:

  - `repeat(...)`: repete a definição de coluna.
  - `auto-fit`: tenta encaixar o máximo de colunas possível.
  - `minmax(250px, 1fr)`: cada coluna terá no mínimo 250px e pode crescer até ocupar uma fração (`1fr`) do espaço restante.

- **`gap: 1.5rem`**  
  Define o espaçamento entre as imagens (horizontal e vertical).

- **`padding: 2rem`**  
  Adiciona espaçamento interno ao redor da galeria.

---

### 📐 Visualização Responsiva

| Tamanho da tela   | Quantidade de colunas |
| ----------------- | --------------------- |
| Desktop (>1200px) | 4 ou mais             |
| Tablet (~768px)   | 2 a 3                 |
| Mobile (<480px)   | 1                     |

O Grid se adapta automaticamente, sem precisar de media queries, graças ao uso de `auto-fit` e `minmax`.

---

## 🧠 Explicação do Código JavaScript


```javascript
// CODIGO COMPLETO
// GALERIA
const modal = document.getElementById("modal");
const modalImg = document.getElementById("img-modal");
const fechar = document.querySelector(".fechar");
const imagens = document.querySelectorAll(".galeria-img");
const setaEsquerda = document.querySelector(".seta-esquerda");
const setaDireita = document.querySelector(".seta-direita");

let indiceAtual = 0;

function abrirModal(indice) {
  modal.style.display = "block";
  modalImg.src = imagens[indice].src;
  modalImg.alt = imagens[indice].alt;
  indiceAtual = indice;
}

imagens.forEach((img, i) => {
  img.addEventListener("click", () => abrirModal(i));
});

fechar.addEventListener("click", () => {
  modal.style.display = "none";
});

window.addEventListener("click", e => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});

setaDireita.addEventListener("click", () => {
  indiceAtual = (indiceAtual + 1) % imagens.length;
  abrirModal(indiceAtual);
});

setaEsquerda.addEventListener("click", () => {
  indiceAtual = (indiceAtual - 1 + imagens.length) % imagens.length;
  abrirModal(indiceAtual);
});


```
🔹 Código `JavaScript` completo.

---
---

### Explicando linha a linha

```javascript
// Seleciona o elemento do modal
const modal = document.getElementById("modal");
```
🔹 Pega o elemento `<div id="modal">` para poder mostrar ou esconder o modal.

---

```javascript
const modalImg = document.getElementById("img-modal");
```
🔹 Seleciona a imagem dentro do modal (`<img id="img-modal">`) que será atualizada com a imagem clicada.

---

```javascript
const fechar = document.querySelector(".fechar");
```
🔹 Seleciona o botão de fechar (`<span class="fechar">`) para permitir que o usuário feche o modal.

---

```javascript
const imagens = document.querySelectorAll(".galeria-img");
```
🔹 Seleciona todas as imagens da galeria que têm a classe `.galeria-img`. Isso cria uma lista (NodeList) com todas as imagens clicáveis.

---

```javascript
const setaEsquerda = document.querySelector(".seta-esquerda");
const setaDireita = document.querySelector(".seta-direita");
```
🔹 Seleciona as setas de navegação esquerda e direita dentro do modal.

---

```javascript
let indiceAtual = 0;
```
🔹 Variável que guarda o índice da imagem atualmente exibida no modal. Isso permite saber qual imagem está sendo mostrada e navegar entre elas.

---

```javascript
function abrirModal(indice) {
  modal.style.display = "block";
  modalImg.src = imagens[indice].src;
  modalImg.alt = imagens[indice].alt;
  indiceAtual = indice;
}
```

🔍 Função que abre o modal e exibe a imagem correspondente ao índice clicado:

- `modal.style.display = "block"`: torna o modal visível.
- `modalImg.src = imagens[indice].src`: define a imagem do modal com base na imagem clicada.
- `modalImg.alt = imagens[indice].alt`: copia o texto alternativo (acessibilidade).
- `indiceAtual = indice`: atualiza a variável para saber qual imagem está sendo exibida.

---

```javascript
imagens.forEach((img, i) => {
  img.addEventListener("click", () => abrirModal(i));
});
```

🔹 Para cada imagem da galeria:

- `img`: representa a imagem atual.
- `i`: é o índice da imagem (posição na lista).
- `addEventListener("click", ...)`: adiciona um evento que chama `abrirModal(i)` quando a imagem é clicada.

---

```javascript
fechar.addEventListener("click", () => {
  modal.style.display = "none";
});
```

🔹 Quando o botão de fechar é clicado, o modal é escondido.

---

```javascript
window.addEventListener("click", e => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});
```

🔹 Permite fechar o modal ao clicar fora da imagem (na área escura):

- `e.target === modal`: verifica se o clique foi diretamente no fundo do modal.
- Se sim, fecha o modal.

---

```javascript
setaDireita.addEventListener("click", () => {
  indiceAtual = (indiceAtual + 1) % imagens.length;
  abrirModal(indiceAtual);
});
```

🔹 Quando a seta direita é clicada:

- `indiceAtual + 1`: avança para a próxima imagem.
- `% imagens.length`: garante que, ao chegar no fim, volte para o início (loop infinito).
- `abrirModal(indiceAtual)`: exibe a nova imagem.

---

```javascript
setaEsquerda.addEventListener("click", () => {
  indiceAtual = (indiceAtual - 1 + imagens.length) % imagens.length;
  abrirModal(indiceAtual);
});
```

🔹 Quando a seta esquerda é clicada:

- `indiceAtual - 1`: volta uma imagem.
- `+ imagens.length`: evita números negativos.
- `% imagens.length`: garante que, ao chegar no início, volte para o fim.
- `abrirModal(indiceAtual)`: exibe a nova imagem.

---

## ✅ Resultado

- Modal abre ao clicar em qualquer imagem.
- Setas permitem navegar para frente e para trás.
- Modal fecha ao clicar fora ou no botão de fechar.
- O índice é controlado dinamicamente com looping.

---
