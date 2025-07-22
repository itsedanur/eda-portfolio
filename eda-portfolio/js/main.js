// main.js - Eda Nur Unal Portfolio

// Sayfa yüklenince AOS animasyonlarını başlat
AOS.init({
  duration: 1000,
  once: true
});

// Basit form gönderimi simülasyonu (yerel olarak çalışır, e-posta servisi ile entegre edilebilir)
document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('form');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      alert("Teşekkürler! Mesajınız başarıyla gönderildi. (Gerçek gönderim için entegrasyon gerekir)");
      form.reset();
    });
  }
});
