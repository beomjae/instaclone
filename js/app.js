// var weaponsList = ["AK-47", "Gun", "Machete", "Knife"];
// var countries = ["Korea", "Japan", "Greece", "Colombia"];
//
// var soldier = {
//   name: "Nicolas",
//   weapon: weaponsList[2],
//   country: countries[3],
//   isDead: false,
//   shoot: function() {
//     console.log("Pew pew pew");
//   },
//   sayHi: function(sargent) {
//     console.log("Hello " + sargent + " my name is " + this.name);
//   }
// };
//
// function multiply(chicken, potato) {
//   return chicken * potato;
// }
//
// function division(lala, lolo) {
//   return lala / lolo;
// }
//
// var age = prompt("How old are you?");
//
// if(age < 18) {
//   console.log("You can't drink");
// } else if (age > 18 && age < 45) {
//   console.log("You're and adult");
// } else {
//   console.log("You are getting old");
// }

$(document).ready(function() {
  var $heart = $(".heart");
  var $comment = $(".comment");
  var $profileIcon = $(".profile__icon");
  var $profileOverlayCloseButton = $(".profileOverlay i");
  var $profileOverlayCancelMenu = $("#profileOverlay-cancel");

  $heart.click(function(){
    $(this).toggleClass("fa-heart-o");
    $(this).toggleClass("fa-heart heart-click");
  });

  $comment.click(function(){
    $(this).toggleClass("fa-comment-o");
    $(this).toggleClass("fa-comment comment-click");
  });

  $profileIcon.click(function(){
    $(".profileOverlay").fadeIn();
  });

  $profileOverlayCloseButton.click(function() {
    $(".profileOverlay").fadeOut();
  });

  $profileOverlayCancelMenu.click(function(){
    $(".profileOverlay").fadeOut();
  });



});
