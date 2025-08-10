# 📄 Documentação: Efeitos Visuais com `filter` em CSS

## 🎯 Objetivo

Aplicar efeitos visuais diretamente em elementos HTML (como imagens, vídeos ou blocos) usando a propriedade `filter`. Ideal para criar atmosferas estilizadas, destacar elementos ou simular condições ambientais (como névoa, veneno, luz solar etc.).

---

## 🧪 Sintaxe Básica

```css
selector {
  filter: efeito(valor);
}
```

Você pode aplicar um único efeito ou combinar múltiplos:

```css
img {
  filter: grayscale(100%) brightness(80%) blur(2px);
}
```

---

## 🎨 Principais Tipos de `filter`

| Efeito         | Descrição                                                                 | Exemplo CSS                         |
|----------------|---------------------------------------------------------------------------|-------------------------------------|
| `grayscale()`  | Converte para preto e branco (escala de cinza)                            | `filter: grayscale(100%)`           |
| `blur()`       | Aplica desfoque, útil para simular névoa ou profundidade                  | `filter: blur(4px)`                 |
| `brightness()` | Ajusta o brilho (valores >100% aumentam, <100% escurecem)                 | `filter: brightness(80%)`           |
| `contrast()`   | Aumenta ou reduz o contraste                                               | `filter: contrast(150%)`            |
| `opacity()`    | Define a opacidade (0 = invisível, 1 = totalmente visível)                | `filter: opacity(0.5)`              |
| `sepia()`      | Dá um tom envelhecido, como fotos antigas                                 | `filter: sepia(100%)`               |
| `saturate()`   | Intensifica ou reduz a saturação das cores                                | `filter: saturate(200%)`            |
| `invert()`     | Inverte as cores (negativo fotográfico)                                   | `filter: invert(100%)`              |
| `drop-shadow()`| Adiciona sombra ao elemento (semelhante ao `box-shadow`, mas mais flexível)| `filter: drop-shadow(2px 4px 6px black)` |

---

## 🧱 Exemplos Práticos

### 🔥 Imagem com estilo sombrio

```css
img.dark {
  filter: grayscale(100%) brightness(70%) contrast(120%);
}
```

### 🌫️ Simulação de névoa ou veneno

```css
img.blurred {
  filter: blur(3px) opacity(0.8);
}
```

### 🧙 Estilo envelhecido para arte conceitual

```css
img.sepia-style {
  filter: sepia(100%) contrast(110%) brightness(90%);
}
```

---

## 🧠 Dicas Avançadas

- Combine `filter` com `transition` para criar efeitos interativos:

```css
img:hover {
  filter: grayscale(0%) brightness(100%);
  transition: filter 0.5s ease;
}
```

- Use `filter` em elementos `div`, `section` ou `video` para estilizar blocos inteiros.
- Pode ser aplicado em pseudo-elementos (`::before`, `::after`) para efeitos decorativos.

---

