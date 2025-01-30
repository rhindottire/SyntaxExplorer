<?php

// Constructor

class Product {
  public $name, $price, $creator;

  public function __construct($name = "Default", $price = 0, $creator = "Unkown") // magic method
  {
    $this->name = $name;
    $this->price = $price;
    $this->creator = $creator;
  }

  public function getlabel() {
    return "$this->name, $this->price <br>";
  }
}

$movie = new Product("The Shawshank Redemption", 100000, "Frank Darabont");
$song = new Product("Bohemian Rhapsody", 50000, "Queen");
$game = new Product(); // default value
var_dump($game);

echo $movie->getlabel();
echo "Song : " . $song->getlabel();
?>