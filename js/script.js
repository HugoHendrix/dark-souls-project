// Lógica para carregar o tema
const salvarTema = localStorage.getItem('tema');
if (salvarTema === 'light') {
  document.body.setAttribute('data-theme', 'light');

}

const btnTrocarTema = document.getElementById('btn-trocar-tema');
btnTrocarTema.addEventListener('click', function () {

  if (document.body.hasAttribute('data-theme')) {

    // Se o <body> tem o atributo, remova-o
    document.body.removeAttribute('data-theme');
    localStorage.setItem('tema', 'dark');
  } else {

    // Se o <body> não tem o atributo, adicione-o
    document.body.setAttribute('data-theme', 'light');
    localStorage.setItem('tema', 'light')
  }


});

