let credits = 300;
let players = 0;

const samplePlayers = {
  "lautaro": {
    nome: "Lautaro Martinez",
    ruolo: "Pc",
    costo: 104
  },
  "dimarco": {
    nome: "Federico Dimarco",
    ruolo: "E",
    costo: 30
  },
  "mctominay": {
    nome: "Scott McTominay",
    ruolo: "C;T",
    costo: 31
  },
  "nico paz": {
    nome: "Nico Paz",
    ruolo: "T;A",
    costo: 26
  }
};

function searchPlayer() {

  const search =
    document
      .getElementById("search")
      .value
      .toLowerCase()
      .trim();

  const player =
    samplePlayers[search];

  if (!player) {

    document.getElementById("result").innerHTML = `
      <div class="card">
        Giocatore non trovato
      </div>
    `;

    return;
  }

  document.getElementById("result").innerHTML = `
    <div class="card">

      <h2>${player.nome}</h2>

      <p><strong>Ruolo:</strong> ${player.ruolo}</p>

      <p><strong>Costo:</strong> ${player.costo}</p>

      <button onclick="buyPlayer(${player.costo})">
        Preso da me
      </button>

      <button>
        Preso da avversario
      </button>

    </div>
  `;
}

function buyPlayer(cost) {

  credits -= cost;
  players++;

  document.getElementById("credits").innerText =
    credits;

  document.getElementById("players").innerText =
    players;
}
