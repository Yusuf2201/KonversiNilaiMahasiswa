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

module.exports = konvHuruf;
