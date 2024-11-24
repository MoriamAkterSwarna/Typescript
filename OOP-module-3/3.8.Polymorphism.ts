{
  // ? Polymorphism

  class Person {
    getSleep() {
      console.log(`We need to sleep 8 hours per day `);
    }
  }

  class Student extends Person {
    getSleep(): void {
      console.log(`Student need to sleep for 6 hours a day`);
    }
  }

  class Developer extends Person {
    getSleep(): void {
      console.log(`Developer need to sleep for 7 hours per day`);
    }
  }

  const getSleepHours = (param: Person) => {
    param.getSleep();
  };

  const p1 = new Person();
  const st1 = new Student();

  const dv1 = new Developer();

  getSleepHours(p1);
  getSleepHours(st1);
  getSleepHours(dv1);

  class Shape {
    getArea(): number {
      return 0;
    }
  }

  //*   pi * r * r

  class Circle extends Shape {
    radius: number;
    constructor(radius: number) {
      super();
      this.radius = radius;
    }

    getArea(): number {
      return Math.PI * this.radius * this.radius;
    }
  }
// *   height * width
  class Rectangle extends Shape {
    height: number;
    width: number;
    constructor(height: number, width: number) {
      super();
      this.height = height;
      this.width = width;
    }

    getArea(): number {
      return this.height * this.width;
    }
  }


  const getShapeArea = (param: Shape) => {
    console.log(param.getArea()); 
  }

  const s1 = new Shape();
  const c = new Circle(10); 
  const r  = new Rectangle(10, 20);


  getShapeArea(r)
  getShapeArea(c)
  getShapeArea(s1)
}
