let lista = ["Um", "Dois", "Três"];

export function getLista() {
  return lista;
}

export function adicionaNaLista(item) {
  lista.push(item);
}

export function removeDaLista(posicao) {
  lista.splice(posicao, 1);
}

export function limpaLista() {
  lista.length = 0; // limpa o array mantendo a referência
}

