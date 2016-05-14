var CarLot = (function (loadCars) {

  var buildCards = document.getElementById("build-cards");
  var initBorderColor = document.getElementsByClassName("card-style");
  var userInput = document.getElementById('user-input');
  var availableUpdate = document.getElementById('user-button');

  // Loop over the inventory and populate the page
  loadCars.updateDOM = function(inventory) {
    for(i = 0; i < inventory.length; i++) {
      buildCards.innerHTML += ``
      + `<article class="col-md-4 card-style"  id="Card-Id"  >`
      + `<h2>${inventory[i].make} ${inventory[i].model}</h2>`
      + `<h4>Year: ${inventory[i].year}</h4>`
      + `<h4>Color: ${inventory[i].color}</h4>`
      + `<h4>Price: $${inventory[i].price}</h4>`
      + `<h5 class="description">${inventory[i].description}</h5>`
      + `<h3>Car Still Available: ${inventory[i].available}</h3>`
      + `<img class='pics' src = "${inventory[i].url}"`
      + `</article>`;
    };

    //Loop to apply the color from the inventory json description to the border
    for(j = 0; j < initBorderColor.length; j++) {
    initBorderColor[j].style.borderColor = `${inventory[j].color}`;
    };
    loadCars.activateEvents();
  };

  // Establishes all the event listeners
  loadCars.activateEvents = function(listeners) {
    var activeCard;
    for(i = 0; i < initBorderColor.length; i++) {
      initBorderColor[i].addEventListener("click", function(event) {
        activeCard = event.currentTarget;
        CarLot.resetCard();
        CarLot.changeCardAttr(event.currentTarget);
        CarLot.setFocus();
      });
    };

    //Listens for 'keyup' and replaces description on the DOM with keystrokes
    userInput.addEventListener('keyup', function(event) {
      activeCard.querySelector("h5").innerHTML = userInput.value;
    });

    //Listens for 'click' and changes availability text on DOM
    availableUpdate.addEventListener('click', function(event) {
    activeCard.querySelector("h3").innerHTML = "Car No Longer Available";
    CarLot.setFocus();
    });
  };

  return loadCars;

})(CarLot || {});
