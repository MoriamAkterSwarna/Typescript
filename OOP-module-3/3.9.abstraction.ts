{
  // ? Abstraction 2 ways 1. Interface 2. abstract

  //   * Using Interface

  interface Vehicle1 {
    startEngine(): void;
    stopEngine(): void;
    move(): void;
  }

  class Car1 implements Vehicle1 {
    startEngine(): void {
      console.log(`Starting the car engine`);
    }
    stopEngine(): void {
      console.log(`Stopping the car engine`);
    }
    move(): void {
      console.log(`Moving the car engine`);
    }

    test() {
      console.log(`Just Testing`);
    }
  }

  const toyota = new Car1();
  toyota.startEngine();

  //   * Using abstract class

  abstract class Car2 {
    abstract startEngine(): void;
    abstract stopEngine(): void;
    abstract move(): void;

    test() {
      console.log(`Just Testing`);
    }
  }

  class Honda extends Car2 {
    startEngine(): void {
      console.log(`Starting the Car engine`);
    }
    stopEngine(): void {
      console.log(`Stopping the car engine`);
    }
    move(): void {
      console.log(`Moving the car`);
    }
  }

  // const honda = new Car2();  // Error: Cannot create an instance of an abstract class.
  //   honda.startEngine();
}
