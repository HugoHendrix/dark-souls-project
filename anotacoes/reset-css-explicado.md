## Documentação: Reset CSS Moderno e Tipografia Fluida

Este documento explica a estrutura e o propósito do snippet de reset CSS e tipografia fluida. Ele foi projetado para fornecer uma base sólida e acessível para o desenvolvimento front-end, garantindo consistência visual e adaptabilidade em diferentes dispositivos e preferências do usuário.

---

### Visão Geral

O objetivo deste reset é eliminar inconsistências padrão dos navegadores e estabelecer uma base previsível para o estilo de novos projetos. Ele incorpora:

* **Reset Universal**: Zera margens, paddings e define o `box-sizing` para todos os elementos.
* **Tipografia Fluida**: Utiliza `clamp()` e variáveis CSS para uma escala de fontes que se adapta automaticamente ao tamanho da tela, priorizando a acessibilidade.
* **Acessibilidade (A11y)**: Inclui regras para `prefers-reduced-motion` e estados de foco (`:focus-visible`), além de uma classe `sr-only`.
* **Mídias e Formulários**: Otimiza a renderização de imagens, vídeos, SVGs e elementos de formulário.
* **Variáveis CSS**: Centraliza definições de cores e line-heights para facilitar a manutenção e a consistência do design.

---

### Seções do Código

#### 1. `@charset 'UTF-8';`

* **Propósito**: Declara a codificação de caracteres do arquivo CSS como UTF-8. Isso garante que caracteres especiais (como acentuações) sejam interpretados corretamente.
* **Observação**: Embora seja comum, embutir isso em um snippet não é estritamente necessário para o funcionamento do snippet em si, mas é uma boa prática para arquivos CSS completos.

#### 2. Variáveis CSS Globais (`:root`)

Define variáveis CSS (custom properties) para valores que serão reutilizados em todo o projeto.

* **Escala de Tipografia Fluida (`--fs-xs` a `--fs-5xl`)**:
    * **Propósito**: Cria uma escala de tamanhos de fonte responsiva e acessível usando a função `clamp(min, ideal, max)`.
        * `min`: O tamanho mínimo da fonte (em `rem`), garantindo que o texto nunca fique ilegível em telas muito pequenas.
        * `ideal`: Um valor fluido (usando `vw` - viewport width) que permite que o tamanho da fonte aumente ou diminua proporcionalmente à largura da tela.
        * `max`: O tamanho máximo da fonte (em `rem`), prevenindo que o texto fique excessivamente grande em telas muito amplas.
    * **Benefício**: Elimina a necessidade de múltiplos `@media queries` para controlar o tamanho da fonte em diferentes breakpoints, tornando a tipografia intrinsecamente responsiva. Prioriza a acessibilidade ao não sobrescrever a base de `rem` (o padrão do navegador é geralmente 16px).
* **Line Heights (`--lh-tight`, `--lh-normal`, `--lh-relaxed`)**:
    * **Propósito**: Define valores de `line-height` para diferentes propósitos (títulos, corpo de texto, etc.), promovendo consistência vertical.
* **Cores Base (`--color-text`, `--color-text-muted`, `--color-focus`)**:
    * **Propósito**: Define cores semânticas para texto principal, texto secundário/atenuado e o estado de foco. Isso centraliza a gestão das cores principais e permite temas ou ajustes fáceis no futuro.

#### 3. Preferência de Movimento Reduzido (`@media (prefers-reduced-motion: reduce)`)

* **Propósito**: Aplica estilos específicos para usuários que indicaram em suas configurações de sistema operacional que preferem menos movimento (por exemplo, devido a vertigem ou ansiedade).
* **Regras Aplicadas**:
    * `scroll-behavior: auto !important;`: Desativa a rolagem suave (`smooth scroll`).
    * `animation-delay`, `animation-duration`, `animation-iteration-count`, `transition-duration`, `transition-delay`: Reduz drasticamente ou elimina animações e transições.
    * `background-attachment: initial !important;`: Previne o paralaxe em fundos para evitar movimento.
* **Benefício**: Uma inclusão crucial para a **acessibilidade**, melhorando a experiência de usuários com sensibilidade a movimentos excessivos.

#### 4. Reset Básico Universal

* **`*, *::before, *::after { box-sizing: border-box; }`**:
    * **Propósito**: Define o modelo de caixa para `border-box` em todos os elementos. Isso significa que `padding` e `border` são incluídos na largura e altura totais de um elemento, simplificando o cálculo de layouts e tornando-o mais intuitivo.
* **`* { margin: 0; padding: 0; }`**:
    * **Propósito**: Remove as margens e paddings padrão que os navegadores aplicam a diversos elementos, garantindo um "quadro limpo" para o desenvolvimento do layout.

#### 5. Configuração `html` e `body`

* **`html { scroll-behavior: smooth; }`**:
    * **Propósito**: Ativa a rolagem suave para âncoras internas (links que apontam para IDs na mesma página).
* **`html { -webkit-text-size-adjust: 100%; }`**:
    * **Propósito**: Previne que navegadores baseados em WebKit (como Safari no iOS) ajustem automaticamente o tamanho da fonte após uma mudança de orientação do dispositivo.
* **`html, body { width: 100%; height: 100%; }`**:
    * **Propósito**: Garante que os elementos `html` e `body` ocupem 100% da largura e altura da viewport, sendo a base para layouts de página inteira.

#### 6. Estilos Globais do `body`

* **`line-height: var(--lh-normal);`**:
    * **Propósito**: Aplica uma altura de linha padrão a todo o texto, definida pela variável `--lh-normal`, para melhor legibilidade.
* **`-webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale;`**:
    * **Propósito**: Melhora a renderização da fonte, aplicando suavização de serrilhado para uma aparência mais nítida, especialmente em sistemas macOS.
* **`font-size: var(--fs-md);`**:
    * **Propósito**: Define o tamanho de fonte base do documento usando a variável fluida `--fs-md` da escala de tipografia.
* **`font-family: system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif;`**:
    * **Propósito**: Define uma pilha de fontes de sistema, que carrega rapidamente e se integra visualmente com o sistema operacional do usuário.
* **`color: var(--color-text);`**:
    * **Propósito**: Aplica a cor de texto padrão definida na variável `--color-text`.

#### 7. Mídia Responsiva

* **`img, picture, video, canvas, svg { display: block; max-width: 100%; height: auto; object-fit: cover; }`**:
    * **Propósito**: Garante que imagens e outros elementos de mídia sejam responsivos (nunca excedam a largura do seu contêiner) e se comportem como blocos para facilitar o layout. `object-fit: cover;` faz com que a mídia preencha o contêiner, cortando partes se necessário.
* **`svg { fill: currentColor; }`**:
    * **Propósito**: Permite que a cor de preenchimento de SVGs seja herdada da propriedade `color` do seu elemento pai, facilitando a estilização de ícones.

#### 8. Elementos de Formulário

* **`input, button, textarea, select { font: inherit; border: none; background: transparent; }`**:
    * **Propósito**: Remove estilos padrão inconsistentes de navegadores para elementos de formulário, permitindo que eles herdem as propriedades de fonte e tenham um ponto de partida limpo para personalização.
* **`button, input[type='submit'], input[type='button'] { cursor: pointer; }`**:
    * **Propósito**: Adiciona um cursor de ponteiro para botões e inputs de tipo `submit` ou `button`, fornecendo uma dica visual de que são clicáveis.
* **`button:disabled, input:disabled { cursor: not-allowed; opacity: 0.6; }`**:
    * **Propósito**: Fornece um feedback visual para elementos desabilitados, indicando que não podem ser interagidos.

#### 9. Estados de Foco Acessíveis

* **`:focus-visible { outline: 2px solid var(--color-focus); outline-offset: 2px; }`**:
    * **Propósito**: Define um estilo de contorno de foco claro e consistente que aparece **apenas** quando o usuário navega via teclado. Isso é crucial para a acessibilidade, pois usuários de teclado dependem do contorno de foco para saber onde estão na página. O `outline-offset` move o contorno para fora do elemento.
* **`button:focus:not(:focus-visible) { outline: none; }`**:
    * **Propósito**: Remove o contorno padrão de foco em botões quando clicados com o mouse (já que o `:focus-visible` cuida da navegação por teclado). Isso evita um "flash" visual que pode ser indesejado em designs modernos.

#### 10. Tipografia

* **`p, h1, h2, h3, h4, h5, h6 { overflow-wrap: break-word; hyphens: auto; }`**:
    * **Propósito**: `overflow-wrap: break-word;` garante que palavras muito longas quebrem e se ajustem ao contêiner, prevenindo overflow. `hyphens: auto;` permite que o navegador automaticamente insira hífens para quebrar palavras entre linhas, melhorando a legibilidade e o ajuste do texto em colunas estreitas.
* **`h1, h2, h3, h4, h5, h6 { line-height: var(--lh-tight); font-weight: 600; }`**:
    * **Propósito**: Aplica uma `line-height` mais justa para títulos e um `font-weight` de 600 (semi-bold) para dar destaque visual.
* **`h1 { font-size: var(--fs-4xl); }` a `h6 { font-size: var(--fs-md); }`**:
    * **Propósito**: Atribui os tamanhos de fonte da escala fluida (`--fs-xl` a `--fs-5xl`) aos elementos de título correspondentes, garantindo hierarquia e responsividade.

#### 11. Links

* **`a { color: var(--color-focus); text-decoration: underline; text-decoration-thickness: 1px; text-underline-offset: 2px; }`**:
    * **Propósito**: Define um estilo básico para links, usando a cor de foco e um sublinhado moderno com espessura e deslocamento controlados para melhor legibilidade.
* **`a:hover { text-decoration-thickness: 2px; }`**:
    * **Propósito**: Aumenta a espessura do sublinhado no hover, fornecendo um feedback visual sutil de que o link é interativo.

#### 12. Listas (`ul`, `ol`)

* **`ul, ol { list-style-position: inside; }`**:
    * **Propósito**: Define a posição do marcador da lista para dentro do conteúdo do item da lista. Isso pode ajudar a evitar que os marcadores fiquem desalinhados com o texto em algumas situações.

#### 13. Tabelas (`table`)

* **`table { border-collapse: collapse; border-spacing: 0; width: 100%; }`**:
    * **Propósito**: Reseta o estilo padrão das tabelas, removendo espaçamento entre células e tornando-as 100% largas por padrão, facilitando a estilização subsequente.

#### 14. Código (`code`, `pre`)

* **`code, pre { font-family: 'SF Mono', Monaco, 'Cascadia Code', 'Roboto Mono', monospace; font-size: 0.9em; }`**:
    * **Propósito**: Define uma pilha de fontes monoespaçadas modernas para blocos de código e texto pré-formatado, garantindo legibilidade para código. `0.9em` reduz ligeiramente o tamanho da fonte para que o código se encaixe melhor.
* **`pre { overflow-x: auto; white-space: pre; }`**:
    * **Propósito**: Garante que blocos de código pré-formatados que excedam a largura do contêiner adicionem uma barra de rolagem horizontal, prevenindo overflow. `white-space: pre;` preserva espaços em branco e quebras de linha.

#### 15. Utilitários de Acessibilidade (`.sr-only`)

* **`.sr-only { ... }`**:
    * **Propósito**: Uma classe utilitária para ocultar conteúdo visualmente de usuários videntes, mas mantê-lo totalmente acessível para leitores de tela e outras tecnologias assistivas. Essencial para fornecer contexto adicional sem poluir a interface visual.

---

### Como Usar

Para usar este reset em seu projeto:

1.  **Copie** o conteúdo do snippet JSON fornecido.
2.  **Abra o VS Code**.
3.  Vá em **File** > **Preferences** > **Configure User Snippets**.
4.  Selecione **`css.json`** (ou crie um novo para seu projeto em `.vscode/seu-nome.code-snippets`).
5.  **Cole** o snippet dentro das chaves `{}` existentes (se houver outros snippets, separe-os com vírgulas).
6.  Salve o arquivo.
7.  Em qualquer arquivo `.css` no VS Code, digite **`resetcss-fluid`** e pressione `Enter` ou `Tab` para inserir o código.

