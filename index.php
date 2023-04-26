<?php 
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);
?>

<!DOCTYPE html>
<html lang="sk">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Pong</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous">
    <link rel="stylesheet" href="./css/style.css">
</head>

<body>
    <div class="container-xl">
        <header>
            <h1 class="page-content text-center py-3 my-2">Bojda Pong</h1>
        </header>

        <div class="page-content bg-black d-flex align-items-center justify-content-center">
            <canvas width="600" height="600" id="game" class="d-none"></canvas>

            <div id="lobby" class="bg-black d-flex flex-column justify-content-center align-items-center" style="width:600px; height:600px">
                <div id="lobby-name-screen" class="row w-100">
                    <div class="col-8 mb-3 mx-auto">
                        <label for="input-player-name" class="form-label fs-2 text-white">Enter name</label>
                        <input type="text" id="input-player-name" class="form-control" required>
                    </div>
                    <div class="d-grid col-6 mx-auto mt-3">
                        <button type="button" id="btn-enter-lobby" class="btn btn-light">Enter lobby</button>
                    </div>
                </div>
                <div id="lobby-wait-screen" class="row w-100 d-none">
                    <div class="col-8 mb-3 mx-auto text-center">
                        <p class="fs-2 text-white">Welcome, <span id="lobby-player-name">Player</span></p>
                        <p class="fs-3 text-white">Player Count: <span id="lobby-connection-count">1</span></p>
                    </div>
                    <div class="d-grid gap-2 col-6 mx-auto mt-3">
                        <button type="button" id="btn-start-game" class="btn btn-light d-none">Start Game</button>
                        <button type="button" id="btn-leave-game" class="btn btn-light">Leave</button>
                    </div>
                </div>
            </div>
        </div>
        
    </div>
    <script src="https://code.jquery.com/jquery-3.6.3.min.js" integrity="sha256-pvPw+upLPUjgMXY0G+8O0xUf+/Im1MZjXxxgOcBQBXU=" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js" integrity="sha384-w76AqPfDkMBDXo30jS1Sgez6pr3x5MlQ1ZAGC+nuZB+EYdgRZgiwxhTBTkF7CXvN" crossorigin="anonymous"></script>
    <script src="./js/pong.js"></script>
    <script src="./js/websocket.js"></script>
</body>
</html>