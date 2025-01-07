<?php 
  // check apakah submit sudah di tekan atau belum
  if( isset($_POST["login"]) ) {
    if( $_POST["username"] == "admin" && $_POST["password"] == "123" ) {
      // redirect
      header("Location: admin.php");
      exit;
    } else {
      $error = true;
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
  <h1>login admin</h1>

  <?php if( isset($error) ) : ?>
    <p style="color: red; font-style: italic;">username / password salah!</p>
  <?php endif; ?>

  <ul>
    <form action="" method="post">
      <li>
        <label for="username">username :</label>
        <input type="text" name="username" id="username">
      </li>
      <li>
        <label>
          password :
          <input type="password" name="password" id="password">
        </label>
      </li>
      <li>
        <button type="submit" name="login">login</button>
      </li>
    </form>
  </ul>

</body>
</html>