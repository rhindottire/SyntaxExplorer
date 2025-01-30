<?php

// Inheritance and Overriding

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

  public function getProductDetail() {
    return "{$this->getlabel()} | ( RP. {$this->price} )";
  }
}

class Song extends Product {
  public $duration;

  public function __construct($name = "Default", $price = 0, $creator = "Unkown", $duration = "0:00") {
    parent::__construct($name, $price, $creator);
    $this->duration = $duration;
  }

  public function getProductDetail() {
    return "Song : " . parent::getProductDetail() . " - Duration: {$this->duration}";
  }
}

class Book extends Product {
  public $page;

  public function __construct($name = "Default", $price = 0, $creator = "Unkown", $page = 0) {
    parent::__construct($name, $price, $creator);
    $this->page = $page;
  }

  public function getProductDetail() {
    return "Book : " . parent::getProductDetail() . " - Page: {$this->page}";
  }
}

class PrintData {
  public function printData(Product $product) {
    return "{$product->getLabel()} | ( RP. {$product->price} )";
  }
}

$product1 = new Song("Bohemian Rhapsody", 50000, "Queen", "5:55");
$product2 = new Book("The Lord of the Rings", 200000, "J.R.R. Tolkien", 100);

echo $product1->getProductDetail();
echo "<br>";
echo $product2->getProductDetail();
?>