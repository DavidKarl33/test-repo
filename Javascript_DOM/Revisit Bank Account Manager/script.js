// Initial values
let balance = 1000;
let dailyWithdrawal = 0;
const dailyLimit = 500;

// elements
const balanceDisplay = document.getElementById("balance");
const amountInput = document.getElementById("amount");
const depositBtn = document.getElementById("depositBtn");
const withdrawBtn = document.getElementById("withdrawBtn");
const message = document.getElementById("message");
const transactionHistory = document.getElementById("transactionHistory");

// Update balance display
function updateBalanceDisplay() {
    balanceDisplay.innerText = balance;
}
// Show messages (success/error)
function showMessage(text, isError = false) {
    message.innerText = text;
    message.style.color = isError ? "red" : "green";
}

// Add transaction to history
function addTransaction(type, amount) {
    let listItem = document.createElement("li");
    listItem.innerText = `${type}: $${amount.toFixed(2)}`;
    listItem.classList.add(type === "Deposit" ? "deposit" :"withdraw");
    transactionHistory.prepend(listItem);
}

// deposit money
depositBtn.addEventListener("click", function () {
    let amount = parseFloat(amountInput.value);
    
    if (isNaN(amount) || amount <= 0) {
        showMessage("Enter a valid amount!", true);
        return;
    }

    balance += amount;
    updateBalanceDisplay();
    addTransaction("Deposit", amount);
    showMessage(`Deposited $${amount.toFixed(2)}`);
    amountInput.value = "";
    }
);
// withdraw money
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
    if (dailyWithdrawal + amount > dailyLimit) {
        showMessage("Daily withdrawal limit reached!", true);
        return;
    }

    balance -= amount;
    dailyWithdrawal += amount;
    updateBalanceDisplay();
    addTransaction("Withdraw", amount);
    showMessage(`Withdrew $${amount.toFixed(2)}`);
    amountInput.value = "";   
    }
);
// balance update
updateBalanceDisplay();
