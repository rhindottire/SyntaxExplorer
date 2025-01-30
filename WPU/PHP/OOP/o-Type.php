<?php

// Object Type

class Product {
  public $name, $price, $creator;

  public function __construct($name = "Default", $price = 0, $creator = "Unkown") {
    $this->name = $name;
    $this->price = $price;
    $this->creator = $creator;
  }

  public function getlabel() {
    return "$this->name, $this->creator";
  }
}

class PrintData {
  public function printData(Product $product) {
    return "{$product->getLabel()} | ( RP. {$product->price} )";
  }
}

$song = new Product("Bohemian Rhapsody", 50000, "Queen");
$book = new Product("The Lord of the Rings", 200000, "J.R.R. Tolkien");

echo "Song : " . $song->getlabel();
echo "<br>";
echo "Book : " . $book->getlabel();
echo "<br>";

$printData = new PrintData();
echo $printData->printData($song);
echo "<br>";
// echo $printData->printData("this parameter is'nt instance of Product"); // error
?>