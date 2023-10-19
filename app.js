const readline = require("readline");
const validator = require("validator");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function inputNama() {
  rl.question("Masukkan Nama : ", (nama) => {
    inputNotelp(nama);
  });
}

function inputNotelp(nama) {
  rl.question("Masukkan NoTelp : ", (telp) => {
    const cekTelpon = validator.isMobilePhone(telp, "id-ID", { strictMode: false });

    if (cekTelpon) {
      askEmail(nama, telp);
    } else {
      console.log("No Telp salah. Silahkan masukkan sesuai format IDN!");
      inputNotelp(nama);
    }
  });
}

function askEmail(nama, telp) {
  rl.question("Masukkan Email : ", (email) => {
    const cekEmail = validator.isEmail(email);

    if (cekEmail) {
      console.log(`Nama saya ${nama}, nomor telpon saya  ${telp}, dan alamat email saya ${email}`);
      rl.close();
    } else {
      console.log("Email yang dimasukkan salah. Silahkan masukkan sesuai format email");
      askEmail(nama, telp);
    }
  });
}

inputNama();
