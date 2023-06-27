class View {
  constructor(game, el) {
    this.game = game;
    this.el = el;
  }
  
  setupBoard(tic) {
    const grid = document.createElement("ul");
    tic.appendChild(grid);

    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        let block = document.createElement("li");
        grid.appendChild(block);
        block.setAttribute('data-position',[i, j]);
      }
    }
  };
  
  handleClick(e) { 
    document.addEventListener("click", (e) => {
      this.game.playMove(e.target.data-position);
    })
  }

  makeMove(square) {
  }
  
  handleGameOver() {
  }
}

export default View;