<?php

// Constant

define("AUTHOR", "Achmad Ridho Fa'iz");
echo AUTHOR;
echo "<br>";
const AGE = 20;
echo AGE;
echo "<hr>";

class Constant {
  // define("NAME", "Achmad Ridho Fa'iz"); // error
  const NAME = "Achmad Ridho Fa'iz";
}
echo Constant::NAME;
echo "<hr>";

echo __FILE__;
echo "<br>";
echo __DIR__;
echo "<br>";
echo __LINE__;
echo "<br>";

function namaFunction() {
  return __FUNCTION__;
}
echo namaFunction();
echo "<br>";

class namaClass {
  public $class = __CLASS__;
}
$obj = new namaClass();
echo $obj->class;
?>