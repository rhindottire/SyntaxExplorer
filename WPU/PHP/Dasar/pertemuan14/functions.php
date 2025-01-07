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

  function upload() {
    $namaFile = $_FILES['img']['name'];
    $ukuranFile = $_FILES['img']['size'];
    $error = $_FILES['img']['error'];
    $tmpName = $_FILES['img']['tmp_name'];

    // cek apakah tidak ada gambar yang di upload
    if( $error === 4 ) {
        echo "<script>
                alert('pilih gambar terlebih dahulu!');
              </script>";
        return false;
    }

    // cek apakah yang di upload adalah gambar
    $ekstensiGambarValid = ['jpg', 'jpeg', 'png'];
    $ekstensiGambar = explode('.', $namaFile);
    // explode digunakan untuk memecah string menjadi array
    // file dodo.jpg = ['dodo', 'jpg']
    // '.' = delimiter atau pemisah
    $ekstensiGambar = strtolower(end($ekstensiGambar));
    // strtolower digunakan untuk mengubah semua karakter menjadi huruf kecil
    // end digunakan untuk mengambil elemen terakhir dari array
    // if ( !in_array(needle, haystack) )
    if( !in_array($ekstensiGambar, $ekstensiGambarValid) ) {
        echo "<script>
                alert('yang anda upload bukan gambar!');
              </script>";
        return false;
    }

    // cek jika ukurannya terlalu besar
    // ukuran 1mb = 1000000
    if( $ukuranFile > 1000000 ) {
        echo "<script>
                alert('ukuran gambar terlalu besar!');
              </script>";
        return false;
    }

    // lolos pengecekan, gambar siap di upload
    // generate nama gambar baru
    $namaFileBaru = uniqid();
    $namaFileBaru .= '.';
    $namaFileBaru .= $ekstensiGambar;
    move_uploaded_file($tmpName, 'img/' . $namaFileBaru);
    return $namaFileBaru;
  }

  function tambah($data) {
    global $conn;
    // htmlspecialchars untuk menghindari sql injection
    $NIM = htmlspecialchars($data["NIM"]);
    $nama = htmlspecialchars($data["nama"]);
    $email = htmlspecialchars($data["email"]);
    $prodi = htmlspecialchars($data["prodi"]);

    // upload gambar
    $img = upload();
    if( !$img ) {
      return false;
    }

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

    $imgLama = htmlspecialchars($data["imgLama"]);
    // cek apakah user pilih gambar baru atau gambar lama
    if( $_FILES['img']['error'] === 4 ) {
      $img = $data["imgLama"];
    } else {
      $img = upload();
    }

    $query = "UPDATE mahasiswa SET
              NIM = '$NIM',
              nama = '$nama',
              email = '$email',
              prodi = '$prodi',
              img = '$img'
              WHERE ID = $id";
    mysqli_query($conn, $query);
    return mysqli_affected_rows($conn);
  }

  function cari($keyword) {
    $query = "SELECT * FROM mahasiswa
              WHERE
              NIM LIKE '%$keyword%' OR
              nama LIKE '%$keyword%' OR
              email LIKE '%$keyword%' OR
              prodi LIKE '%$keyword%'";
    return query($query);
  } // % = wildcard, mencari berdasarkan karakter

  function registrasi($data) {
    global $conn;
    $username = strtolower(stripslashes($data["username"]));
    // strtolower() = mengubah semua karakter menjadi huruf kecil
    // stripslashes() = menghilangkan backslash
    $password = mysqli_real_escape_string($conn, $data["password"]);
    // mysqli_real_escape_string() = menghilangkan karakter khusus
    $password2 = mysqli_real_escape_string($conn, $data["password2"]);

    // cek username sudah ada atau belum
    $result = mysqli_query($conn, "SELECT username FROM user WHERE username = '$username'");
    if( mysqli_fetch_assoc($result) ) {
      echo "<script>
              alert('username sudah terdaftar!');
            </script>";
      return false;
    }
    
    // cek konfirmasi password
    if( $password !== $password2 ) {
      echo "<script>
              alert('konfirmasi password tidak sesuai!');
            </script>";
      return false;
    }
    // enkripsi password
    // $password = md5($password);
    // var_dump($password);
    // die;
    // hasil dari password 123 yang di hash md5 =
    // string(32) "202cb962ac59075b964b07152d234b70"
    // https://md5.gromweb.com/?md5=202cb962ac59075b964b07152d234b70
    $password = password_hash($password, PASSWORD_DEFAULT);
    // password_hash() = membuat password hash
    // PASSWORD_DEFAULT = algoritma yang digunakan untuk membuat password hash
    
    // tambahkan user baru ke database
    mysqli_query($conn, "INSERT INTO user VALUES('', '$username', '$password')");
    return mysqli_affected_rows($conn);
  }
?>