<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  <!-- jika action kosong maka data akan di kirimkan ke halaman sendiri -->
  <?php if( isset($_POST["submit"]) ) : ?>
    <h1>Selamat datang, <?= $_POST["name"]; ?>!</h1>
  <?php endif; ?>
  <form action="latihan4.php" method="post">
    masukan nama :
    <input type="text" name="name">
    <br>
    <button type="submit" name="submit">Kirim!</button>
  </form>
</body>
</html>