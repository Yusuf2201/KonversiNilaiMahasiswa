const chai = require('chai');
const expect = chai.expect;
const konvHuruf = require('../nilaiKonversi');
const inputNilaiMataKuliah = require('../Nilai.JS');

describe('Konversi Nilai', () => {
  it('Harus mengembalikan A untuk nilai di atas atau sama dengan 90', () => {
    expect(konvHuruf(95)).to.equal('A');
    expect(konvHuruf(90)).to.equal('A');
  });

  it('Harus mengembalikan B untuk nilai di atas atau sama dengan 80', () => {
    expect(konvHuruf(85)).to.equal('B');
    expect(konvHuruf(80)).to.equal('B');
  });

  it('Harus mengembalikan C untuk nilai di atas atau sama dengan 60', () => {
    expect(konvHuruf(70)).to.equal('C');
    expect(konvHuruf(60)).to.equal('C');
  });

  it('Harus mengembalikan D untuk nilai di atas atau sama dengan 40', () => {
    expect(konvHuruf(45)).to.equal('D');
    expect(konvHuruf(40)).to.equal('D');
  });

  it('Harus mengembalikan F untuk nilai di bawah 40', () => {
    expect(konvHuruf(35)).to.equal('F');
    expect(konvHuruf(0)).to.equal('F');
  });
  
});
