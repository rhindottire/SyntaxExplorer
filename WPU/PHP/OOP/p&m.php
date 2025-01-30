<?php

// Properties and Methods

class Product {
  // public $name;
  // public $price;
  // public $creator;

  public $name = 'default name',
         $price = 0,
         $creator;

  // public function sayHello() {
  //   return "Hello World!";
  // }

  public function getlabel() {
    return "$this->name, $this->price <br>";
  }
}

$game = new Product();
$game->name = 'Final Fantasy VII Remake';
// var_dump($game);

$book = new Product();
$book->name = 'The Lord of the Rings';
// $book->addNewProperty = 'new property'; // dynamic property
// var_dump($book->name);

$movie = new Product();
$movie->name = 'The Shawshank Redemption';
$movie->price = 100000;
$movie->creator = 'Frank Darabont';
// var_dump($movie);

echo "Movie: $movie->name, Price: $movie->price, Creator: $movie->creator <br>";
// echo $movie->sayHello();
echo $movie->getlabel();

$song = new Product();
$song->name = 'Bohemian Rhapsody';
$song->price = 50000;
$song->creator = 'Queen';
echo "Song " . $song->getlabel();
?>