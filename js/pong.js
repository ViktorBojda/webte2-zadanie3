const canvas = document.getElementById('game');
const context = canvas.getContext('2d');
let isRunning = false;
let gameData = null;
let grid = 15;

function loop() {
    if (gameData != null) {
        context.fillStyle = "black";
        context.fillRect(0, 0, canvas.width, canvas.height);

        // draw paddles
        let aliveSides = [];
        context.fillStyle = 'white';
        context.font = "30px Arial";
        $.each(gameData.players, (playerSide, playerData) => {
            aliveSides.push(playerSide);
            context.fillRect(playerData.x, playerData.y, playerData.width, playerData.height);
            if (playerSide == 'Left') {
                context.fillText(playerData.name, grid * 7, canvas.height / 2 - 15);
                context.fillText(playerData.lives + '❤', grid * 6, canvas.height / 2 + 15);
            }
            else if (playerSide == 'Right') {
                context.fillText(playerData.name, canvas.width - grid * 7, canvas.height / 2 - 15);
                context.fillText(playerData.lives + ' ❤', canvas.width - grid * 7, canvas.height / 2 + 15);
            }
            else if (playerSide == 'Top') {
                context.fillText(playerData.name, canvas.width / 2, grid * 6);
                context.fillText(playerData.lives + ' ❤', canvas.width / 2, grid * 6 + 30);
            }
            else if (playerSide == 'Bottom') {
                context.fillText(playerData.name, canvas.width / 2, canvas.height - grid * 6 - 30);
                context.fillText(playerData.lives + ' ❤', canvas.width / 2, canvas.height - grid * 6);
            }
        });

        context.fillRect(gameData.ball.x, gameData.ball.y, gameData.ball.width, gameData.ball.height);
        context.textAlign = "center";
        context.fillText(gameData.ball.hit_count, canvas.width / 2, canvas.height / 2);

        context.fillStyle = 'lightgrey';
        if (!aliveSides.includes('Left')) {
            context.fillRect(0, 0, grid, canvas.height); // left
        }
        if (!aliveSides.includes('Right')) {
            context.fillRect(canvas.width - grid, 0, grid, canvas.height); // right
        }
        if (!aliveSides.includes('Top')) {
            context.fillRect(0, 0, canvas.width, grid); // top
        }
        if (!aliveSides.includes('Bottom')) {
            context.fillRect(0, canvas.height - grid, canvas.width, canvas.height); // bottom
        }

        context.fillRect(0, 0, grid, grid * 2); // top-left-down
        context.fillRect(0, canvas.height - grid * 2, grid, grid * 2); // bottom-left-up
        context.fillRect(canvas.width - grid, 0, grid, grid * 2); // top-right-down
        context.fillRect(canvas.width - grid, canvas.height - grid * 2, grid, grid * 2) // bottom-right-up
        context.fillRect(0, 0, grid * 2, grid); // top-left-right
        context.fillRect(canvas.width - grid * 2, 0, grid * 2, grid); // top-right-left
        context.fillRect(0, canvas.height - grid, grid * 2, grid); // bottom-left-right
        context.fillRect(canvas.width - grid * 2, canvas.height - grid, grid * 2, grid) // bottom-right-left
    }
    if (isRunning)
        requestAnimationFrame(loop);
}
