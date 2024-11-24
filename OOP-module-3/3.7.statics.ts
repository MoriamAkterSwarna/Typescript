{
  // ? Static

  class Counter {
    // count: number = 0;
    static count: number = 0;

    static increment() {
      //   this.count = this.count + 1;
      return (Counter.count = Counter.count + 1);
    }
    static decrement() {
      //   this.count = this.count - 1;
      return (Counter.count = Counter.count - 1);
    }
  }

  console.log(Counter.increment());
  console.log(Counter.increment());
  console.log(Counter.decrement());

  //   const ins1 = new Counter();
  //   //    before using static
  //   console.log(ins1.increment()); // 1  --> different memory
  //   console.log(ins1.increment()); // 2  --> different memory
  //   console.log(ins1.increment()); // 3  --> different memory

  //   const ins2 = new Counter();

  //   console.log(ins2.increment()); // 1  --> different memory
  //   console.log(ins2.increment()); // 2  --> different memory

  //   //   after using static
  //   console.log(ins1.increment());   // 1
  //   console.log(ins1.increment()); // 2

  //   console.log(ins2.increment()); // 3
}
