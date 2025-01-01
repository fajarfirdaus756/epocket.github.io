// Menambahkan animasi pada langkah-langkah dan call to action
window.addEventListener('load', function () {
  const steps = document.querySelectorAll('.step');
  const ctaSection = document.querySelector('.cta-section');

  steps.forEach((step, index) => {
    setTimeout(() => {
      step.style.animation = 'fadeInUp 1s ease-out forwards';
    }, index * 300); // Animasi bertahap dengan jeda
  });

  // Animasi untuk call to action
  setTimeout(() => {
    ctaSection.style.animation = 'fadeInUp 1s ease-out forwards';
  }, steps.length * 300); // Menunggu langkah terakhir sebelum muncul CTA
});
