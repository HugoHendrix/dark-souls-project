// ABAS DE CONTEÚDO
// Todo o texto já está no HTML (indexável e sem requisições extras).
// O JS só mostra um painel por vez; sem JS, todos ficam visíveis.
const tablist = document.getElementById('nav-anchor');
const tabs = Array.from(tablist.querySelectorAll('[role="tab"]'));
const panels = tabs.map(tab => document.getElementById(tab.getAttribute('aria-controls')));

function ativarAba(indice, { foco = false, atualizarHash = true } = {}) {
  tabs.forEach((tab, i) => {
    const ativa = i === indice;
    tab.setAttribute('aria-selected', ativa);
    tab.tabIndex = ativa ? 0 : -1;
    panels[i].hidden = !ativa;
  });
  if (foco) tabs[indice].focus();
  if (atualizarHash) history.replaceState(null, '', '#' + panels[indice].id);
}

function indiceDoHash() {
  const id = decodeURIComponent(location.hash.slice(1));
  return panels.findIndex(painel => painel.id === id);
}

tabs.forEach((tab, i) => {
  tab.addEventListener('click', () => ativarAba(i));
  tab.addEventListener('keydown', e => {
    const ultimo = tabs.length - 1;
    const teclas = {
      ArrowRight: i === ultimo ? 0 : i + 1,
      ArrowDown: i === ultimo ? 0 : i + 1,
      ArrowLeft: i === 0 ? ultimo : i - 1,
      ArrowUp: i === 0 ? ultimo : i - 1,
      Home: 0,
      End: ultimo
    };
    if (e.key in teclas) {
      e.preventDefault();
      ativarAba(teclas[e.key], { foco: true });
    }
  });
});

window.addEventListener('hashchange', () => {
  const i = indiceDoHash();
  if (i >= 0) {
    ativarAba(i, { atualizarHash: false });
    tablist.scrollIntoView({ behavior: 'smooth' });
  }
});

tablist.hidden = false;
const inicial = indiceDoHash();
ativarAba(inicial >= 0 ? inicial : 0, { atualizarHash: false });
if (inicial >= 0) tablist.scrollIntoView();

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



// GALERIA
const modal = document.getElementById("modal");
const modalImg = document.getElementById("img-modal");
const fechar = document.querySelector(".fechar");
const imagens = document.querySelectorAll(".galeria-img");
const setaEsquerda = document.querySelector(".seta-esquerda");
const setaDireita = document.querySelector(".seta-direita");

let indiceAtual = 0;

function abrirModal(indice) {
  modal.style.display = "block";
  modalImg.src = imagens[indice].src;
  modalImg.alt = imagens[indice].alt;
  indiceAtual = indice;
}

imagens.forEach((img, i) => {
  img.addEventListener("click", () => abrirModal(i));
});

fechar.addEventListener("click", () => {
  modal.style.display = "none";
});

window.addEventListener("click", e => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});

setaDireita.addEventListener("click", () => {
  indiceAtual = (indiceAtual + 1) % imagens.length;
  abrirModal(indiceAtual);
});

setaEsquerda.addEventListener("click", () => {
  indiceAtual = (indiceAtual - 1 + imagens.length) % imagens.length;
  abrirModal(indiceAtual);
});


// TESTE DE FORMULÁRIO

// fetch("https://formspree.io/f/xzzvykrp", {
//   method:"POST",
//   headers: {"content-Type": "application;json"},
//   body: JSON.stringify({
//     nome:"Hugo",
//     email:"hugohendrixc@gmail.com",
//     mensagem: "OLÁ"
//   })
// });


