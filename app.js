function searchPlayer() {

  const player =
    document.getElementById("search").value;

  document.getElementById("result").innerHTML = `
    <div class="card">
      <h3>${player}</h3>

      <button>
        Preso da me
      </button>

      <button>
        Preso da avversario
      </button>
    </div>
  `;
}
