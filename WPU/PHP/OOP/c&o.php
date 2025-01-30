<?php

// Class and Object

class Human {
  // visibility or access modifier: { public, private, protected }
  // properties or data
  public $name;
  public $age;
  public $gender;
  public $height;
  public $weight;

  // methods or functions
  public function walk() {
    echo $this->name . ' is walking...';
  }
}

?>