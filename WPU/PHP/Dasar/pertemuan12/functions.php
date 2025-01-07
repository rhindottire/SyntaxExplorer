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

  function tambah($data) {
    global $conn;
    // htmlspecialchars untuk menghindari sql injection
    $NIM = htmlspecialchars($data["NIM"]);
    $nama = htmlspecialchars($data["nama"]);
    $email = htmlspecialchars($data["email"]);
    $prodi = htmlspecialchars($data["prodi"]);
    $img = htmlspecialchars($data["img"]);

    $query = "INSERT INTO mahasiswa VALUES
              ('', '$NIM', '$nama', '$email', '$prodi', '$img')";
    mysqli_query($conn, $query);
    return mysqli_affected_rows($conn);
  }

  function hapus($id) {
    global $conn;
    mysqli_query($conn, "DELETE FROM mahasiswa WHERE id = $id");
    return mysqli_affected_rows($conn);
  }

  function edit($data) {
    global $conn;
    // htmlspecialchars untuk menghindari sql injection
    $id = $data["id"];
    $NIM = htmlspecialchars($data["NIM"]);
    $nama = htmlspecialchars($data["nama"]);
    $email = htmlspecialchars($data["email"]);
    $prodi = htmlspecialchars($data["prodi"]);
    $img = htmlspecialchars($data["img"]);

    $query = "UPDATE mahasiswa SET
              NIM = '$NIM',
              nama = '$nama',
              email = '$email',
              prodi = '$prodi',
              img = '$img'
              WHERE ID = $id
              ";
    mysqli_query($conn, $query);
    return mysqli_affected_rows($conn);
  }

  function cari($keyword) {
    $query = "SELECT * FROM mahasiswa
              WHERE
              NIM LIKE '%$keyword%' OR
              nama LIKE '%$keyword%' OR
              email LIKE '%$keyword%' OR
              prodi LIKE '%$keyword%'
              ";
    return query($query);
  } // % = wildcard, mencari berdasarkan karakter
?>