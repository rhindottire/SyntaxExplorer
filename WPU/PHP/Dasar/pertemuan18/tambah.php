<?php
  session_start();
  if ( !isset($_SESSION["login"]) ) {
    header("Location: login.php");
    exit;
  }
  
  require 'functions.php';
  // check apakah tombol submit sudah di tekan atau belum
  if( isset($_POST["submit"]) ) {

    // var_dump($_POST);
    // var_dump($_FILES);
    // die;
    // array(5) {
    //   ["NIM"]=>
    //   string(1) "1"
    //   ["nama"]=>
    //   string(1) "1"
    //   ["email"]=>
    //   string(1) "1"
    //   ["prodi"]=>
    //   string(1) "1"
    //   ["submit"]=>
    //   string(0) ""
    // }
    // array(1) {
    //   ["img"]=>
    //   array(6) {
    //     ["name"]=>
    //     string(19) "Screenshot (60).png" === ini adalah nama file
    //     ["full_path"]=>
    //     string(19) "Screenshot (60).png" === ini adalah path file
    //     ["type"]=>
    //     string(9) "image/png" === ini adalah tipe file
    //     ["tmp_name"]=>
    //     string(28) "D:\App\XAMPP\tmp\phpB048.tmp" === ini adalah tempat file sementara
    //     ["error"]=>
    //     int(0) === jika 0 berarti tidak ada error
    //     ["size"]=>
    //     int(3307142) === ukuran file
    //   }
    // }
    
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
  <form action="" method="post" enctype="multipart/form-data">
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
        <input type="file" name="img" id="img">
      </li>
      <li>
        <button type="submit" name="submit">Kirim</button>
      </li>
    </ul>
  </form>
</body>
</html>