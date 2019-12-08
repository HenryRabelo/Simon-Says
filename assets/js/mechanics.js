var order = 1;
var color = 1;

var green = 0;
var blue = 0;
var yellow = 0;
var red = 0;

function choose(color) {
    switch (color) {
        case('green'):
            green++;
            break;
        case('blue'):
            blue++;
            break;
        case('yellow'):
            yellow++;
            break;
        case('red'):
            red++;
            break;
    }
    verifyOrder();
}

function setColor(x, y, paint) {
    matriz[x][y] = paint;
    fillColors();
}

function clear() {
    var x = 0;
    var y = 0;
    
    for (x = 0; x < tamanhoMatriz; x++)
        for (y = 0; y < tamanhoMatriz; y++)
            matriz[x][y] = 'background';
    
    fillColors();
}

function resetValues() {
    green = 0;
    blue = 0;
    yellow = 0;
    red = 0;
    
    order = 1;
    color = 1;
    
    clear();
}

function reload() {
    resetValues();
    startOrder();
}

function AddScript(path) {
    var node = document.getElementsByTagName("head")[0] || document.body;
    if(node){
        var script = document.createElement("script");
        script.type="text/javascript";
        script.src=path;
        node.appendChild(script);
    } else {
        document.write("<script src='"+path+"' type='text/javascript'></script>");
    }
}