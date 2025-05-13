export function loadJogos() {
  fetch("/jogos")
    .then(res => res.json())
    .then(jogos => {
      const cards = document.querySelectorAll('#jogos .card');
      jogos.forEach((jogo, index) => {
        const card = cards[index];
        if (card) {
          card.querySelector(".fotoCard").src = jogo.imagem;
          card.querySelector(".nomeCard").textContent = jogo.titulo;
          card.querySelector(".valorCard").textContent = jogo.preco;
          card.querySelector(".btnInfo").onclick = () => alert(jogo.descricao);
        }
      });
    });
}

export function loadConsoles() {
  fetch("/console")
    .then(res => res.json())
    .then(consoles => {
      const cards = document.querySelectorAll('#consoles .cardConsole');
      consoles.forEach((consoleData, index) => {
        const card = cards[index];
        if (card) {
          card.querySelector(".fotoConsole").src = consoleData.imagem;
          card.querySelector(".nomeConsole").textContent = consoleData.titulo;
          card.querySelector(".valorConsole").textContent = consoleData.preco;
          card.querySelector(".btnInfo").onclick = () => alert(consoleData.descricao);
        }
      });
    });
}
