<?php 
  // check apakah tidak ada data di $_GET
  if( !isset($_GET["name"]) ||
    !isset($_GET["nim"]) ||
    !isset($_GET["email"]) ||
    !isset($_GET["program_study"])
    || !isset($_GET["gambar"]) ) {
    // redirect
    header("Location: latihan1.php");
    exit;
  }
?>

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
      <style>
        .student-image {
            width: 150px;
            height: 150px;
            object-fit: cover;
        }
    </style>
</head>
<body>
  <ul>
    <li><img src="img/<?= $_GET["gambar"]; ?>" alt="" class="student-image"></li>
    <li><?= $_GET["name"]; ?></li>
    <li><?= $_GET["nim"]; ?></li>
    <li><?= $_GET["email"]; ?></li>
    <li><?= $_GET["program_study"]; ?></li>
  </ul>

  <a href="latihan1.php">Kembali ke daftar mahasiswa</a>
</body>
</html>