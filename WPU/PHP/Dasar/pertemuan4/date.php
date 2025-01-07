<?php
    // https://www.php.net/manual/en/function.date.php
    echo date("l, d-M-Y");

    // UNIX timestamp / EPOCH time
    // detik yang sudah berlalu sejak 1 januari 1970
    // https://en.wikipedia.org/wiki/Unix_time
    echo time();

    // 100 hari kedepan
    echo date("l", time() + 60 * 60 * 24 * 100);

    // 100 hari sebelumnya
    echo date("d-M-Y", time() - 60 * 60 * 24 * 100);

    // mktime (membuat detik sendiri)
    // mktime (jam, menit, detik, bulan, tanggal, tahun)
    echo date("l", mktime(0, 0, 0, 11, 17, 2004));

    // strtotime
    echo date("l", strtotime("17 nov 2004"));
?>