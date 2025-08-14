
### Efeito de Contorno (`drop-shadow`)

O efeito de contorno em volta de um personagem em uma imagem, que segue a forma dele, é criado com a propriedade CSS **`filter`** e a função **`drop-shadow()`**.

Essa técnica é ideal para imagens com fundo transparente (como arquivos PNG), pois o `drop-shadow` ignora as partes transparentes e aplica o efeito apenas aos pixels visíveis.

#### Estrutura Básica

A sintaxe da função `drop-shadow()` é a seguinte:

```css
filter: drop-shadow(offset-x offset-y blur-radius color);
```

  - **`offset-x`**: Deslocamento horizontal da "sombra". Use `0` para que a sombra fique centralizada.
  - **`offset-y`**: Deslocamento vertical da "sombra". Use `0` para que a sombra fique centralizada.
  - **`blur-radius`**: O raio de desfoque. Para criar uma borda sólida e nítida, defina este valor como **`0`**. Se você quiser uma borda com efeito de brilho, pode aumentar este valor.
  - **`color`**: A cor da borda/sombra.

#### Exemplo Prático

Vamos criar um exemplo com uma imagem de um personagem.

**HTML:**

```html
<img src="caminho/para/sua-imagem.png" class="contorno-personagem" alt="Personagem com contorno">
```

**CSS:**

```css
.contorno-personagem {
  /*
  Sombra que segue a forma da imagem,
  criando um contorno azul de 5 pixels.
  */
  filter: drop-shadow(0 0 0 5px blue);
}
```

Neste exemplo:

  - `0 0`: Não há deslocamento horizontal ou vertical.
  - `0`: O raio de desfoque é zero, o que torna a "sombra" uma linha sólida, ou seja, uma borda.
  - `5px`: O tamanho da borda.
  - `blue`: A cor da borda.

-----

#### Variações Comuns

Você pode ajustar os valores para criar efeitos diferentes:

  - **Contorno com efeito de brilho (glow):** Aumente o `blur-radius`.

    ```css
    filter: drop-shadow(0 0 10px #ff00ff); /* Brilho rosa de 10px */
    ```

  - **Sombra com deslocamento:** Mantenha um `blur-radius` maior e defina valores para `offset-x` e `offset-y`.

    ```css
    filter: drop-shadow(5px 5px 5px #333); /* Sombra escura de 5px */
    ```

