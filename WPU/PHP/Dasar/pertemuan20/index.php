<?php
  session_start();
  if ( !isset($_SESSION["login"]) ) {
    header("Location: login.php");
    exit;
  }

  require "functions.php";
  // DESC = descending artinya mengurutkan dari yang terbesar
  // ASC = ascending artinya mengurutkan dari yang terkecil
  // $students = query ("SELECT * FROM mahasiswa ORDER BY ID DESC");
  $students = query ("SELECT * FROM mahasiswa");

  // cek apakah tombol cari di tekan
  if( isset($_POST["cari"]) ) {
    $students = cari($_POST["keyword"]);
  }
?>

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <style>
    .loader {
      width: 100px;
      position: absolute;
      top: 125px;
      left: 300px;
      z-index: -1;
      display: none;
    }
    @media print {
      .logout, .tambah, .form-cari, .aksi {
        display: none;
      }
    }
  </style>
  <script src="js/jQuery.js"></script>
  <script src="js/script.js"></script>
</head>
<body>
  <a href="logout.php" class="logout">Logout</a>
  <h1>DAFTAR MAHASISWA</h1>
  <a href="tambah.php" class="tambah">Tambah Data Mahasiswa</a>
  <br><br>
  <form action="" method="post" class="form-cari">
    <input id="keyword" type="text" name="keyword" size="30" autofocus placeholder="masukan keyword pencarian.." autocomplete="off">
    <button type="submit" name="cari" id="tombol-cari">Cari!</button>
    <img src="img/loader.gif" alt="" class="loader">
  </form>
  <br><br>
  <div id="container">
    <table border="1" cellpadding="10" cellspacing="0">
      <tr>
        <th>No.</th>
        <th class="aksi">Aksi</th>
        <th>IMG</th>
        <th>NIM</th>
        <th>Nama</th>
        <th>Email</th>
        <th>Prodi</th>
      </tr>
      
      <?php $no = 1; ?>
      <?php foreach ($students as $row) : ?>
      <tr>
        <td><?= $no++; ?></td>
        <td class="aksi">
          <a href="edit.php?id=<?= $row['ID']; ?>">Edit</a> |
          <a href="delete.php?id=<?= $row['ID']; ?>" onclick="return confirm('apakah anda yakin ingin menghapus data ini?')">Delete</a>
        </td>
        <td><img src="img/<?= $row["img"]; ?>" alt="img" width="50" height="50"></td>
        <td><?= $row["NIM"]; ?></td>
        <td><?= $row["nama"]; ?></td>
        <td><?= $row["email"]; ?></td>
        <td><?= $row["prodi"]; ?></td>
      </tr>
      <?php endforeach; ?>
    </table>
  </div>
</body>
</html>