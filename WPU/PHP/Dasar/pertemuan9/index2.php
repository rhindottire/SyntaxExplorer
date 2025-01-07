<?php 
  // koneksi ke database
  // mysqli_connect("host", "username", "password", "database");
  $conn = mysqli_connect("localhost", "root", "", "php_dasar");

  // ambil data
  // mysqli_query("connection", "query ");
  // syntax sql ditulis dengan huruf besar
  $result = mysqli_query($conn, "SELECT * FROM mahasiswa");

  // var_dump($result); // untuk mengecek data dan jika salah akan mereturn bool(false)
  /*
    object(mysqli_result)#2 (5) artinya 5 data dalam tabel
    { ["current_field"]=> int(0) ["field_count"]=> int(6) artinya jumlah field
    ["lengths"]=> NULL ["num_rows"]=> int(5) artinya jumlah data atau rows
    ["type"]=> int(0) }
  */

  // cek apakah ada error
  // if ( !$result ) {
  //   echo mysqli_error($conn);
  // }

  // ambil data (fetch) dari object result
  /* 4 cara untuk mengambil data (INDEX DIMULAI DARI 0)
    mysqli_fetch_row() mengembalikan array numeric
    mysqli_fetch_assoc() mengembalikan array associative
    mysqli_fetch_array() mengembalikan keduanya
    mysqli_fetch_object() mengembalikan object
  */

  // while ($mhs = mysqli_fetch_assoc($result)) {
  //   var_dump($mhs);
  // }
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
    <?php while ($row = mysqli_fetch_assoc($result)) : ?>
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
    <?php endwhile; ?>
  </table>
</body>
</html>