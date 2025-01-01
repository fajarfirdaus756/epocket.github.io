// Filter Tabel Berdasarkan Status
document.addEventListener('DOMContentLoaded', () => {
  const statusFilter = document.getElementById('statusFilter');
  const cards = document.querySelectorAll('.card');

  // Fungsi untuk menampilkan atau menyembunyikan card
  function filterCards(status) {
    cards.forEach((card) => {
      if (status === '' || card.classList.contains(status)) {
        card.style.display = 'block';
      } else {
        card.style.display = 'none';
      }
    });
  }

  // Event listener untuk filter dropdown
  statusFilter.addEventListener('change', (e) => {
    const status = e.target.value;
    filterCards(status);
  });
});
