<?php

// Interface

interface InfoProduct {
  public function getProductDetail();
}

abstract class Product {
  protected $name, $price, $creator;
  private $discount = 0;

  public function __construct($name = "Default", $price = 0, $creator = "Unkown") {
    $this->name = $name;
    $this->price = $price;
    $this->creator = $creator;
  }

  abstract public function getLabel();

  public function setProperties($properties) {
    foreach ($properties as $key => $value) {
      if (property_exists($this, $key)) {
        $this->$key = $value;
      } else {
        return "Property not found";
      }
    }
  }

  public function getProperties($properties) {
    $data = [];
    foreach ($properties as $property) {
      if (property_exists($this, $property)) {
        $data[$property] = $this->$property;
      } else {
        $data[$property] = null;
      }
    }
    return $data;
  }

  public function getProperty($property) {
    if (property_exists($this, $property)) {
      return $this->$property;
    }
    return null;
  }

  public function setDiscount($discount) {
    $this->discount = $discount;
  }

  public function getDiscount() {
    return "Discount from {$this->price} : "
          . ($this->price * $this->discount / 100)
          . " ({$this->discount}%)";
  }
}

class Song extends Product implements InfoProduct {
  protected $duration;

  public function __construct($name = "Default", $price = 0, $creator = "Unkown", $duration = "0:00") {
    parent::__construct($name, $price, $creator);
    $this->duration = $duration;
  }

  public function getLabel() {
    return "$this->name, $this->creator | ( RP. $this->price )";
  }

  public function getProductDetail() {
    return "Song : " . parent::getLabel() . " - Duration: {$this->duration}";
  }
}

class Book extends Product implements InfoProduct {
  protected $page;

  public function __construct($name = "Default", $price = 0, $creator = "Unkown", $page = 0) {
    parent::__construct($name, $price, $creator);
    $this->page = $page;
  }

  public function getLabel() {
    return "$this->name, $this->creator | ( RP. $this->price )";
  }

  public function getProductDetail() {
    return "Book : " . parent::getLabel() . " - Page: {$this->page}";
  }
}

class PrintData {
  public $productList = array();

  public function addProduct(Product $product) {
    $this->productList[] = $product;
  }

  public function printData() {
    $result = "Product List : <br>";
    foreach ($this->productList as $product) {
      $result .= "- " . $product->getLabel() . "<br>";
    }
    return $result;
  }
}

$product1 = new Song("Bohemian Rhapsody", 50000, "Queen", "5:55");
$product2 = new Book("The Lord of the Rings", 200000, "J.R.R. Tolkien", 100);

$printData = new PrintData();
$products = [$product1, $product2];
foreach ($products as $product) {
  $printData->addProduct($product);
}
echo $printData->printData();
echo "<hr>";

?>