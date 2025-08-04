
# Documentação: Carregamento Dinâmico de Conteúdo para Projeto Dark Souls

Este documento detalha a implementação de uma solução simples e funcional para gerenciar e exibir grande volume de conteúdo HTML dinamicamente em um site hospedado no GitHub Pages. A abordagem escolhida utiliza JavaScript (Fetch API) para carregar fragmentos de HTML conforme a necessidade do usuário, evitando um único arquivo HTML massivo e facilitando a manutenção.

O objetivo principal é dividir o extenso conteúdo sobre Dark Souls em arquivos HTML menores e organizados. Em vez de ter todo o texto e imagens em um único `index.html`, usamos JavaScript para "puxar" o conteúdo relevante de arquivos separados e inseri-lo na página principal quando um usuário clica em um item do menu, por exemplo.



### `index.html` (Página Principal)

```html

    <header>
        <h1>O Legado de Dark Souls</h1>
        <nav>
            <button onclick="loadContent('introducao')">Introdução</button>
            <button onclick="loadContent('personagens')">Personagens</button>
            <button onclick="loadContent('lore')">Lore</button>
            <button onclick="loadContent('armas')">Armas</button>
            </nav>
    </header>

    <main id="content-area">
        <p>Carregando conteúdo...</p>
    </main>

</body>
</html>
```

  * Observe o `id="content-area"` no elemento `<main>`. É aqui que o JavaScript injetará o HTML carregado.
  * Os botões na `<nav>` chamam a função `loadContent()` do JavaScript, passando o nome do arquivo de conteúdo desejado (sem a extensão `.html`).

### Arquivos de Conteúdo (`content/*.html`)

Cada arquivo nesta pasta deve conter **apenas o fragmento HTML** que você deseja exibir. **Não inclua** as tags `<html>`, `<head>`, ou `<body>` completas.

**Exemplo: `content/introducao.html`**

```html
<section class="content-section">
    <h2>Bem-vindo a Lordran: O Início da Jornada</h2>
    <p>Lordran é uma terra amaldiçoada, onde os Undeads são marcados e forçados a uma peregrinação em busca do destino. Mergulhe em um mundo de ruínas, monstros e mistérios ancestrais...</p>
    <figure>
        <img src="assets/imagens/lordran_map.jpg" alt="Mapa de Lordran" style="max-width: 100%; height: auto; border-radius: 8px;">
        <figcaption>Mapa conceitual de Lordran, o reino em ruínas.</figcaption>
    </figure>
    <h3>A Maldição do Undead</h3>
    <p>A maldição se manifesta como uma marca escura, privando a morte verdadeira e condenando a uma existência cíclica de ressurreição e perda de humanidade.</p>
    </section>
```

  * **Caminhos de Imagens:** Repare que o `src` da imagem é `assets/imagens/lordran_map.jpg`. Os caminhos para imagens e outros recursos devem ser **relativos ao `index.html`**, não ao arquivo de conteúdo.

### `script.js` (Lógica de Carregamento)

Este arquivo contém a função JavaScript que faz a requisição para buscar o HTML e exibi-lo.

```javascript

function loadContent(pageName) {
    const contentArea = document.getElementById('content-area');
    const filePath = `content/${pageName}.html`; // Constrói o caminho completo para o arquivo

    // Exibe uma mensagem de carregamento enquanto o conteúdo é buscado
    contentArea.innerHTML = '<p>Carregando...</p>';

    fetch(filePath)
        .then(response => {
            // Verifica se a requisição foi bem-sucedida (status HTTP 200-299)
            if (!response.ok) {
                // Lança um erro se a resposta não for OK, útil para depuração
                throw new Error(`Erro ao carregar o conteúdo: ${pageName}. Status: ${response.status}`);
            }
            return response.text(); // Extrai o corpo da resposta como texto (HTML)
        })
        .then(html => {
            // Insere o HTML carregado na área de conteúdo
            contentArea.innerHTML = html;
            // Opcional: Rola a página para o topo para melhor UX ao carregar novo conteúdo
            window.scrollTo({ top: 0, behavior: 'smooth' });
        })
        .catch(error => {
            // Captura e exibe qualquer erro que ocorra durante o processo de fetch
            console.error('Falha ao carregar conteúdo:', error);
            contentArea.innerHTML = `<p style="color: red; padding: 20px;">Não foi possível carregar o conteúdo "${pageName}". Por favor, verifique o caminho e o arquivo. Detalhes: ${error.message}</p>`;
        });
}

// Carrega o conteúdo da "introducao" automaticamente quando a página é carregada pela primeira vez.
document.addEventListener('DOMContentLoaded', () => {
    loadContent('introducao');
});
```

  * **`fetch(filePath)`**: A função principal que faz a requisição HTTP para o arquivo HTML.
  * **`.then(response => response.text())`**: Processa a resposta da requisição, transformando-a em texto (o HTML).
  * **`.then(html => contentArea.innerHTML = html)`**: Pega o HTML recebido e o insere dentro do elemento `<main>` do seu `index.html`.
  * **`.catch(error => ...)`**: Essencial para depuração, esta parte lida com erros (por exemplo, arquivo não encontrado), mostrando uma mensagem para o usuário e no console do navegador.
  * **`DOMContentLoaded`**: Garante que a função `loadContent('introducao')` seja chamada apenas depois que todo o DOM do `index.html` estiver carregado, garantindo que o `content-area` exista.

-----
