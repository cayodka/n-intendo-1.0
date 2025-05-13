document.addEventListener("DOMContentLoaded", () => {
  const btmenu = document.getElementById('btmenu');
  const menu = document.getElementById('menu');

  const h1inicial = document.getElementById("h1inicial");
  const h1jogos = document.getElementById("h1jogos");
  const h1console = document.getElementById("h1console");
  const h1casacos = document.getElementById("h1casacos");

  const jogosDiv = document.getElementById("jogos");
  const consolesDiv = document.getElementById("consoles");
  const casacosDiv = document.getElementById("casacos");

  const btjogos = document.getElementById("btjogos");
  const btconsole = document.getElementById("btconsole");
  const btcasacos = document.getElementById("btcasacos");
  const home = document.getElementById("home");

  function esconderTudo() {
    h1inicial.style.visibility = "hidden";
    h1jogos.style.visibility = "hidden";
    h1console.style.visibility = "hidden";
    h1casacos.style.visibility = "hidden";
    jogosDiv.style.visibility = "hidden";
    consolesDiv.style.visibility = "hidden";
    casacosDiv.style.visibility = "hidden";
  }

  btmenu.addEventListener('click', (e) => {
    e.stopPropagation();
    menu.style.display = (menu.style.display === 'flex') ? 'none' : 'flex';
  });

  document.addEventListener('click', () => {
    menu.style.display = 'none';
  });

  menu.addEventListener('click', (e) => {
    e.stopPropagation();
  });

  btjogos.addEventListener("click", () => {
    esconderTudo();
    h1jogos.style.visibility = "visible";
    jogosDiv.style.visibility = "visible";
    menu.style.display = 'none';
  });

  btconsole.addEventListener("click", () => {
    esconderTudo();
    h1console.style.visibility = "visible";
    consolesDiv.style.visibility = "visible";
    menu.style.display = 'none';
  });

  btcasacos.addEventListener("click", () => {
    esconderTudo();
    h1casacos.style.visibility = "visible";
    casacosDiv.style.visibility = "visible";
    menu.style.display = 'none';
  });

  home.addEventListener("click", () => {
    esconderTudo();
    h1inicial.style.visibility = "visible";
    menu.style.display = 'none';
  });
});
