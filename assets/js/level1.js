function startOrder() {
    var timePaint = 1000;
    var timeClear = 1750;
    var i;

    for (i = 0; i < 3; i++) {
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
            setColor(x - 1, y - 1, 'green');
            break;
        case(2):
            setColor(x, y, 'blue');
            break;
        case(3):
            setColor(x + 1, y + 1, 'yellow');
            break;
    }
    color++;
}

function verifyOrder() {

    if (order === 1 && green === 1)
        order++;

    else if (order === 2 && blue === 1)
        order++;

    else if (order === 3 && yellow === 1){
        AddScript("assets/js/level2.js");
        document.getElementById("levelTag").textContent = 'Nível 2';
        resetValues();
    }

    else {
        alert("FALSO...");
        reload();
    }

}