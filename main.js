import { getLista, adicionaNaLista, removeDaLista, limpaLista } from "./lista.js";

function atualizaLista() {
  const listaUl = document.querySelector("#itens");
  listaUl.innerHTML = "";
  const lista = getLista();
  lista.forEach((item, index) => {
    const li = document.createElement("li");
    li.textContent = item;
    li.addEventListener("click", () => {
      removeDaLista(index);
      atualizaLista();
    });
    listaUl.appendChild(li);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  const entrada = document.querySelector("#entrada");
  const botaoAdicionar = document.querySelector("#adicionar");
  const botaoLimpar = document.querySelector("#limpar");

  botaoAdicionar.addEventListener("click", () => {
    const texto = entrada.textContent.trim();
    if (texto !== "") {
      adicionaNaLista(texto);
      entrada.textContent = "";
      atualizaLista();
    }
  });

  botaoLimpar.addEventListener("click", () => {
    limpaLista();
    atualizaLista();
  });

  atualizaLista();
});
