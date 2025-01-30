<?php

// Static

class StaticExample {
  public static $number = 1;
  public static function sayHello() {
    return "Hello World! Ke-" . self::$number++;
  }
}
echo StaticExample::$number;
echo "<br>";
echo StaticExample::sayHello();
echo "<br>";
echo StaticExample::sayHello();
echo "<hr>";



class Contoh {
  // public $angka = 1;
  public static $angka = 1;
  public function halo() {
    // return "Halo " . $this->angka++ . " kali. <br>";
    return "Halo " . self::$angka++ . " kali <br>";
  }
}
$obj = new Contoh();
echo $obj->halo();
echo $obj->halo();
echo $obj->halo();
echo "<hr>";
$obj2 = new Contoh();
echo $obj2->halo();
echo $obj2->halo();
echo $obj2->halo();

?>