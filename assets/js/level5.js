function startOrder() {
    var timePaint = 500;
    var timeClear = 750;
    var i;

    for (i = 0; i < 14; i++) {
        setTimeout(colorOrder, timePaint);
        setTimeout(clear, timeClear);

        timePaint = timePaint + 500;
        timeClear = timeClear + 500;
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
            setColor(x - 1, y, 'blue');
            break;
        case(3):
            setColor(x + 1, y, 'yellow');
            break;
        case(4):
            setColor(x + 1, y, 'yellow');
            break;
        case(5):
            setColor(x, y - 1, 'green');
            break;
        case(6):
            setColor(x, y + 1, 'red');
            break;
        case(7):
            setColor(x, y - 1, 'green');
            break;
        case(8):
            setColor(x, y + 1, 'red');
            break;
        case(9):
            setColor(x + 1, y - 1, 'yellow');
            break;
        case(10):
            setColor(x + 1, y + 1, 'red');
            break;
        case(11):
            setColor(x - 1, y, 'blue');
            break;
        case(12):
            setColor(x, y + 1, 'red');
            break;
        case(13):
            setColor(x + 1, y, 'yellow');
            break;
        case(14):
            setColor(x, y - 1, 'green');
            break;
    }
    color++;
}

function verifyOrder() {

    if (order === 1 && blue === 1)
        order++;

    else if (order === 2 && blue === 2)
        order++;

    else if (order === 3 && yellow === 1)
        order++;

    else if (order === 4 && yellow === 2)
        order++;

    else if (order === 5 && green === 1)
        order++;

    else if (order === 6 && red === 1)
        order++;

    else if (order === 7 && green === 2)
        order++;

    else if (order === 8 && red === 2)
        order++;

    else if (order === 9 && yellow === 3)
        order++;

    else if (order === 10 && red === 3)
        order++;
    
    else if (order === 11 && blue === 3)
        order++;

    else if (order === 12 && red === 4)
        order++;

    else if (order === 13 && yellow === 4)
        order++;
    
    else if (order === 14 && green === 3)
        alert("CORRETO!...");

    else {
        alert("FALSO...");
        reload();
    }

}