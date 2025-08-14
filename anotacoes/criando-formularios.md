
## 🧱 1. Criando o Formulário HTML

```html
<form id="form-contato" action="#" method="POST">
  <label for="nome">Nome:</label>
  <input type="text" id="nome" name="nome" required>

  <label for="email">Email:</label>
  <input type="email" id="email" name="email" required>

  <label for="mensagem">Mensagem:</label>
  <textarea id="mensagem" name="mensagem" rows="5" required></textarea>

  <button type="submit">Enviar</button>
</form>
```

---

## 🚫 GitHub Pages: Limitações

- GitHub Pages **não executa código de servidor**.
- Isso significa que formulários com `action="processa.php"` ou `action="/api"` **não funcionarão** diretamente.

---

## ✅ Alternativas para praticar envio de dados

### 🔁 1. Simular envio com JavaScript

Você pode interceptar o envio e exibir uma mensagem de sucesso:

```javascript
document.getElementById("form-contato").addEventListener("submit", function (e) {
  e.preventDefault(); // Impede o envio real
  alert("Mensagem enviada com sucesso (simulação)!");
});
```

### ☁️ 2. Usar serviços externos gratuitos

Esses serviços recebem os dados do formulário e enviam por email ou armazenam:

| Serviço         | Descrição                              | Link                          |
|-----------------|------------------------------------------|-------------------------------|
| Formspree       | Envia dados por email                   | [formspree.io](https://formspree.io) |
| Getform         | Armazena e envia dados                  | [getform.io](https://getform.io)     |
| Google Forms    | Integração com planilhas                | [forms.google.com](https://forms.google.com) |
| Netlify Forms   | Funciona com sites hospedados no Netlify| [netlify.com](https://www.netlify.com) |

Exemplo com Formspree:

```html
<form action="https://formspree.io/f/SEU_ID" method="POST">
  <input type="text" name="nome" required>
  <input type="email" name="email" required>
  <textarea name="mensagem" required></textarea>
  <button type="submit">Enviar</button>
</form>
```

---

## 🧠 Boas práticas para formulários

- Use `label` com `for` para acessibilidade.
- Valide campos com `required`, `type="email"`, etc.
- Dê feedback visual ao usuário (mensagem de sucesso ou erro).
- Use `placeholder` com moderação — não substitui o `label`.

---

## 🧪 Dica para estudo avançado

Você pode usar o `fetch()` para enviar dados via JavaScript para APIs externas ou simular envio local:

```javascript
fetch("https://formspree.io/f/SEU_ID", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({
    nome: "Hugo",
    email: "hugo@email.com",
    mensagem: "Olá!"
  })
});
```

---

Meu formspree
```HTML
<form
  action="https://formspree.io/f/xzzvykrp"
  method="POST"
>
  <label>
    Your email:
    <input type="email" name="email">
  </label>
  <label>
    Your message:
    <textarea name="message"></textarea>
  </label>
  <!-- your other form fields go here -->
  <button type="submit">Send</button>
</form>
```