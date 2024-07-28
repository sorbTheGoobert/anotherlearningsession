
const player = {
    size: 25,
    color: "white",
    x: 0,
    y: 0,
    accelaration: 2,
    speed: 0,
    angle: 0,
    turnSpeed: 10,
    move: function(event) {
        console.log(event);
        switch(event.code){
            case "KeyW":
                player.speed -= player.accelaration * 0.2;
                break;
            case "KeyS":
                player.speed += player.accelaration * 0.2;
                break;
            case "KeyA":
                player.angle -= player.turnSpeed;
                console.log(player.angle);
                break;
            case "KeyD":
                player.angle += player.turnSpeed;
                console.log(player.angle);
                break;
        }
    },
    update: function() {
        player.y = (player.accelaration * 0.2 * 0.2) + player.speed * 0.2 + player.y;
    }
}

window.addEventListener("keypress", player.move);

export default player;