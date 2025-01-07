<?php
    // variabel scope atau linkup variabel
    // variabel yang dideklarasikan di dalam fungsi hanya berlaku dalam fungsi

    /* $x = 10; // variabel lokal untuk halaman
    function tampilkan() {
        // global $x; // mencari variabel x di luar fungsi
        $x = 5; // variabel lokal untuk fungsi
        echo $x;
    }
    tampilkan();
    echo "<br>";
    echo $x; */

    // SUPERGLOBALS milik php bersifat array asosiatif
    // $_GET, $_POST, $_REQUEST, $_COOKIE, $_SESSION, $_SERVER, $_ENV
    // var_dump($_SERVER);
    // echo $_SERVER["SERVER_NAME"];

    // $_GET
    // $_GET["nama"] = "ACHMAD RIDHO FA'IZ";
    // $_GET["NIM"] = 230411100197;
    // var_dump($_GET);
    // cara lain untuk menambahkan data $_GET metode request
    // melalui url tambahkan ?nama=achmad ridho fa'iz&nim=230411100197
    // tambahkan & jika ingin menambahkan data di ikuti pasangan key dan value

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
            // "tugas" => [80, 90, 100]
        ]
    ];
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>Daftar Mahasiswa</h1>
    <ul>
        <?php foreach ($students as $student) : ?>
            <li>
                <a href="latihan2.php?name=<?= $student["name"]; ?>&nim=<?= $student["nim"]; ?>&email=<?= $student["email"]; ?>&program_study=<?= $student["program_study"]; ?>&gambar=<?= $student["gambar"]; ?>"><?= $student["name"]; ?></a>
            </li>
        <?php endforeach; ?>
    </ul>
</body>
</html>