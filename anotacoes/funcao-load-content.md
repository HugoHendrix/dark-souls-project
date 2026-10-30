A função `loadContent(pageName)` é usada para **carregar dinamicamente conteúdo HTML** em uma área específica da página.

---

## 🧠 Função explicada passo a passo:

```js
function loadContent(pageName) {
```
🔹 Define uma função chamada `loadContent` que recebe um parâmetro `pageName`.  
Esse nome será usado para montar o caminho do arquivo HTML que queremos carregar.

---

```js
    const contentArea = document.getElementById('content-area');
```
🔹 Busca o elemento HTML com o ID `content-area` e o armazena na variável `contentArea`.  
Esse é o **alvo** onde o conteúdo carregado será inserido.

---

```js
    const filePath = `conteudos/${pageName}.html`;
```
🔹 Cria o caminho do arquivo HTML que será carregado.  
Se `pageName` for `"sobre"`, o caminho será `conteudos/sobre.html`.

---

```js
    fetch(filePath)
```
🔹 Usa a função `fetch()` para buscar o arquivo HTML no caminho definido.  
É uma chamada assíncrona que retorna uma **Promise**.

---

```js
.then(response => {
```
🔹 Quando a resposta da requisição chega, este `.then()` é executado com o objeto `response`.

---

```js
    if (!response.ok) {
        throw new Error(`Erro ao carregar o conteúdo: ${response.statusText}`);
    }
```
🔹 Verifica se a resposta foi bem-sucedida (`response.ok` é `true` para status 200 a 299).  
Se não for, lança um erro com uma mensagem personalizada.

---

```js
    return response.text();
```
🔹 Converte o conteúdo da resposta para texto (HTML puro).  
Isso será usado para inserir no DOM.

---

```js
})
.then(html => {
```
🔹 Recebe o HTML convertido da resposta anterior.

---

```js
    contentArea.innerHTML = html;
```
🔹 Insere o conteúdo HTML dentro da `div` com ID `content-area`.  
Isso atualiza visualmente a página com o novo conteúdo.

---

```js
window.scrollTo({ top: 10, behavior: 'smooth' });
```

🔧 Isso faz a página rolar suavemente até 10px do topo.

---

```js
})
.catch(error => {
```
🔹 Se qualquer erro ocorrer (na requisição ou no processamento), este bloco será executado.

---

```js
    console.error(error);
```
🔹 Exibe o erro no console do navegador para facilitar o debug.

---

```js
    contentArea.innerHTML = '<p style="color: red; text-align: center; font-size: 20px;">Erro ao carregar o conteúdo.</p>';
```
🔹 Mostra uma mensagem de erro visível na tela, estilizada em vermelho e centralizada.

---

```js
})
}
```
🔹 Fecha o bloco `.catch()` e encerra a função.

---
