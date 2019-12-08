function startOrder() {
    var timePaint = 500;
    var timeClear = 750;
    var i;

    for (i = 0; i < 4; i++) {
        setTimeout(colorOrder, timePaint);
        setTimeout(clear, timeClear);

        timePaint = timePaint + 750;
        timeClear = timeClear + 750;
    }
}

function colorOrder() {
    var x = 1;
    var y = 1;

    switch (color) {
        case(1):
            setColor(x - 1, y - 1, 'green');
            setColor(x + 1, y + 1, 'green');
            break;
        case(2):
            setColor(x - 1, y + 1, 'blue');
            setColor(x + 1, y - 1, 'blue');
            break;
        case(3):
            setColor(x, y + 1, 'yellow');
            setColor(x, y - 1, 'yellow');
            break;
        case(4):
            setColor(x, y, 'red');
            break;
    }
    color++;
}

function verifyOrder() {

    if (order === 1 && green === 1)
        order++;

    else if (order === 2 && blue === 1)
        order++;

    else if (order === 3 && yellow === 1)
        order++;
    
    else if (order === 4 && red === 1){
        AddScript("assets/js/level5.js");
        document.getElementById("levelTag").textContent = 'Nível 5';
        resetValues();
    }

    else {
        alert("FALSO...");
        reload();
    }

}