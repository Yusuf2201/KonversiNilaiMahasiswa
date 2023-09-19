const readline = require('readline');

const Y = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// function getInput() {
//   return new Promise((resolve) => {
//     Y.question('Masukkan nilai mata kuliah (0-100): ', (input) => {
//       Y.close(); // Tutup readline setelah pengguna memberikan input
//       resolve(input);
//     });
//   });
// }

function processInput(input) {
  const nilai = parseInt(input);

  if (isNaN(nilai) || nilai < 0 || nilai > 100) {
    console.log('Nilai tidak valid');
    return 'Nilai tidak valid\n';
  } else {
    const nilaiHuruf = require('./nilaiKonversi')(nilai);
    console.log(`Nilainya dalam Huruf Adalah: ${nilaiHuruf}`);
    return `Nilainya dalam Huruf Adalah: ${nilaiHuruf}\n`;
  }
}

module.exports = {
  getInput,
  processInput,
};
