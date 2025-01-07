<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        .kotak {
            width: 60px;
            height: 60px;
            background-color: green;
            text-align: center;
            line-height: 60px;
            color: white;
            margin: 3px;
            float: left;
            transition: 1s;
        }
        .kotak:hover {
            transform: rotate(360deg);
            border-radius: 50%;
        }
    </style>
</head>
<body>
    <?php
        // array mulidimensi
        // memiliki 3 element 
        $numbers = [
            [1, 2, 3],
            [4, 5, 6],
            [7, 8, 9]
        ];
        // echo $numbers[2][2]; // mencetak element ke 2 dari array dan index ke 2
    ?>

    <?php foreach ($numbers as $number) : ?>
        <?php foreach ($number as $i) : ?>
            <div class="kotak"><?= $i ?></div>
        <?php endforeach; ?>
        <div style="clear: both;"></div>
    <?php endforeach; ?>
</body>
</html>