var CarLot = (function (loadCars) {
  var userInput = document.getElementById('user-input');

  //Changes card border thickness and background color
  loadCars.changeCardAttr = function (clickEvent) {
  clickEvent.classList.add("card-change"); //add class
  };

  //Blanks the User Input and then sets focus on that input box
  loadCars.setFocus = function () {
    userInput.value = "";
    userInput.focus();
  };

  //changes back to initial load border thickness and bgcolor
  loadCars.resetCard = function (clickEvent) {
    var cards = document.querySelectorAll('.card-style');
      for (i = 0; i < cards.length; i++) {
        cards[i].classList.remove("card-change");
      };
  };

  return loadCars;

})(CarLot || {});
