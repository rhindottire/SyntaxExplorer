<?php
    // array di dalam array
    $students = [
        // ini adalah array numerik yang indexnya adalah angka
        ["ACHMAD RIDHO FA'IZ", 230411100197, "TEKNIK INFORMATIKA", "achmadaliridho46@gmail.com"],
        ["EDHO", 171104, "TEKNIK INFORMATIKA", "achmadaliridho99@gmail.com"],
        ["AIDA", "10-10-2010", "KEDOKTERAN", "sitisubaida10@gmail.com"],
    ]
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

    <?php foreach ($students as $student) : ?>
        <ul>
            <li>Name : <?= $student[0] ?></li>
            <li>N0 : <?= $student[1] ?></li>
            <li>Program Study : <?= $student[2] ?></li>
            <li>Email : <?= $student[3] ?></li>
        </ul>
    <?php endforeach; ?>
</body>
</html>