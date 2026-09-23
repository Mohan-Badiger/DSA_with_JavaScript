class Vehicle {
    constructor(speed, fuel) {

        this.speed = speed;
        this.fuel = fuel;

    }
    showDetails() {
        console.log(`Speed : ${this.speed} km/h, Fuel:${this.fuel}`);
    }
}

class Car extends Vehicle {
    drive() {
        console.log("Car is Driving");
    }
}

class Bike extends Vehicle {
    ride() {
        console.log("Driving Bike");

    }
}

const myCar = new Car(120, "Petrol");
const myBike = new Bike(100, "Petrol")

myCar.showDetails();
myCar.drive();


myBike.showDetails();
myBike.ride();