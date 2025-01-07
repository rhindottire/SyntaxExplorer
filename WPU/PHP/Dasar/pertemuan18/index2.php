<?php
session_start();
if (!isset($_SESSION["login"])) {
    header("Location: login.php");
    exit;
}

require "functions.php";
// pagination

// konfigurasi
$jumlahDataPerHalaman = 2;
// $result = mysqli_query($conn, "SELECT * FROM mahasiswa");
// $jumlaData = mysqli_num_rows($result);

// Get search keyword if set
$keyword = isset($_POST["keyword"]) ? $_POST["keyword"] : '';

// Count total data
if ($keyword) {
    // Count data with search keyword
    $query = "SELECT * FROM mahasiswa WHERE nama LIKE '%$keyword%' OR NIM LIKE '%$keyword%'";
    $jumlaData = count(query($query));
} else {
    // Count all data
    $jumlaData = count(query("SELECT * FROM mahasiswa"));
}

$jumlaHalaman = ceil($jumlaData / $jumlahDataPerHalaman);
// round() membulatkan bilangan desimal ke angka terdekat
// floor() membulatkan ke bawah
// ceil() membulatkan ke atas

// if ( isset($_GET["halaman"]) ) {
//   $halamanAktif = $_GET["halaman"];
// } else {
//   $halamanAktif = 1;
// }
$halamanAktif = isset($_GET["halaman"]) ? (int)$_GET["halaman"] : 1;

// formula pagenation
$awalData = ($jumlahDataPerHalaman * $halamanAktif) - $jumlahDataPerHalaman;
// halaman = 1, awalData = 0
// halaman = 2, awalData = 2
// halaman = 3, awalData = 4

// DESC = descending artinya mengurutkan dari yang terbesar
// ASC = ascending artinya mengurutkan dari yang terkecil
// $students = query ("SELECT * FROM mahasiswa ORDER BY ID DESC");

// Adjust query based on whether a search was performed
if ($keyword) {
    $students = cari($keyword);
} else {
    $students = query("SELECT * FROM mahasiswa LIMIT $awalData, $jumlahDataPerHalaman");
}
// LIMIT 0, 2 artinya limit dari index 0 dari data sampai 2

// cek apakah tombol cari di tekan
if (isset($_POST["cari"])) {
    $students = cari($_POST["keyword"]);
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

<a href="logout.php">Logout</a>
<h1>DAFTAR MAHASISWA</h1>
<a href="tambah.php">Tambah Data Mahasiswa</a>
<br><br>

<form action="" method="post">
    <input type="text" name="keyword" size="30" autofocus placeholder="masukan keyword pencarian.." autocomplete="off" value="<?= htmlspecialchars($keyword); ?>">
    <button type="submit" name="cari">Cari!</button>
</form>
<br>

<!-- navigasi -->
<?php if ($halamanAktif > 1) : ?>
    <a href="?halaman=<?= $halamanAktif - 1; ?><?= $keyword ? '&keyword=' . urlencode($keyword) : ''; ?>">&laquo;</a>
<?php endif; ?>

<?php for ($i = 1; $i <= $jumlaHalaman; $i++) : ?>
    <a href="?halaman=<?= $i; ?><?= $keyword ? '&keyword=' . urlencode($keyword) : ''; ?>" <?= $i == $halamanAktif ? 'style="font-weight: bold; color: red;"' : ''; ?>><?= $i; ?></a>
<?php endfor; ?>

<?php if ($halamanAktif < $jumlaHalaman) : ?>
    <a href="?halaman=<?= $halamanAktif + 1; ?><?= $keyword ? '&keyword=' . urlencode($keyword) : ''; ?>">&raquo;</a>
<?php endif; ?>

<br><br>
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
    
    <?php $no = $awalData + 1; ?>
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
</body>
</html>