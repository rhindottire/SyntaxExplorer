<?php
    // ini adalah komentar
    // ini juga komentar
    /*
    ini komentar
    */

    // standart output
    // echo, print (untuk text dan variable)
    // print_r (untuk array)
    // var_dump (untuk melihat isi variable)

    // echo "Hello World";
    // echo "Fa'iz";
    // print 123;
    // print_r(true); // boolean true menghasilkan angka 1 dan false kosong
    // var_dump("Edho"); (string 4 panjang string)

    // penulisan syntax php
    // 1. PHP di dalam HTML
    // 2. HTML di dalam PHP

    // variable dan tipe data

    // variabel
    // tidak boleh diawali angka dan boleh mengandung angka
    $name = "Edho";
    // echo $name;
    // echo "Hallo, nama saya $name";
    // echo 'Hallo, nama saya $name'; // ini namanya interpolasi

    // opreator aritmatika
    // + - * / %
    $x = 10;
    $y = 5;
    // echo $x + $y;

    // concat atau penghubung string
    $nama_depan = "Ridho";
    $nama_belakang = "Fa'iz";
    $nama_lengkap = $nama_depan . " " . $nama_belakang;
    // echo $nama_lengkap;

    // assignment
    // =, +=, -=, *=, /=, %=, .=
    $x = 1;
    $x += 5;
    // echo $x;
    $nama = "Achmad";
    $nama .= " ";
    $nama .= "Ridho";
    // echo $nama;

    // perbandingan
    // <, >, <=, >=, ==, !=
    // == tidak mengecheck tipe data
    // identitas
    // ===, !== mengecheck tipe data
    // var_dump(10 === "10");

    // logika
    // && = dan, || = or, ! = not
    // var_dump(1 < 5 && 10 > 5);
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>Halo, Selamat datang <?php echo "$name" ?></h1>
    <p><?php echo "Ini adalah paragraf PHP di dalam html" ?></p>

    <!-- <?php
        echo "<h1>ini adalah html di dalam PHP</h1>";
    ?> -->
</body>
</html>