module.exports = function(app){
  var mongoDs = app.dataSources.mongoDs;
    mongoDs.automigrate('Car', function(err) {
      var Car = app.models.Car;
      var date = new Date();
      Car.create([{
        location: '1234 Paradiso Lane',
        make: 'Toyota',
        model: 'Camry',
        year: '2020',
        type: 'Car',
        lastInspected: date
      }, {
        location: '1234 Paradiso Lane',
        make: 'Toyota',
        model: 'Tundra',
        year: '2020',
        type: 'Truck',
        lastInspected: date
      }, {
        location: '1234 Paradiso Lane',
        make: 'Toyota',
        model: 'Sequoia',
        year: '2020',
        type: 'SUV/Crossover',
        lastInspected: date
      }]);
    });

    console.log("Example cars created");
}
