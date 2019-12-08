function startOrder() {
    var timePaint = 500;
    var timeClear = 750;
    var i;

    for (i = 0; i < 6; i++) {
        setTimeout(colorOrder, timePaint);
        setTimeout(clear, timeClear);

        timePaint = timePaint + 1000;
        timeClear = timeClear + 1000;
    }
}

function colorOrder() {
    var x = 1;
    var y = 1;

    switch (color) {
        case(1):
            setColor(x - 1, y, 'blue');
            break;
        case(2):
            setColor(x, y + 1, 'green');
            break;
        case(3):
            setColor(x + 1, y, 'yellow');
            break;
        case(4):
            setColor(x, y - 1, 'red');
            break;
        case(5):
            setColor(x - 1, y + 1, 'green');
            setColor(x + 1, y - 1, 'green');
            break;
        case(6):
            setColor(x - 1, y + 1, 'yellow');
            setColor(x + 1, y - 1, 'yellow');
            break;
    }
    color++;
}

function verifyOrder() {

    if (order === 1 && blue === 1)
        order++;

    else if (order === 2 && green === 1)
        order++;

    else if (order === 3 && yellow === 1)
        order++;

    else if (order === 4 && red === 1)
        order++;

    else if (order === 5 && green === 2)
        order++;
    
    else if (order === 6 && yellow === 2){
        AddScript("assets/js/level4.js");
        document.getElementById("levelTag").textContent = 'Nível 4';
        resetValues();
    }

    else {
        alert("FALSO...");
        reload();
    }

}