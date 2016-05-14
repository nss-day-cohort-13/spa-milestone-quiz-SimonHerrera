var CarLot = (function (loadCars) {

  var inventory = [];

    var inventoryLoadRequest = new XMLHttpRequest();

    loadCars.getCarInventory = function () {
    return inventory;
    };

    loadCars.loadInventory = function(callback) {
      var carSpecs = JSON.parse(this.responseText);
      CarLot.updateDOM(carSpecs.cars);
      inventory = carSpecs.cars;
      console.log("test", inventory );
    };

  inventoryLoadRequest.addEventListener("load", loadCars.loadInventory)
  inventoryLoadRequest.open("GET", "/data/inventory.json");
  inventoryLoadRequest.send();

  return loadCars;

})(CarLot || {});
