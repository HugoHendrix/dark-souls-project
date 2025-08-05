# Shorthand para Background no CSS

A shorthand comum para definir o **background** no CSS é a propriedade `background`, que permite configurar várias características do fundo em uma única linha. Ela pode incluir:

- `background-color`
- `background-image`
- `background-position`
- `background-size`
- `background-repeat`
- `background-attachment`
- `background-origin`
- `background-clip`

### 🧪 Exemplo de shorthand:
```css
elemento {
  background: #f0f0f0 url('imagem.jpg') no-repeat center/cover fixed;
}
```

### 🔍 Explicando o exemplo:
- `#f0f0f0` → cor de fundo
- `url('imagem.jpg')` → imagem de fundo
- `no-repeat` → não repetir a imagem
- `center/cover` → posição central e tamanho para cobrir o elemento
- `fixed` → a imagem fica fixa na tela (não rola com o conteúdo)

Você pode usar apenas os valores que precisar — não é obrigatório incluir todos. Por exemplo:

```css
background: url('bg.png') center no-repeat;
```

---

## Propriedades do CSS relacionadas ao **background**

---

### 🎨 `background-color`
Define a **cor de fundo** do elemento.

```css
background-color: lightblue;
```

Você pode usar nomes de cores, hexadecimais (`#ff0000`), RGB, HSL, etc.

---

### 🖼️ `background-image`
Define uma **imagem de fundo**.

```css
background-image: url('fundo.jpg');
```

Pode usar imagens locais ou URLs externas. Também aceita gradientes:

```css
background-image: linear-gradient(to right, red, yellow);
```

---

### 📍 `background-position`
Define a **posição da imagem de fundo** dentro do elemento.

```css
background-position: center;
background-position: top left;
background-position: 50% 50%;
```

Você pode usar palavras-chave (`top`, `right`, `center`) ou valores (`px`, `%`).

---

### 📐 `background-size`
Controla o **tamanho da imagem de fundo**.

```css
background-size: cover;     /* cobre todo o elemento */
background-size: contain;   /* ajusta para caber sem cortar */
background-size: 100px 50px; /* largura e altura específicas */
```

---

### 🔁 `background-repeat`
Define se a imagem de fundo deve **se repetir**.

```css
background-repeat: repeat;       /* padrão: repete em x e y */
background-repeat: no-repeat;    /* não repete */
background-repeat: repeat-x;     /* repete só na horizontal */
background-repeat: repeat-y;     /* repete só na vertical */
```

---

### 📌 `background-attachment`
Controla se o fundo **rola com o conteúdo** ou fica fixo.

```css
background-attachment: scroll;  /* padrão: rola junto */
background-attachment: fixed;   /* fica fixo na tela */
background-attachment: local;   /* rola com o conteúdo interno */
```

---

### 🧭 `background-origin`
Define **onde começa** o fundo dentro do box do elemento.

```css
background-origin: padding-box;  /* padrão: começa no padding */
background-origin: border-box;   /* inclui a borda */
background-origin: content-box;  /* só dentro do conteúdo */
```

---

### ✂️ `background-clip`
Define **até onde o fundo é visível**.

```css
background-clip: border-box;   /* cobre até a borda */
background-clip: padding-box;  /* cobre até o padding */
background-clip: content-box;  /* cobre só o conteúdo */
```

---

