<?php
// pengulangan

// for
// for (inisialisasi = titik awal, kondisi terminasi = titik akhir, increment/decrement = perubahan)
for ($i = 0; $i < 5; $i++) {
    echo "Perulangan for <br>";
}

// while
$i = 0;
while ($i < 5) {
    echo "Perulangan while <br>";
    $i++;
}

// do.. while
// dikerjakan atau di print 1 kali
$i = 0;
do {
    echo "Perulangan do.. while <br>";
    $i++;
} while ($i < 5);

// foreach = perulangan khusus array
$buah = ["apel", "jeruk", "mangga"];
foreach ($buah as $b) {
    echo "Buah : $b <br>";
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        .warna-baris {
            background-color: silver;
        }
    </style>
</head>
<body>
    <table border="1" cellpadding="10" cellspacing="0">
        <!-- <?php
            for ($i = 1; $i <= 3; $i++) {
                echo "<tr>";
                for ($j = 1; $j <= 5; $j++) {
                    echo "<td>$i, $j</td>";
                }
                echo "</tr>";
            }
        ?> -->
        <?php for ($i = 1; $i <= 5; $i++): ?>
            <tr class="<?= ($i % 2 == 1) ? 'warna-baris' : ''; ?>">
                <?php for ($j = 1; $j <= 5; $j++): ?>
                    <td><?= "$i, $j"; ?></td>
                    <!-- ?= adalah ?php echo -->
                <?php endfor; ?>
            </tr>   
        <?php endfor; ?>
    </table>
</body>
</html>