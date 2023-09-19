const assert = require('assert');
const inputNilaiMataKuliah = require('../main');

describe('Input Nilai Mata Kuliah', () => {
  it('Harus Menampilkan "Nilai tidak valid" untuk input kosong', () => {
    // kosong
    const input = '\n';
    const result = inputNilaiMataKuliah.processInput(input);
    assert.strictEqual(result, 'Nilai tidak valid\n');
      
  });

  it('Harus Menampilkan "Nilai tidak valid" untuk input string', () => {
    // string
    const input = 'a';
    const result = inputNilaiMataKuliah.processInput(input);
    assert.strictEqual(result, 'Nilai tidak valid\n');
  });
  it('Harus Menampilkan "Nilai tidak valid" untuk input karakter',  () => {
    // karakter
    const input = '#';
    const result = inputNilaiMataKuliah.processInput(input);
    assert.strictEqual(result, 'Nilai tidak valid\n');
  });

  it('Harus Menampilkan "Nilai tidak valid" untuk input melebihi ambang batas', () => {
    // Simulate input exceeding the limit
    const input = '-105\n';
    const result = inputNilaiMataKuliah.processInput(input);
    assert.strictEqual(result, 'Nilai tidak valid\n');
  });

  it('Harus Menampilkan "Nilai tidak valid" untuk input kurang dari amabang batas',  () => {
    // Simulate input below the limit
    const input = '-5\n';
    const result = inputNilaiMataKuliah.processInput(input);
    assert.strictEqual(result, 'Nilai tidak valid\n');
  });
});
