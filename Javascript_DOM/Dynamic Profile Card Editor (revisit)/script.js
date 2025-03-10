const nameInput = document.getElementById("nameInput");
const bioInput = document.getElementById("bioInput");
const imageInput = document.getElementById("imageInput");
const bgColorInput = document.getElementById("bgColorInput");

   
const profileName = document.getElementById("profileName");
const profileBio = document.getElementById("profileBio");
const profileImage = document.getElementById("profileImage");
const profileCard = document.getElementById("profileCard");

const updateProfileBtn = document.getElementById("updateProfileBtn");
   
    updateProfileBtn.addEventListener("click", function () {
        if (nameInput.value !== "") {
            profileName.innerText = nameInput.value;
        }

        if (bioInput.value !== "") {
            profileBio.innerText = bioInput.value;
        }

        if (imageInput.value !== "") {
            profileImage.src = imageInput.value;
        }

        profileCard.style.backgroundColor = bgColorInput.value;
        }
    );

