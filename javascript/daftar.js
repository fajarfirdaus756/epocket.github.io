document.addEventListener('DOMContentLoaded', () => {
  const cards = document.querySelectorAll('.transaction-card');
  cards.forEach((card, index) => {
    setTimeout(() => {
      card.style.opacity = 1;
      card.style.transform = 'translateY(0)';
    }, index * 200);
  });

  // Data untuk QR code masing-masing transaksi
  const qrData = [
    { id: 'qr-code-1', text: 'https://example.com/transaction/transfer' },
    { id: 'qr-code-2', text: 'https://example.com/transaction/bills' },
    { id: 'qr-code-3', text: 'https://example.com/transaction/pulsa' },
    { id: 'qr-code-4', text: 'https://example.com/transaction/shopping' },
    { id: 'qr-code-5', text: 'https://example.com/transaction/qris' },
    { id: 'qr-code-6', text: 'https://example.com/transaction/loan' },
  ];

  qrData.forEach((item) => {
    QRCode.toDataURL(item.text, { errorCorrectionLevel: 'H', width: 150, margin: 2 }, (err, url) => {
      if (err) {
        console.error('Error generating QR code', err);
        return;
      }
      const qrCodeElement = document.getElementById(item.id);
      const img = document.createElement('img');
      img.src = url;
      qrCodeElement.appendChild(img);
    });
  });
});
