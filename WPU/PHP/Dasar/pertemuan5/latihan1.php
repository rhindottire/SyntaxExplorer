<?php 
    // array = variable yang dapat menampung lebih dari satu nilai
    // dapat memiliki tipe data yang berbeda
    // pasangan antara key dan value
    // key-nya adalah index, yang dimulai dari 0

    // membuat array (cara lama)
    // nilai yang ada di dalam array disebut element
    $hari = array("Senin", "Selasa", "Rabu", "Kamis", "Jumat");

    // membuat array (cara baru)
    $bulan = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"];

    // element pada array bisa dengan tipe data yang berbeda
    $myArray = [123, "string", false];

    // menampilkan semua element pada array
    // var_dump() / print_r()
    var_dump($hari);
    // view pages source
    /* 
    array dengan jumlah element 5
        array(5) {
            0 adalah index pertama dalam array
            berisi string jumlah character = 5
            tulisannya senin
            [0]=>
            string(5) "Senin"
            [1]=>
            string(6) "Selasa"
            [2]=>
            string(4) "Rabu"
            [3]=>
            string(5) "Kamis"
            [4]=>
            string(5) "Jumat"
        }
    */

    echo "<br>";

    print_r($bulan);
    // view pages source
    /* menampilkan array tanpa tipe data
        (
            [0] => Januari
            [1] => Februari
            [2] => Maret
            [3] => April
            [4] => Mei
            [5] => Juni
            [6] => Juli
            [7] => Agustus
            [8] => September
            [9] => Oktober
            [10] => November
            [11] => Desember
        )
    */

    echo "<br>";
    echo $myArray[0];
    echo "<br>";
    echo $bulan[10];
    echo "<br>";

    // menambahkan element kedalam array
    $hari[] = "Sabtu";
    $hari[] = "Minggu";
    var_dump($hari);
?>