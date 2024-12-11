const withdraw = document.getElementById("withdraw");
var guess;
let money = 5000;
let text = document.getElementById("text");
let deposit = document.getElementById("deposit");
let balance = document.getElementById("balance");
let exit = document.getElementById("exit");
let txt;

function myFunction(sel) {

    switch (Number(sel)) {
        case 1:
            txt = prompt("Enter any ammount to withdraw: ");

            if (isNaN(txt) || txt == "0") {
                alert("Letters and none is not available, PLEASE ENTER A NUMBER");
                return;
            }
            if (parseInt(txt) > money) {
                alert("Insufficient Balance");
            }
            else {
                money -= Number(txt);
                text.textContent = (`₱ ${money}`);
            }
            break;
        case 2:
            txt = prompt("Enter any ammount to deposit: ");
            if (isNaN(txt) || txt == "0") {
                alert("Letters and none is not available, PLEASE ENTER A NUMBER");
                return;
            }
            if (parseInt(txt) > money) {
                alert("Insufficient Balance");
            }

            else{money += Number(txt);
            text.textContent = money;
            }
            break;
        case 3:
            txt = alert(`Your Balance is : $${money}`);
            break;
    }
    while (sel == 4) {
        alert("Goodbye! and thank you",)
        location.reload()
        break;

    }
    debugger;
}