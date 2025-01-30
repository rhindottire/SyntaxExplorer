<?php

// Visibility

class Product {
  public $name, $price, $creator;
  private $discount = 0;

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

  public function setDiscount($discount) {
    $this->discount = $discount; // private
  }

  public function getDiscount() {
    return "Discount from {$this->price} : "
          . ($this->price * $this->discount / 100)
          . " ({$this->discount}%)";
  } // 50% or 0.5
}

class Song extends Product {
  protected $duration;

  public function __construct($name = "Default", $price = 0, $creator = "Unkown", $duration = "0:00") {
    parent::__construct($name, $price, $creator);
    $this->duration = $duration;
  }

  public function getProductDetail() {
    return "Song : " . parent::getProductDetail() . " - Duration: {$this->duration}";
  }

  public function getPrice() {
    return $this->price; // protected
  }

  // public function setDiscount() {
  //   return $this->discount; // can't access cause private
  // }
}

class Book extends Product {
  protected $page;

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
echo "<hr>";

// $product1->price = 100000; // public
// echo $product1->price; // public

echo $product1->setDiscount(50);
// echo $product1->getPrice();
echo $product1->getDiscount();
?>