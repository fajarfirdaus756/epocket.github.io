// JavaScript untuk menambahkan animasi pada form dan tabel saat pertama kali web dibuka
window.addEventListener('load', function () {
  const formContainer = document.querySelector('.form-container');
  const tableContainer = document.querySelector('.table-container');

  // Menambahkan animasi untuk form dan tabel
  formContainer.style.animation = 'fadeIn 1s ease-out forwards';
  tableContainer.style.animation = 'fadeIn 1s ease-out forwards';
});
