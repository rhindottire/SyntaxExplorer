<?php
  session_start();
  if ( !isset($_SESSION["login"]) ) {
    header("Location: login.php");
    exit;
  }
  
  require 'functions.php';

  // ambil data di URL
  $id = $_GET["id"];
  // query data mahasiswa berdasarkan ID
  $mhs = query("SELECT * FROM mahasiswa WHERE ID = $id")[0];

  // check apakah tombol submit sudah di tekan atau belum
  if( isset($_POST["submit"]) ) {
    // var_dump($_POST);

    // cek apakah data berhasil diubah atau tidak
    if( edit($_POST) > 0 ) {
      echo "
        <script>
          alert('data berhasil diedit!');
          document.location.href = 'index.php';
        </script>
      ";
    } else {
      echo "
        <script>
          alert('data gagal diedit!');
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
  <h1>Edit Data Mahasiswa</h1>
  <form action="" method="post" enctype="multipart/form-data">
    <input type="hidden" name="id" value="<?= $mhs['ID'] ?>">
    <input type="hidden" name="imgLama" value="<?= $mhs['img'] ?>">
    <ul>
      <li>
        <label for="NIM">NIM : </label>
        <input type="text" name="NIM" id="NIM" required value="<?= $mhs['NIM'] ?>">
      </li>
      <li>
        <label for="nama">Nama : </label>
        <input type="text" name="nama" id="nama" required value="<?= $mhs['nama'] ?>">
      </li>
      <li>
        <label for="email">Email : </label>
        <input type="text" name="email" id="email" required value="<?= $mhs['email'] ?>">
      </li>
      <li>
        <label for="prodi">Prodi : </label>
        <input type="text" name="prodi" id="prodi" required value="<?= $mhs['prodi'] ?>">
      </li>
      <li>
        <label for="img">img : </label> <br>
        <img src="img/<?= $mhs['img'] ?>" alt="" width="40"> <br>
        <input type="file" name="img" id="img">
      </li>
      <li>
        <button type="submit" name="submit">Kirim</button>
      </li>
    </ul>
  </form>
</body>
</html>