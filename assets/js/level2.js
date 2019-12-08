function startOrder() {
    var timePaint = 500;
    var timeClear = 1000;
    var i;

    for (i = 0; i < 5; i++) {
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
            setColor(x + 1, y + 1, 'red');
            break;
        case(2):
            setColor(x, y, 'green');
            break;
        case(3):
            setColor(x - 1, y - 1, 'yellow');
            break;
        case(4):
            setColor(x + 1, y - 1, 'green');
            break;
        case(5):
            setColor(x - 1, y + 1, 'red');
            break;
    }
    color++;
}

function verifyOrder() {

    if (order === 1 && red === 1)
        order++;

    else if (order === 2 && green === 1)
        order++;

    else if (order === 3 && yellow === 1)
        order++;
    
    else if (order === 4 && green === 2)
        order++;

    else if (order === 5 && red === 2){
        AddScript("assets/js/level3.js");
        document.getElementById("levelTag").textContent = 'Nível 3';
        resetValues();
    }

    else {
        alert("FALSO...");
        reload();
    }

}