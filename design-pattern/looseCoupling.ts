class Vehicle {
    private engine: IEngine;
    constructor(engine: IEngine) {
        this.engine = engine;
    }
    start() {
        this.engine.start();
    }
}

interface IEngine {
    start(): void;
}

class CarEngine implements IEngine {
  start() {
    console.log("Engine started");
  }
}

class ElectricEngine implements IEngine {
  start() {
    console.log("Electric engine started");
  }
}

// Usage
const car = new Vehicle(new CarEngine());
car.start(); // Output: Engine started

const electricCar = new Vehicle(new ElectricEngine());
electricCar.start(); // Output: Electric engine started


