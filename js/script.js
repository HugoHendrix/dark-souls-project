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

// BOTÃO DE VOLTAR AO TOPO
const backToTopButton = document.getElementById("back-to-top");

window.addEventListener("scroll", () => {
  backToTopButton.style.display = window.scrollY > 300 ? "block" : "none";
});

backToTopButton.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// GALERIA
const modal = document.getElementById("modal");
const modalImg = document.getElementById("img-modal");
const fechar = modal.querySelector(".fechar");
const setaEsquerda = modal.querySelector(".seta-esquerda");
const setaDireita = modal.querySelector(".seta-direita");
const imagens = Array.from(document.querySelectorAll(".galeria-img"));

let indiceAtual = 0;
let ultimoFocado = null;

function mostrarImagem(indice) {
  indiceAtual = (indice + imagens.length) % imagens.length;
  modalImg.src = imagens[indiceAtual].currentSrc || imagens[indiceAtual].src;
  modalImg.alt = imagens[indiceAtual].alt;
}

function abrirModal(indice) {
  ultimoFocado = document.activeElement;
  mostrarImagem(indice);
  modal.style.display = "block";
  document.body.style.overflow = "hidden";
  fechar.focus();
}

function fecharModal() {
  modal.style.display = "none";
  document.body.style.overflow = "";
  if (ultimoFocado) ultimoFocado.focus();
}

imagens.forEach((img, i) => {
  img.tabIndex = 0;
  img.setAttribute("role", "button");
  img.setAttribute("aria-label", "Ampliar imagem: " + img.alt);
  img.addEventListener("click", () => abrirModal(i));
  img.addEventListener("keydown", e => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      abrirModal(i);
    }
  });
});

fechar.addEventListener("click", fecharModal);
setaDireita.addEventListener("click", () => mostrarImagem(indiceAtual + 1));
setaEsquerda.addEventListener("click", () => mostrarImagem(indiceAtual - 1));

modal.addEventListener("click", e => {
  if (e.target === modal) fecharModal();
});

document.addEventListener("keydown", e => {
  if (modal.style.display !== "block") return;

  if (e.key === "Escape") fecharModal();
  if (e.key === "ArrowRight") mostrarImagem(indiceAtual + 1);
  if (e.key === "ArrowLeft") mostrarImagem(indiceAtual - 1);

  // mantém o foco dentro do modal
  if (e.key === "Tab") {
    const focaveis = [fechar, setaEsquerda, setaDireita];
    const primeiro = focaveis[0];
    const ultimo = focaveis[focaveis.length - 1];
    if (e.shiftKey && document.activeElement === primeiro) {
      e.preventDefault();
      ultimo.focus();
    } else if (!e.shiftKey && document.activeElement === ultimo) {
      e.preventDefault();
      primeiro.focus();
    }
  }
});
