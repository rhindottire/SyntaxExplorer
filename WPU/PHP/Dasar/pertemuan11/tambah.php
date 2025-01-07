<?php
  require 'functions.php';
  // check apakah tombol submit sudah di tekan atau belum
  if( isset($_POST["submit"]) ) {
    // var_dump($_POST);

    // cek apakah data berhasil ditambahkan atau tidak
    if( tambah($_POST) > 0 ) {
      echo "
        <script>
          alert('data berhasil ditambahkan!');
          document.location.href = 'index.php';
        </script>
      ";
    } else {
      echo "
        <script>
          alert('data gagal ditambahkan!');
          document.location.href = 'index.php';
        </script>
      ";
    }
  }
?>

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  <h1>Tambah Data Mahasiswa</h1>
  <form action="" method="post">
    <ul>
      <li>
        <label for="NIM">NIM : </label>
        <input type="text" name="NIM" id="NIM" required>
      </li>
      <li>
        <label for="nama">Nama : </label>
        <input type="text" name="nama" id="nama" required>
      </li>
      <li>
        <label for="email">Email : </label>
        <input type="text" name="email" id="email" required>
      </li>
      <li>
        <label for="prodi">Prodi : </label>
        <input type="text" name="prodi" id="prodi" required>
      </li>
      <li>
        <label for="img">img : </label>
        <input type="text" name="img" id="img" required>
      </li>
      <li>
        <button type="submit" name="submit">Kirim</button>
      </li>
    </ul>
  </form>
</body>
</html>