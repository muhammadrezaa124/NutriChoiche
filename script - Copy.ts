// Data tabel rekomendasi makanan
const dataRekomendasi = [
  {
    usia: "19-30",
    berat: "50-70",
    kalori: "1.800 - 2.400",
    menu: "Sarapan: Roti gandum (2 lembar) + 2 butir telur. <br> Makan Siang: Nasi merah (150g) + Dada ayam panggang (100g) + Tumis sayuran. <br> Makan Malam: Ikan salmon (100g) + Kentang rebus (150g) + Salad. <br> Camilan: Buah-buahan."
  },
  {
    usia: "19-30",
    berat: "71-90",
    kalori: "2.200 - 2.800",
    menu: "Sarapan: Oatmeal dengan buah (2 porsi). <br> Makan Siang: Nasi merah (200g) + Ayam/ikan panggang (150g) + Sayuran hijau. <br> Makan Malam: Pasta gandum (150g) + Daging tanpa lemak (100g) + Salad. <br> Camilan: Yoghurt dengan madu dan kacang."
  },
  {
    usia: "31-50",
    berat: "50-70",
    kalori: "1.800 - 2.200",
    menu: "Sarapan: Telur orak-arik (2 butir) + Roti gandum (1 lembar). <br> Makan Siang: Nasi merah (100g) + Ikan/ayam panggang (100g) + Sayuran kukus. <br> Makan Malam: Sup sayuran dengan potongan ayam tanpa lemak. <br> Camilan: Buah apel/pir."
  },
  {
    usia: "31-50",
    berat: "71-90",
    kalori: "2.000 - 2.600",
    menu: "Sarapan: Roti gandum (2 lembar) + Alpukat + Telur. <br> Makan Siang: Nasi merah (150g) + Daging sapi tanpa lemak (100g) + Tumis brokoli. <br> Makan Malam: Dada ayam panggang (100g) + Kentang rebus (150g) + Salad. <br> Camilan: Segenggam almond."
  },
  {
    usia: ">50",
    berat: "50-70",
    kalori: "1.600 - 2.000",
    menu: "Sarapan: Oatmeal + Buah + Kacang. <br> Makan Siang: Nasi merah (100g) + Tahu/tempe (100g) + Sayuran. <br> Makan Malam: Sup ikan bening + Sayuran hijau. <br> Camilan: Yoghurt tawar."
  },
  {
    usia: ">50",
    berat: "71-90",
    kalori: "1.800 - 2.200",
    menu: "Sarapan: Roti gandum (2 lembar) + Selai kacang alami. <br> Makan Siang: Nasi merah (100g) + Ikan tuna + Salad. <br> Makan Malam: Daging ayam/sapi tanpa lemak (100g) + Sayuran kukus. <br> Camilan: Buah-buahan segar."
  }
];

// Fungsi cek rentang
function cekRentang(value, rentang) {
  if (rentang.includes("-")) {
    let [min, max] = rentang.split("-").map(Number);
    return value >= min && value <= max;
  } else if (rentang.includes(">")) {
    let batas = Number(rentang.replace(">", ""));
    return value > batas;
  }
  return false;
}

// Proses pencarian rekomendasi
function prosesSPK() {
  const usia = parseInt(document.getElementById("usia").value);
  const berat = parseInt(document.getElementById("berat").value);
  const hasil = document.getElementById("hasil");

  if (!usia || !berat) {
    alert("Mohon isi usia dan berat badan!");
    return;
  }

  let rekom = dataRekomendasi.find(item =>
    cekRentang(usia, item.usia) && cekRentang(berat, item.berat)
  );

  if (rekom) {
    hasil.style.display = "block";
    hasil.innerHTML = `
      <h3>Rekomendasi Makanan</h3>
      <p><b>Usia:</b> ${usia} tahun</p>
      <p><b>Berat:</b> ${berat} kg</p>
      <p><b>Kebutuhan Kalori:</b> ${rekom.kalori} kkal</p>
      <hr>
      <p><b>Contoh Menu:</b><br>${rekom.menu}</p>
    `;
  } else {
    hasil.style.display = "block";
    hasil.innerHTML = "<p>Data tidak ditemukan di tabel rekomendasi.</p>";
  }
}
