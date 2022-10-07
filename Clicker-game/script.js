let score = 0;
let cursorCost = 10;
let cursors = 0;
let betterCursorCost = 50;
let betterCursors = 0;
let clickingPower = 1;
let ultimateCursors = 0;
let ultimateCursorCost = 100;
let gloveCost = 250;
let gloves = 0;
let glove = 0;
let autoclick = 0;
let autoclicks = 0;
let autoclickCost = 100000;
let finishGameCost = 1000000;;


function saveGame() {
    const gameSave = {
        score: score,
        cursors: cursors,
        betterCursors: betterCursors,
        clickingPower: clickingPower,
        gloves: gloves,
        autoclicks: autoclicks
    };
    window.localStorage.setItem("gameSave", JSON.stringify(gameSave));
}
setInterval(function () {
    saveGame();
}, 10000)
function loadGame() {
    const savedGame = JSON.parse(localStorage.getItem("gameSave"));
    if (typeof savedGame.score !== undefined) score = savedGame.score;
    if (typeof savedGame.cursors !== undefined) cursors = savedGame.cursors;
    if (typeof savedGame.betterCursors !== undefined) betterCursors = savedGame.betterCursors;
    if (typeof savedGame.clickingPower !== undefined) clickingPower = savedGame.clickingPower;
    if (typeof savedGame.gloves !== undefined) gloves = savedGame.gloves;
    if (typeof savedGame.autoclicks !== undefined) autoclicks = savedGame.autoclicks;

}
window.onload = function () {
    loadGame();
    document.getElementById("score").innerHTML = score;
    document.getElementById("cursors").innerHTML = cursors;
    document.getElementById("betterCursors").innerHTML = betterCursors;
    document.getElementById("ultimateCursors").innerHTML = ultimateCursors;
    document.getElementById("gloves").innerHTML = gloves;
    document.getElementById("autoclicks").innerHTML = autoclicks;

};

function addToScore(amount) {
    score = score + amount;
    document.getElementById("score").innerHTML = score;

}

function buyCursor() {
    if (score >= 1) {
        score = score - cursorCost
        cursors = cursors + 1;
        cursorCost = Math.round(cursorCost * 1.15);
        document.getElementById("score").innerHTML = score;
        document.getElementById("cursorCost").innerHTML = cursorCost;
        document.getElementById("cursors").innerHTML = cursors;
    }
}

function buyAutoclick() {
    if (score >= 1) {
        score = score - autoclickCost
        autoclicks = autoclicks + 1;
        autoclickCost = Math.round(autoclickCost * 1.15);
        document.getElementById("score").innerHTML = score;
        document.getElementById("autoclickCost").innerHTML = autoclickCost;
        document.getElementById("autoclicks").innerHTML = autoclicks;
    }
}

function buyBetterCursor() {
    if (score >= 50) {
        score = score - betterCursorCost
        betterCursors = betterCursors + 1;
        betterCursorCost = Math.round(betterCursorCost * 1.15);
        document.getElementById("score").innerHTML = score;
        document.getElementById("betterCursorCost").innerHTML = betterCursorCost;
        document.getElementById("betterCursors").innerHTML = betterCursors;
    }
}
function buyUltimateCursor() {
    if (score >= 100) {
        score = score - ultimateCursorCost
        ultimateCursors = ultimateCursors + 1;
        ultimateCursorCost = Math.round(ultimateCursorCost * 1.15);
        document.getElementById("score").innerHTML = score;
        document.getElementById("ultimateCursorCost").innerHTML = ultimateCursorCost;
        document.getElementById("ultimateCursors").innerHTML = ultimateCursors;
    }
}
function buyGlove() {
    if (score >= 250) {
        score = score - gloveCost
        gloves = gloves + 1,
            clickingPower = clickingPower + 1,
            gloveCost = Math.round(gloveCost * 1.15);

        document.getElementById("score").innerHTML = score;
        document.getElementById("gloveCost").innerHTML = gloveCost;
        document.getElementById("gloves").innerHTML = gloves;

    }

}
function buyFinishGame() {
    if (score >= 1000000) {
        alert("You completed my game!");
        document.getElementById("finishGameCost").innerHTML = finishGameCost;
    }
}

setInterval(function () {
    score = score + cursors;
    document.getElementById("score").innerHTML = score;
},
    1000);

setInterval(function () {
    score = score + betterCursors;
    document.getElementById("score").innerHTML = score;
},
    500);

setInterval(function () {
    score = score + ultimateCursors;
    document.getElementById("score").innerHTML = score;
},
    250);


setInterval(function () {
    score = score + autoclicks;
    document.getElementById("score").innerHTML = score;
},
    10);

