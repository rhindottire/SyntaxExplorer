<?php
  require "functions.php";
  $students = query ("SELECT * FROM mahasiswa");
?>

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  <h1>DAFTAR MAHASISWA</h1>
  <table border="1" cellpadding="10" cellspacing="0">
    <tr>
      <th>No.</th>
      <th>Aksi</th>
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
      <td>
        <a href="edit.php">Edit</a> |
        <a href="delete.php">Delete</a>
      </td>
      <td><img src="img/<?= $row["img"]; ?>" alt="img" width="50" height="50"></td>
      <td><?= $row["NIM"]; ?></td>
      <td><?= $row["nama"]; ?></td>
      <td><?= $row["email"]; ?></td>
      <td><?= $row["prodi"]; ?></td>
    </tr>
    <?php endforeach; ?>
  </table>
</body>
</html>