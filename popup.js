// popup.js
const loginButton = document.getElementById("loginButton");
const loginPopup = document.getElementById("loginPopup");
const closePopup = document.getElementById("closePopup");

// Menampilkan popup login
loginButton.addEventListener("click", () => {
  loginPopup.classList.remove("hidden");
});

// Menyembunyikan popup login
closePopup.addEventListener("click", () => {
  loginPopup.classList.add("hidden");
});

// Menutup popup saat klik di luar area
window.addEventListener("click", (event) => {
  if (event.target === loginPopup) {
    loginPopup.classList.add("hidden");
  }
});
