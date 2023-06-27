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
      if (this.game.isOver()) {
        this.handleGameOver();
      }
  }

  makeMove(square) {

  }
  
  handleGameOver() {
    const tic = document.querySelector(".ttt ul")

    if (this.game.winner()); {
      const message = document.createElement("h3");
      message.innerText = `You win, ${this.game.currentPlayer}!`
      document.body.appendChild(message);
    }
    for (let i = 0; i < tic.children.length; i++) {
      if (tic.children[i].innerText === this.game.currentPlayer) {
        tic.children[i].classList.toggle('winner-background')
      } else {
        tic.children[i].classList.toggle('loser-background')
      }
    }
  }
};

export default View;

        // if (tic.children[i].innerText === this.game.currentPlayer) {
        //   tic.children[i].classList.toggle('loser-background')
        // } 
        // else if (!tic.children[i].innerText) {
        //   tic.children[i].classList.toggle('checked')
        // }