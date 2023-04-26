const ws = new WebSocket("wss://site60.webte.fei.stuba.sk:9000/webte2-zadanie3/php/game.php");
        
// when the connection is established
ws.onopen = function(event) {
    console.log("Connected to WebSocket server.");
};

// when the server sends a message
ws.onmessage = function(event) {
    const msg = JSON.parse(event.data);
    if (msg.type == 'game_status') {
        if (msg.data.state == 'Pending') {
            $('#game').addClass('d-none');
            $('#lobby').removeClass('d-none');
            $('#lobby-name-screen').removeClass('d-none');
            $('#lobby-wait-screen').addClass('d-none');
            $('#btn-start-game').addClass('d-none');
            grid = msg.data.grid_size;
            isRunning = false;
        }
        else if (msg.data.state == 'Running') {
            $('#game').removeClass('d-none');
            $('#lobby').addClass('d-none');
            isRunning = true;
            requestAnimationFrame(loop);
        }
    }
    else if (msg.type == 'lobby_wait') {
        $('#lobby-name-screen').addClass('d-none');
        $('#lobby-wait-screen').removeClass('d-none');
        $('#lobby-player-name').text(msg.data.name);
        $('#lobby-connection-count').text(msg.data.connection_count);
    }
    else if (msg.type == 'connection_count') {
        $('#lobby-connection-count').text(msg.data);
    }
    else if (msg.type == 'can_start_game') {
        $('#btn-start-game').removeClass('d-none');

    }
    else if (msg.type == 'game_update') {
        gameData = msg.data;
    }
    // console.log("Received message:", event.data);
};

// when the connection is closed
ws.onclose = function(event) {
    console.log("Disconnected from WebSocket server.");
};

// when there is an error with the connection
ws.onerror = function(event) {
    console.error("WebSocket error:", event);
};

function sendMessageToWS(obj) {
    ws.send(JSON.stringify(obj));
}

$('#btn-enter-lobby').on('click', () => {
    const playerName = $('#input-player-name').val().trim();
    if (playerName == '') {
        alert('Name is required');
        return;
    }
    sendMessageToWS({type: 'enter_lobby', name: playerName});
});

$('#btn-start-game').on('click', () => {
    sendMessageToWS({type: 'start_game'});
})

$('#btn-leave-game').on('click', () => {
    sendMessageToWS({type: 'leave_game'});
})

$(document).on('keydown', (function(e) {
    if (e.which == 38 || e.which == 39) // up or right arrow key pressed
        sendMessageToWS({type: 'paddle_control', direction: 'up'});  
    else if (e.which == 37 || e.which == 40) // down or left arrow key pressed
        sendMessageToWS({type: 'paddle_control', direction: 'down'});
}));