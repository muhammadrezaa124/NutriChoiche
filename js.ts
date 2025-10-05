function dapatkanRekomendasi() {
  const umur = parseInt(document.getElementById("umur").value);
  const berat = parseInt(document.getElementById("berat").value);
  const hasil = document.getElementById("hasil");

  if (isNaN(umur) || isNaN(berat)) {
    hasil.innerHTML = "Harap masukkan umur dan berat badan dengan benar.";
    return;
  }

  let rekomendasi = "";

  // Contoh tabel logika sederhana (bisa dikembangkan lebih detail)
  if (umur >= 18 && umur <= 30) {
    if (berat < 50) {
      rekomendasi = "Perbanyak makanan berprotein tinggi dan karbohidrat kompleks.";
    } else if (berat >= 50 && berat <= 70) {
      rekomendasi = "Jaga pola makan seimbang dengan sayur, buah, dan protein.";
    } else {
      rekomendasi = "Kurangi makanan berlemak dan perbanyak olahraga rutin.";
    }
  } else if (umur > 30 && umur <= 50) {
    if (berat < 60) {
      rekomendasi = "Tambahkan makanan bergizi tinggi, utamakan ikan dan sayur.";
    } else if (berat >= 60 && berat <= 80) {
      rekomendasi = "Jaga keseimbangan nutrisi dan perbanyak air putih.";
    } else {
      rekomendasi = "Hindari gula berlebih dan lakukan aktivitas fisik rutin.";
    }
  } else if (umur > 50) {
    if (berat < 55) {
      rekomendasi = "Perbanyak konsumsi susu rendah lemak, buah, dan sayur.";
    } else if (berat >= 55 && berat <= 75) {
      rekomendasi = "Jaga kesehatan jantung dengan makanan rendah garam.";
    } else {
      rekomendasi = "Kurangi makanan berkolesterol tinggi dan rutin cek kesehatan.";
    }
  } else {
    rekomendasi = "Program hanya berlaku untuk usia 18 tahun ke atas.";
  }

  hasil.innerHTML = `<strong>Rekomendasi:</strong><br>${rekomendasi}`;
}
