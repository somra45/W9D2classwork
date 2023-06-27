class View {
  constructor(game, el) {
    this.game = game;
    this.el = el;
    this.handleClick = this.handleClick.bind(this)
  }
  
  setupBoard(tic) {
    const grid = document.createElement("ul");
    tic.appendChild(grid);

    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        let block = document.createElement("li");
        grid.appendChild(block);
        block.setAttribute('data-position', [i, j]);
      }
    }

    tic.addEventListener("click", this.handleClick)
  };
  
  handleClick(e) { 
      let pos  = Array.from(e.target.dataset.position).slice(0,1)
      pos = pos.concat((e.target.dataset.position).slice(2))
      this.game.playMove(pos);
      let playerMark = document.createElement("div");
      playerMark.innerText = this.game.currentPlayer;
      playerMark.classList.add("mark-div")
      e.target.appendChild(playerMark);
      e.target.classList.toggle('clicked')
  }

  makeMove(square) {

  }
  
  handleGameOver() {
  }
}

export default View;