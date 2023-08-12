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

const openPopupBtn = document.getElementById('openPopupBtn');
const popupContainer = document.getElementById('popupContainer');
const closePopupBtn = document.getElementById('closePopupBtn');

openPopupBtn.addEventListener('click', () => {
  popupContainer.style.display = 'block';
});

closePopupBtn.addEventListener('click', () => {
  popupContainer.style.display = 'none';
});

popupContainer.addEventListener('click', (event) => {
  if (event.target === popupContainer) {
    popupContainer.style.display = 'none';
  }
});
