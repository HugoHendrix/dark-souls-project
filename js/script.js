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
    window.scrollTo({ bottom: 10, behavior: 'smooth' });

})
.catch(error => {
    console.error(error);
    contentArea.innerHTML = '<p style="color: red; text-align: center; font-size: 20px;">Erro ao carregar o conteúdo.</p>';

})
}