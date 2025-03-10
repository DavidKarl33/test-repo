let balance = 1000;
const balanceDisplay = document.getElementById("balance");
const amountInput = document.getElementById("amount");
const depositBtn = document.getElementById("depositBtn");
const withdrawBtn = document.getElementById("withdrawBtn");
const message = document.getElementById("message");

function updateBalanceDisplay() {
    balanceDisplay.innerText = balance;
}

function showMessage(text, isError = false) {
    message.innerText = text;
    message.style.color = isError ? "red" : "green";
}

depositBtn.addEventListener("click", function () {
    let amount = parseFloat(amountInput.value);
    if (isNaN(amount) || amount <= 0) {
        showMessage("Enter a valid amount!", true);
        return;
    }
    balance += amount;
    updateBalanceDisplay();
    showMessage(`Successfuly Deposited $${amount.toFixed(2)}`);
    amountInput.value = "";
	}
);

withdrawBtn.addEventListener("click", function () {
    let amount = parseFloat(amountInput.value);
    if (isNaN(amount) || amount <= 0) {
        showMessage("Enter a valid amount!", true);
        return;
    }
    if (amount > balance) {
        showMessage("Insufficient funds!", true);
        return;
    }
    balance -= amount;
    updateBalanceDisplay();
    showMessage(`Withdraw $${amount.toFixed(2)}`);
    amountInput.value = "";
	}
);

updateBalanceDisplay();