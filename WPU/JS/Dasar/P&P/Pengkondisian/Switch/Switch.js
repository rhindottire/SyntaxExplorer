var hobies = prompt("Hobies : \n(Music, Podcast, Coding, Travel)");

switch (hobies) {
  case "Music":
  case "Podcast":
  case "Coding":
    alert("I like your hobies");
    break;
  case "Travel":
    alert("I don't like your hobies");
    break;
  default:
    alert("I don't know what is" + hobies );
}