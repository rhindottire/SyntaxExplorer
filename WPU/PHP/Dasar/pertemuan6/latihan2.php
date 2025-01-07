<?php
    // array associative
    // key-nya adalah string yang kita buat sendiri
    $students = [
        [
            "name" => "ACHMAD RIDHO FA'IZ",
            "nim" => 230411100197,
            "email" => "achmadaliridho46@gmail.com",
            "program_study" => "Informatics Engineering",
            "gambar" => "RIDHO.jpg",
        ],
        [
            "name" => "DODO",
            "nim" => 171104,
            "email" => "achmadaliridho99@gmail.com",
            "program_study" => "Computer Science",
            "gambar" => "DODO.jpg",
            "tugas" => [80, 90, 100]
        ]
    ];
    // menampilkan element ke-1 di element students index tugas, nilai 100
    // echo $students[1]["tugas"][2];
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
    <h1>DAFTAR MAHASISWA</h1>

    <?php foreach($students as $student) : ?>
        <ul>
            <li>
                <img src="img/<?= $student["gambar"] ?>" alt="" class="student-image">
            </li>
            <li>Name : <?= $student["name"] ?></li>
            <li>NIM : <?= $student["nim"] ?></li>
            <li>Email : <?= $student["email"] ?></li>
            <li>Program Study : <?= $student["program_study"] ?></li>
        </ul>
    <?php endforeach ?>
</body>
</html>