let black_money = document.getElementById("black_money");
let money = document.getElementById("money");
let gamble = document.getElementById("gamble");
let num1 = document.getElementById("num1");
let num2 = document.getElementById("num2");
let num3 = document.getElementById("num3");
let result = document.getElementById("phal");
let chances = 2
let cash = 999;

money.textContent = `Money: $${cash}`;

gamble.onclick = function () {
    let bet = Number(black_money.value);

    if (isNaN(bet) || bet <= 0) {
        alert("Enter a valid bet.");
        return;
    }

    if (bet > cash) {
        alert("You don't have enough money.");
        return;
    }

    cash -= bet;

    let random_num1 = Math.floor(Math.random() * 7) + 1;
    let random_num2;
    let random_num3;

    if (Math.random() < (chances/10)) {
        random_num2 = random_num1;
        random_num3 = random_num1;
    } else {
        random_num2 = Math.floor(Math.random() * 7) + 1;
        random_num3 = Math.floor(Math.random() * 7) + 1;
    }

    num1.textContent = random_num1;
    num2.textContent = random_num2;
    num3.textContent = random_num3;

    if (random_num1 === random_num2 && random_num2 === random_num3) {
        result.textContent = " YOU WON! ye pakka chiku sir honge";
        cash += bet * 2;
    } else {
        result.textContent = "You lost! harr gya noob";
    }

    money.textContent = `Money: $${cash}`;

    if (cash <= 0) {
        alert("Game Over! You have no money left.");
        gamble.disabled = true;
    }

    black_money.value = "";
};