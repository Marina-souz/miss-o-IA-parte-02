const nomes = ["Helena", "Ravi", "Miguel", "Maitê", "Cecília", "Heitor", "Arthur"];

export function aleatorio(lista) {
    const posicao = Math.floor(Math.random() * lista.length);
    return lista[posicao];
}

export const nome = aleatorio(nomes);