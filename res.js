//agar kode dijalankan dengan ketat
"use strict";

exports.ok = function (values, res) {
  let data = {
    status: 200,
    values: values,
  };
  res.json(data);
  res.end();
};

//respon untuk nested matakuliah
exports.oknested = function (values, res) {
  //reduce untuk mengubah salah satu range menjadi single value, misal matakuliah menjadi satu pada satu mahasiswa yang meilih makul banyak
  //lakukan akumulasi
  const hasil = values.reduce((akumulasikan, item) => {
    //tentukan key group
    if (akumulasikan[item.nama]) {
      const group = akumulasikan[item.nama];
      //cek jika isi array adalah matakuliah
      if (Array.isArray(group.matakuliah)) {
        //tambahkan value ke dalam group matakuliah
        group.matakuliah.push(item.matakuliah);
      } else {
        group.matakuliah = [group.matakuliah, item.matakuliah];
      }
    } else {
      akumulasikan[item.nama] = item;
    }
    return akumulasikan;
  }, {});
  let data = {
    status: 200,
    values: hasil,
  };

  res.json(data);
  res.end();
};
