import player from "./player.js";

const game = document.getElementById("game");
const ctx = game.getContext("2d");

function init() {
  player.x = (boardInfo.width - player.size) / 2;
  player.y = (boardInfo.height - player.size) / 2;
  game.width = boardInfo.width;
  game.height = boardInfo.height;
  setInterval(requestAnimationFrame, 1000 / 60, boardInfo.frame);
}

const boardInfo = {
  width: 800,
  height: 600,
  color: "black",
  frame: function () {
    //clear scene
    ctx.clearRect(0, 0, boardInfo.width, boardInfo.height);

    //update player position ! stopped cuz skill issue
    // player.update();

    //draw frame
    ctx.fillStyle = boardInfo.color;
    ctx.fillRect(0, 0, boardInfo.width, boardInfo.height);
    for(let i = 0; i < player.proj.length; i++){
        console.log(player.proj);
        player.proj[i].update();
        player.proj[i].draw();
    }
    player.draw();
  },
};

init();

export { ctx, game };
