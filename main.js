import player from "./player.js";
const game = document.getElementById("game");
const ctx = game.getContext("2d");

function init() {
    player.x = (boardInfo.width - player.size) / 2;
    player.y = (boardInfo.height - player.size) / 2;
    game.width = boardInfo.width;
    game.height = boardInfo.height;
    boardInfo.frame();
}

const boardInfo = {
    width: 800,
    height: 600,
    color: "black",
    frame: function () {
        //clear scene
        ctx.clearRect(0, 0, boardInfo.width, boardInfo.height);
        //update player position
        player.update();
        //draw frame
        ctx.fillStyle = boardInfo.color;
        ctx.fillRect(0, 0, boardInfo.width, boardInfo.height);
        ctx.fillStyle = player.color;
        ctx.fillRect(player.x, player.y, player.size, player.size);
        requestAnimationFrame(boardInfo.frame);
    },
}

init();