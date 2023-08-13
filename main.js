const club = document.querySelectorAll(".club")

club.forEach((club) => {
    club.addEventListener("click", () => {
        club.classList.toggle("active");
    });
});

const club1 = document.querySelectorAll(".club1")

club1.forEach((club1) => {
    club1.addEventListener("click", () => {
        club1.classList.toggle("active");
    });
});

const openButton = document.getElementById('openButton');
const closeButton = document.getElementById('closeButton');
const popupContainer = document.getElementById('popupContainer');
const overlay = document.getElementById('overlay');

openButton.addEventListener('click', () => {
    popupContainer.style.display = 'block';
    overlay.style.display = 'block';
});

closeButton.addEventListener('click', () => {
    popupContainer.style.display = 'none';
    overlay.style.display = 'none';
});
