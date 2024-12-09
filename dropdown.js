// Dropdown toggle function for BEASISWA
document.getElementById('beasiswaToggle').addEventListener('click', function () {
  const menu = document.getElementById('beasiswaMenu');
  menu.classList.toggle('hidden');
});

// Dropdown toggle function for BERITA
document.getElementById('beritaToggle').addEventListener('click', function () {
  const menu = document.getElementById('beritaMenu');
  menu.classList.toggle('hidden');
});

// Close dropdowns if clicking outside
document.addEventListener('click', function (event) {
  const beasiswaMenu = document.getElementById('beasiswaMenu');
  const beritaMenu = document.getElementById('beritaMenu');
  const beasiswaToggle = document.getElementById('beasiswaToggle');
  const beritaToggle = document.getElementById('beritaToggle');

  if (!beasiswaToggle.contains(event.target) && !beasiswaMenu.contains(event.target)) {
    beasiswaMenu.classList.add('hidden');
  }

  if (!beritaToggle.contains(event.target) && !beritaMenu.contains(event.target)) {
    beritaMenu.classList.add('hidden');
  }
});

