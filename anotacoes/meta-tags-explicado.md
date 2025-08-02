## 📘 Documentação de Meta Tags

### 🔧 Meta Tags Básicas

| Meta Tag | Função | Exemplo de Uso |
|----------|--------|----------------|
| `<meta charset="utf-8">` | Define o conjunto de caracteres usado na página. `UTF-8` é o padrão moderno que suporta acentuação e símbolos especiais. | Essencial para evitar problemas com caracteres como `ç`, `ã`, `é`. |
| `<meta name="viewport" content="width=device-width, initial-scale=1">` | Controla o comportamento da página em dispositivos móveis. Garante que o layout seja responsivo. | Sem ela, o site pode parecer "quebrado" em celulares. |

---

### 🧑‍💻 Meta Tags Informativas

| Meta Tag | Função | Exemplo de Uso |
|----------|--------|----------------|
| `<meta name="author" content="Hugo">` | Informa quem criou ou mantém o site. | Pode ser seu nome, equipe ou empresa. |
| `<meta name="description" content="Projeto inspirado em Dark Souls com visual sombrio e tipografia medieval.">` | Descreve o conteúdo da página. Usado por motores de busca e redes sociais. | Ideal para SEO e compartilhamento. |

---

### 🌐 Meta Tags Open Graph (Facebook, LinkedIn, etc.)

| Meta Tag | Função | Exemplo de Uso |
|----------|--------|----------------|
| `<meta property="og:title" content="Dark Souls Project">` | Título exibido ao compartilhar o site. | Deve ser chamativo e direto. |
| `<meta property="og:description" content="Explore um universo sombrio com fontes góticas e cores profundas.">` | Descrição exibida na prévia do link. | Complementa o título com mais contexto. |
| `<meta property="og:image" content="https://meusite.com/imagem.jpg">` | Imagem de destaque ao compartilhar. | Use uma imagem impactante e otimizada. |
| `<meta property="og:url" content="https://meusite.com">` | URL canônica da página. | Garante que o link correto seja compartilhado. |
| `<meta property="og:site_name" content="Dark Souls Project">` | Nome do site ou projeto. | Pode ser o nome da marca ou do projeto. |

---

### 🐦 Meta Tags para Twitter

| Meta Tag | Função | Exemplo de Uso |
|----------|--------|----------------|
| `<meta name="twitter:card" content="summary_large_image">` | Define o tipo de cartão do Twitter. `summary_large_image` mostra uma imagem grande. | Melhora o visual do link compartilhado. |
| `<meta name="twitter:image:alt" content="Imagem de capa do projeto Dark Souls">` | Texto alternativo para a imagem. | Importante para acessibilidade e SEO. |

---

## ✅ Dicas de Boas Práticas

- Preencha todas as tags com **conteúdo relevante e verdadeiro**.
- Use imagens otimizadas (JPEG/PNG, 1200x630px para Open Graph).
- Teste como sua página aparece em redes sociais com ferramentas como [Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/) e [Twitter Card Validator](https://cards-dev.twitter.com/validator).

---
