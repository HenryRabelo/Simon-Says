var context;
var tamanhoMatriz = 3;
var matriz = new Array(tamanhoMatriz);

function fillColors() {
    var x = 0;
    var y = 0;

    for (x = 0; x < tamanhoMatriz; x++)
        for (y = 0; y < tamanhoMatriz; y++) {

            switch (matriz[x][y]) {
                case('background'):
                    context.fillStyle = "#DEDDDA";
                    break;
                case('green'):
                    context.fillStyle = "#28A745";
                    break;
                case('blue'):
                    context.fillStyle = "#007BFF";
                    break;
                case('yellow'):
                    context.fillStyle = "#FFC107";
                    break;
                case('red'):
                    context.fillStyle = "#DC3545";
                    break;
            }

            context.fillRect(y * 100 + 2, x * 100 + 2, 97, 97);

        }
}

function startGame() {
    // Generates an empty Matrix on memory
    var canvas = document.getElementById("canvas");

    var x = 0;
    var y = 0;

    for (x = 0; x < tamanhoMatriz; x++)
        matriz[x] = new Array(tamanhoMatriz);

    // Matrix init
    for (x = 0; x < tamanhoMatriz; x++)
        for (y = 0; y < tamanhoMatriz; y++)
            matriz[x][y] = 'background';
    
    context = canvas.getContext("2d");

    context.fillStyle = "#DEDDDA";

    // Background init
    context.fillRect(0, 0, 300, 300);
    context.fillStyle = "#000000";

    // Draw horizontal lines
    context.fillRect(1, 100, 300, 2);
    context.fillRect(1, 200, 300, 2);
    context.fillRect(1, 300, 300, 2);

    // Draws vertical lines
    context.fillRect(100, 1, 2, 300);
    context.fillRect(200, 1, 2, 300);
    context.fillRect(300, 1, 2, 300);

    // Horizontal borders
    context.fillRect(1, 1, 300, 1);
    context.fillRect(1, 299, 300, 1);

    // Vertical borders
    context.fillRect(1, 1, 1, 300);
    context.fillRect(299, 1, 1, 300);

    startOrder();
}