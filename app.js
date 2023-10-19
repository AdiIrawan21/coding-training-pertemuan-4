const readline = require("readline");
const validator = require("validator");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Masukkan Nama : ", (name) => {
  rl.question("Masukkan Nomor Telpon : ", (phone) => {
    rl.question("Masukkan Email :  ", (email) => {
      const cekPhone = validator.isMobilePhone(phone, "id-ID", { strictMode: false });
      const cekEmail = validator.isEmail(email);

      if (cekPhone && cekEmail) {
        console.log(`Nama saya ${name}, nomor telpon saya ${phone}, dan alamat email saya ${email}`);
      } else {
        if (!cekPhone) {
          console.log("Nomor Telpon yang anda masukkan salah, silahkan input sesuai format IDN!");
        }
        if (!cekEmail) {
          console.log("Email yang anda masukkan salah, silahkan input sesuai format email!");
        }
      }
      rl.close();
    });
  });
});
