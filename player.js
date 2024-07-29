
import { ctx, game } from "./main.js";

const player = {
    size: 25,
    color: "white",
    x: 0,
    y: 0,
    accelaration: 2,
    Xvelocity: 0,
    Yvelocity: 0,
    angle: 0,
    turnvelocity: 0.02,
    keys: {
        w: false,
        a: false,
        d: false,
        space: false,
    },
    move: function () {
        if (player.keys.w) {
            player.Xvelocity = Math.cos(player.angle - Math.PI * .5) * 1;
            player.Yvelocity = Math.sin(player.angle - Math.PI * .5) * 1;
            player.x += player.Xvelocity;
            player.y += player.Yvelocity;
            // console.log("movement");
        } else if (!player.keys.w) {
            player.Xvelocity *= .99;
            player.Yvelocity *= .99;
            player.x += player.Xvelocity;
            player.y += player.Yvelocity;
        }
        if (player.keys.a) {
            player.angle -= player.turnvelocity;
        }
        if (player.keys.d) {
            player.angle += player.turnvelocity;
        }
        if (player.angle > 2 * Math.PI) {
            player.angle -= 2 * Math.PI;
        } else if (player.angle < 0) {
            player.angle += 2 * Math.PI;
        }
        // console.log(player.angle);
    },
    // update: function () {
    //     // player.y = (player.accelaration * 0.2 * 0.2) + player.Yvelocity * 0.2 + player.y;
    //     // player.x = (player.accelaration * 0.2 * 0.2) + player.Xvelocity * 0.2 + player.x;
    //     // old friction movement that had to be scrapped cus of skill issue.
    //     player.x += player.Xvelocity;
    //     player.y += player.Yvelocity;
    // },
    draw: function () {
        player.move();

        ctx.save();
        ctx.lineWidth = 1;
        ctx.translate(player.x + player.size / 2, player.y - player.size / 2);
        ctx.rotate(player.angle);
        ctx.translate(-(player.x + player.size / 2), -(player.y - player.size / 2));


        ctx.fillStyle = player.color;
        ctx.fill();

        ctx.beginPath();
        ctx.moveTo(player.x, player.y);
        ctx.lineTo(player.x + player.size, player.y);
        ctx.lineTo(player.x + player.size / 2, player.y - player.size);
        ctx.lineTo(player.x, player.y);
        ctx.closePath();

        // ctx.strokeStyle = player.color;
        // ctx.stroke();

        ctx.restore();
    },
}

function Projectiles(size, Xvelocity, Yvelocity, angle) {
    this.size = size;
    this.Xvelocity = Xvelocity;
    this.Xvelocity = Yvelocity;
    this.angle = angle;
    this.color = "yellow";
    this.draw = function () {
        ctx.beginPath();
        ctx.arc(player.x, player.y, this.size, Math.PI * 2, false);
        ctx.closePath();
        ctx.fillStyle = this.color;
        ctx.fill();
    }
}
let projectiles = [];
window.addEventListener("keydown", function (event) {
    // console.log(event);
    switch (event.code) {
        case "KeyW":
            player.keys.w = true;
            break;
        case "Space":
            let proj = new Projectiles(5, player.Xvelocity, player.Yvelocity, player.angle);
            break;
        case "KeyA":
            player.keys.a = true;
            break;
        case "KeyD":
            player.keys.d = true;
            break;
    }
    // player.move();
});
window.addEventListener("keyup", function (event) {
    // console.log(event);
    switch (event.code) {
        case "KeyW":
            player.keys.w = false;
            break;
        case "Space":
            break;
        case "KeyA":
            player.keys.a = false;
            break;
        case "KeyD":
            player.keys.d = false;
            break;
    }
    // player.move();
});

export default player;