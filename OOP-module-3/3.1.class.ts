{
  // ? Class

  class Animal {
    // public name: string;
    // public species: string;
    // public sound: string;

    // constructor(name: string, species: string, sound: string) {
    //   this.name = name;
    //   this.species = species;
    //   this.sound = sound;
    // }

    // * Parameter Properties

    constructor(public name: string, public species: string, public sound: string){

    }


    // * Method

    makeSound() {
      console.log(`The ${this.name} says ${this.sound}`);
    }
  }

// *   create instance

  const dog = new Animal("German shepard", "Dog", "Ghew Ghew");

  const cat = new Animal("Persian", "cat", "meaw meaw");

  cat.makeSound();
}
