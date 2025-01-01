document.getElementById('registerForm').addEventListener('submit', function (event) {
  event.preventDefault(); // Mencegah form untuk submit secara normal

  // Ambil nilai input dari form
  const fullName = document.getElementById('fullName').value;
  const username = document.getElementById('username').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const confirmPassword = document.getElementById('confirmPassword').value;

  // Validasi input
  if (fullName === '' || username === '' || email === '' || password === '' || confirmPassword === '') {
    alert('Semua kolom wajib diisi!');
    return; // Hentikan proses jika ada input yang kosong
  }

  // Validasi kata sandi dan konfirmasi kata sandi
  if (password !== confirmPassword) {
    alert('Kata sandi dan konfirmasi kata sandi tidak cocok!');
    return;
  }

  // Proses pendaftaran (contoh sederhana: simpan data pengguna)
  alert('Pendaftaran berhasil! Akun Anda telah dibuat.');
});
