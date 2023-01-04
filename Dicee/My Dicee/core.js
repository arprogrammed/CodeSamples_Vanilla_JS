function roll() {
    const diceShake = [
        { transform: 'rotate(8deg)' },
        { transform: 'rotate(-8deg)' },
        { transform: 'rotate(5deg)' },
        { transform: 'rotate(-5deg)' },
        { transform: 'rotate(2deg)' },
        { transform: 'rotate(-2deg)' }
    ];

    const diceTime = {duration: 250, iterations: 2}

    var randlist = [];
    var count = 1
    var p1 = document.getElementById('p1');
    var p2 = document.getElementById('p2');
    var p1n = document.getElementById('p1n');
    var p2n = document.getElementById('p2n');


    while (randlist.length < 6) {
        randlist.push(count);
        count++;
    }

    var p1Rand = Math.floor(Math.random() * 5 + 1);
    var p2Rand = Math.floor(Math.random() * 5 + 1);

    var p1Final = p1.src = "./images/dice" + p1Rand + ".png";
    var p2Final = p2.src = "./images/dice" + p2Rand + ".png";

    var title1 = document.querySelector('h1');
    
    p1n.style.borderBottom = "none";
    p2n.style.borderBottom = "none";

    if (p1Final > p2Final) {
        title1.textContent = "PLAYER 1 WINS!!";
        p1.animate(diceShake, diceTime);
        p1n.style.borderBottom = "thick solid #D72323";
    } else if (p2Final > p1Final) {
        title1.textContent = "PLAYER 2 WINS!!";
        p2.animate(diceShake, diceTime);
        p2n.style.borderBottom = "thick solid #D72323";
    } else {
        title1.textContent = "TIE";
        p1.animate(diceShake, diceTime);
        p2.animate(diceShake, diceTime);
    }
}