<?php 
  // koneksi ke database
  // mysqli_connect("host", "username", "password", "database");
  $conn = mysqli_connect("localhost", "root", "", "php_dasar");

  function query($query) {
    global $conn;
    $result = mysqli_query($conn, $query);
    $rows = [];
    while( $row = mysqli_fetch_assoc($result) ) {
      $rows[] = $row;
    }
    return $rows;
  }
?>