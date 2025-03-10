function showNotification() {

    let container = document.getElementById("notificationContainer");

    let notification = document.createElement("div");
    notification.className = "notification";
    notification.innerText = "You have a new message!";

    let closeBtn = document.createElement("button");
    closeBtn.className = "close-btn";
    closeBtn.innerHTML = "X"; 
    closeBtn.onclick = function () {
        container.removeChild(notification);
    };
   
    notification.appendChild(closeBtn);

    if (container.firstChild) {
        container.insertBefore(notification, container.firstChild);
    } else {
        container.appendChild(notification);
    }
    setTimeout(() => {
        if (notification.parentElement) {
            container.removeChild(notification);
        }
    }, 5000);
}

