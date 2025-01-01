// Script untuk menampilkan alert saat login berhasil atau gagal
document.getElementById('loginForm').addEventListener('submit', function (event) {
  event.preventDefault(); // Mencegah perubahan halaman

  // Ambil nilai input dari form
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  // Validasi input
  if (username === '' || password === '') {
    alert('Nama Pengguna dan Kata Sandi wajib diisi!');
    return; // Hentikan proses jika ada input yang kosong
  }

  // Proses login (contoh sederhana: login berhasil jika username dan password benar)
  if (username === 'fajar firdaus' && password === '12345') {
    alert('Masuk Berhasil berhasil!');
  } else {
    alert('Nama Pengguna atau Kata Sandi salah!');
  }
});
