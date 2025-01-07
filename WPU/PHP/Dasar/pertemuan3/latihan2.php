<?php 
// pengkondisian / percabangan

// if else
$a = 10;
$b = 20;
if ($a == $b) {
    echo "Benar";
} else {
    echo "Salah";
}

// if else if else
$a = 30;
$b = 20;
if ($a == $b) {
    echo "Benar";
} elseif ($a > $b) {
    echo "A lebih besar dari B";
} else {
    echo "Salah";
}

// ternary
$a = 30;
$b = 20;
echo $a == $b ? "Benar" : "Salah";

// switch
$angka = 10;
switch ($angka) {
    case 1:
        echo "Satu";
        break;
    case 2:
        echo "Dua";
        break;
    case 3:
        echo "Tiga";
        break;
    default:
        echo "Tidak ada";
        break;
}
?>