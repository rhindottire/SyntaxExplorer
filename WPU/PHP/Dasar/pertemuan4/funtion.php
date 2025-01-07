<?php
    // parameter default jika tidak diisi
    function greeting($time = "datang,", $name = "ADMIN!") {
        return "Selamat $time $name!";
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
    <h1><?= greeting(); ?></h1>
</body>
</html>