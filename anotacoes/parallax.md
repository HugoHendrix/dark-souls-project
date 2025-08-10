# 📄 Parallax Simples

## 🧠 Objetivo

Este projeto demonstra um efeito de **parallax** básico usando apenas **HTML e CSS**, sem JavaScript. O efeito cria uma sensação de profundidade ao rolar a página, com imagens de fundo que permanecem fixas enquanto o conteúdo se move.

---

## 🧱 HTML: Estrutura da Página

O HTML é composto por:

- Duas seções com efeito parallax (`.parallax`)
- Duas seções de conteúdo (`.content`)

### Principais elementos:
```html
<div class="parallax img1"></div>     <!-- Imagem de fundo 1 -->
<div class="content">...</div>        <!-- Texto sobre o efeito -->
<div class="parallax img2"></div>     <!-- Imagem de fundo 2 -->
<div class="content">...</div>        <!-- Texto adicional -->
```

---

## 🎨 CSS: Estilização e Efeito Parallax

### Reset e Box Model
```css
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
```

### Seções Parallax
```css
.parallax {
  height: 100vh;                        /* Ocupa toda a altura da tela */
  background-attachment: fixed;        /* Mantém a imagem fixa ao rolar */
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
```

### Imagens de Fundo
```css
.img1 {
  background-image: url('https://picsum.photos/1920/1080?nature');
}

.img2 {
  background-image: url('https://picsum.photos/1920/1080?mountain');
}
```

### Seções de Conteúdo
```css
.content {
  padding: 50px;
  background: #f1f1f1;
  text-align: center;
}
```

---

## 🖼️ Como Funciona o Parallax

- O `background-attachment: fixed` faz com que a imagem de fundo **não se mova** com o conteúdo.
- Isso cria a ilusão de que o fundo está mais distante, enquanto o conteúdo se move sobre ele.
- O efeito é mais perceptível em telas grandes e com rolagem vertical.

---


