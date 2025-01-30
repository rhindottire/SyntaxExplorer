<?php

// Setter & Getter

class Product {
  private $name, $price, $creator, $discount = 0;

  public function __construct($name = "Default", $price = 0, $creator = "Unkown") {
    $this->name = $name;
    $this->price = $price;
    $this->creator = $creator;
  }

  public function setName($name) {
    $this->name = $name;
  }

  public function getName() {
    return $this->name;
  }

  public function setPrice($price) {
    $this->price = $price;
  }

  public function getPrice() {
    return $this->price;
  }

  public function setCreator($creator) {
    $this->creator = $creator;
  }

  public function getCreator() {
    return $this->creator;
  }

  public function setDiscount($discount) {
    $this->discount = $discount;
  }

  public function getDiscount() {
    return "Discount from {$this->price} : "
          . ($this->price * $this->discount / 100)
          . " ({$this->discount}%)";
  }

  public function getlabel() {
    return "$this->name, $this->creator";
  }

  public function getProductDetail() {
    return "{$this->getlabel()} | ( RP. {$this->price} )";
  }
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

echo $product1->setDiscount(50);
echo $product1->getDiscount();
echo "<hr>";

// echo $product1->name = "New Name"; // error cause protected
echo $product1->getName();
echo "<br>";
echo $product1->setName("New Name");
echo $product1->getName();
echo "<hr>";

?>