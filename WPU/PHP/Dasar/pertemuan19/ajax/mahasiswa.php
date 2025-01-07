<?php

require '../functions.php';
$key = $_GET["keyword"];
$query = "SELECT * FROM mahasiswa
            WHERE
          NIM LIKE '%$key%' OR
          nama LIKE '%$key%' OR
          email LIKE '%$key%' OR
          prodi LIKE '%$key%'
          ";
$students = query("$query");
// var_dump($students);

?>

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