const scholarships = [
  { name: "BSI Scholarship", url: "beasiswapost.html" },
  { name: "Beasiswa Sarjana (S1)", url: "beasiswas1.html" },
  { name: "Beasiswa Magister (S2)", url: "beasiswas2.html" },
  { name: "Beasiswa Doktor (S3)", url: "beasiswas3.html" },
  { name: "5 Manfaat Toefl", url: "../berita/post1.html" },
  { name: "Tips Study Abroad", url: "../tips/tips1.html" },
];

// Fungsi pencarian dan render dropdown
document.getElementById("searchInput").addEventListener("input", function () {
  const query = this.value.trim().toLowerCase();
  const dropdown = document.getElementById("searchDropdown");

  // Hapus list lama
  dropdown.innerHTML = "";

  if (query) {
      const filteredItems = scholarships.filter(item =>
          item.name.toLowerCase().includes(query)
      );

      // Tampilkan hasil jika ada, jika tidak ada tampilkan pesan
      if (filteredItems.length > 0) {
          filteredItems.forEach(item => {
              const li = document.createElement("li");
              li.textContent = item.name;
              li.style.color = 'black';  // Menetapkan warna teks item menjadi hitam

              // Efek saat hover
              li.addEventListener("mouseenter", function () {
                  li.style.backgroundColor = '#e5e7eb'; // Ganti warna latar saat hover
                  li.style.cursor = 'pointer';          // Ubah kursor jadi pointer
              });

              li.addEventListener("mouseleave", function () {
                  li.style.backgroundColor = ''; // Kembalikan ke warna semula
              });

              // Efek saat item diklik
              li.addEventListener("click", function () {
                  li.style.backgroundColor = '#93c5fd'; // Ganti warna latar saat klik
                  window.location.href = item.url; // Navigasi ke URL setelah klik
              });

              dropdown.appendChild(li);
          });
      } else {
          const li = document.createElement("li");
          li.textContent = "Hasil tidak ditemukan.";
          li.classList.add("no-result");
          li.style.color = 'gray';  // Menetapkan warna teks pesan 'Tidak ada hasil ditemukan' menjadi hitam
          dropdown.appendChild(li);
      }

      dropdown.classList.remove("hidden"); // Tampilkan dropdown
  } else {
      dropdown.classList.add("hidden"); // Sembunyikan dropdown jika kosong
  }
});


// Event untuk tombol "Cari"
document.getElementById("searchButton").addEventListener("click", function () {
  const query = document.getElementById("searchInput").value.trim();
  const resultDiv = document.getElementById("searchResult");

  if (query) {
      // Menampilkan hasil pencarian di halaman
      resultDiv.textContent = `Hasil pencarian untuk: "${query}"`;

      // Logika untuk memilih halaman yang sesuai berdasarkan kata kunci
      if (query.toLowerCase().includes("sarjana")) {
          // Jika query mengandung kata 'sarjana', arahkan ke halaman beasiswa sarjana
          window.location.href = `beasiswas1.html?search=${encodeURIComponent(query)}`;
      } else if (query.toLowerCase().includes("magister")) {
          // Jika query mengandung kata 'magister', arahkan ke halaman beasiswa magister
          window.location.href = `beasiswas2.html?search=${encodeURIComponent(query)}`;
      } else if (query.toLowerCase().includes("doktor")) {
          // Jika query mengandung kata 'doktor', arahkan ke halaman beasiswa doktor
          window.location.href = `beasiswas3.html?search=${encodeURIComponent(query)}`;
      } else if (query.toLowerCase().includes("toefl")) {
          // Jika query mengandung kata 'toefl', arahkan ke halaman tentang TOEFL
          window.location.href = `../berita/post1.html?search=${encodeURIComponent(query)}`;
      } else if (query.toLowerCase().includes("study abroad")) {
          // Jika query mengandung kata 'study abroad', arahkan ke halaman tips study abroad
          window.location.href = `../tips/tips1.html?search=${encodeURIComponent(query)}`;
      } else {
          // Jika tidak ada kata kunci yang cocok, arahkan ke halaman pencarian umum
          window.location.href = `beasiswas1.html?search=${encodeURIComponent(query)}`;
      }
  } else {
      alert("Masukkan kata kunci untuk mencari beasiswa.");
  }
});


// Event untuk klik di luar dropdown
document.addEventListener("click", function (event) {
  const input = document.getElementById("searchInput");
  const dropdown = document.getElementById("searchDropdown");

  if (!input.contains(event.target) && !dropdown.contains(event.target)) {
      dropdown.classList.add("hidden");
  }
});

