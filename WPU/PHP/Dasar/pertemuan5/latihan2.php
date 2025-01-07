<?php 
    // pengulangan pada array
    // for / foreach
    $numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        .kotak {
            width: 50px;
            height: 50px;
            background-color: salmon;
            text-align: center;
            line-height: 50px;
            margin: 3px;
            float: left;
        }

        .clear {
            clear: both;
        }
    </style>
</head>
<body>
    <!-- count() adalah fungsi untuk menghitung array -->
    <?php for ( $i = 0; $i < count($numbers); $i++) { ?>
        <div class="kotak"><?php echo $numbers[$i]; ?></div>
    <?php } ?>

    <div class="clear"></div>

    <!-- foreach -->
    <!-- mengambil setiap  element array dan menyimpannya dalam variable lalu ditampilkan -->
    <!-- numbers = plural (jamak) dan number = singular (tunggal) -->
    <?php foreach ($numbers as $number) { ?>
        <div class="kotak"><?php echo $number; ?></div>
    <?php } ?>

    <div class="clear"></div>

    <?php foreach ($numbers as $number) : ?>
        <div class="kotak"><?= $number; ?></div>
    <?php endforeach; ?>
</body>
</html>