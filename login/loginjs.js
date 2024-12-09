// Ambil elemen-elemen dari DOM
const loginButton = document.getElementById("loginButton");
const loginPopup = document.getElementById("loginPopup");
const closePopup = document.getElementById("closePopup");

// Fungsi untuk menampilkan popup
loginButton.addEventListener("click", () => {
  loginPopup.classList.remove("hidden");
});

// Fungsi untuk menyembunyikan popup
closePopup.addEventListener("click", () => {
  loginPopup.classList.add("hidden");
});

// Menutup popup jika klik di luar area popup
window.addEventListener("click", (e) => {
  if (e.target === loginPopup) {
    loginPopup.classList.add("hidden");
  }
});
