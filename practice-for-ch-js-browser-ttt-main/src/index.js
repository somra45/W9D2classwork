// Add your import statements for View and Game here
import Game from '../ttt_node/game.js'
import View from './ttt-view.js'
document.addEventListener("DOMContentLoaded", (e) => {


  const tic = document.querySelector(".ttt")

  let game1 = new Game()
  let view1 = new View(game1, tic)

  view1.setupBoard(tic)
  
});