<?php
    // Fungsi untuk menentukan salam berdasarkan waktu saat ini
    function greeting() {
        $hour = date("H");

        if ($hour >= 5 && $hour < 12) {
            $time = "Pagi";
        } elseif ($hour >= 12 && $hour < 15) {
            $time = "Siang";
        } elseif ($hour >= 15 && $hour < 18) {
            $time = "Sore";
        } else {
            $time = "Malam";
        }

        return "Selamat $time, ADMIN!";
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