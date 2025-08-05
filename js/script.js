function loadContent(pageName) {
    const contentArea = document.getElementById('content-area');
    const filePath = `conteudos/${pageName}.html`;
    
    fetch(filePath)
.then(response => {
    if (!response.ok) {
        throw new Error(`Erro ao carregar o conteúdo: ${response.statusText}`);
    }
    return response.text();
})
.then(html => {
    contentArea.innerHTML = html;
    document.getElementById('nav-anchor').scrollIntoView({ behavior: 'smooth' });

})
.catch(error => {
    console.error(error);
    contentArea.innerHTML = '<p style="color: red; text-align: center; font-size: 20px;">Erro ao carregar o conteúdo.</p>';

})
}

// BOTAO DE VOLTAR AO TOPO

// Obtenha o botão
const backToTopButton = document.getElementById("back-to-top");

// Mostrar ou esconder o botão com base na rolagem
window.onscroll = function () {
    if (window.scrollY > 300) { // Mostra após 300px de rolagem
        backToTopButton.style.display = "block";
    } else {
        backToTopButton.style.display = "none";
    }
};

// Rolar para o topo quando o botão for clicado
backToTopButton.onclick = function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth" // Suaviza o movimento
    });
};