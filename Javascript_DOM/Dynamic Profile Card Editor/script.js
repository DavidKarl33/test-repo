function updateName() {
    let newName = document.getElementById("nameInput").value;
    document.getElementById("profileName").innerText = newName;
}

function updateBio() {
    let newBio = document.getElementById("bioInput").value;
    document.getElementById("profileBio").innerText = newBio;
}

function updateImage() {
    let newImageUrl = document.getElementById("imageInput").value;
    document.getElementById("profileImage").src = newImageUrl;
}

function updateBgColor() {
    let newColor = document.getElementById("bgColorInput").value;
    document.getElementById("profileCard").style.backgroundColor = newColor;
}
