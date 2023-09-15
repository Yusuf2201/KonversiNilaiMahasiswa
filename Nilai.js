const readline = require('readline');

const Y = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function konvHuruf(nilai) {
  if (nilai >= 90) {
    return 'A';
  } else if (nilai >= 80) {
    return 'B';
  } else if (nilai >= 60) {
    return 'C';
  } else if (nilai >= 40) {
    return 'D';
  } else {
    return 'F';
  }
}

function inputNilaiMataKuliah() {
  Y.question('Masukkan nilai mata kuliah (0-100): ', (nilai) => {
    // Validasi nilai
    nilai = parseInt(nilai);

    if (isNaN(nilai) || nilai < 0 || nilai > 100) {
      console.log('Nilai tidak valid. Harap masukkan nilai antara 0 hingga 100.');
      inputNilaiMataKuliah(); // Meminta input ulang jika nilai tidak valid
    } else {
      const nilaiHuruf = konvHuruf(nilai);
      console.log(`Nilainya dalam Huruf Adalah: ${nilaiHuruf}`);
      Y.close();
    }
  });
}

inputNilaiMataKuliah();
