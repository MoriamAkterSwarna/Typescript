{
  // ? Inheritance

  class Person {
    name: string;
    age: number;
    address: string;

    constructor(name: string, age: number, address: string) {
      this.name = name;
      this.age = age;
      this.address = address;
    }

    getSleep(numberOfHours: number) {
      console.log(`${this.name} will sleep for ${numberOfHours}`);
    }
  }

  class Student extends Person {
    // name: string;
    // age: number;
    // address: string;

    // constructor(name: string, age: number, address: string) {
    //   this.name = name;
    //   this.age = age;
    //   this.address = address;
    // }

    // getSleep(numberOfHours: number) {
    //   console.log(`${this.name} will sleep for ${numberOfHours}`);
    // }

    constructor( name: string, age: number, address: string) {
        super(name, age, address);
    }
  }

  class Teacher extends Person {
    // name: string;
    // age: number;
    // address: string;
    designation: string;

    constructor(
      name: string,
      age: number,
      address: string,
      designation: string
    ) {
     /*  this.name = name;
      this.age = age;
      this.address = address; */
      super(name, age, address)
      this.designation = designation;
    }

    // getSleep(numberOfHours: number) {
    //   console.log(`${this.name} will sleep for ${numberOfHours}`);
    // }

    takeClass(numberOfClass: number) {
      console.log(`${this.name} will take ${numberOfClass}`);
    }
  }

  const student1 = new Student("Mr. X", 20, "Uganda");

  const teacher1 = new Teacher("Mr. Y", 28, "Uganda", "Assistant Lecturer");

  
}
