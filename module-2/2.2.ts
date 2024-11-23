{
  // ? Interface  => It is a way to define a contract in your code. It defines the syntax for classes to follow. Classes that are derived from an interface must follow the structure provided by their interface. We can use it to define complex types like objects, functions, arrays, etc.

  interface User2 {
    name: string;
    age: number;
  }

  // const user2: User2 = {
  //     name: "John",
  //     age: 30
  // }

  interface UserWithRoll2 extends User2 {
    role: string;
  }
  const user2: UserWithRoll2 = {
    name: "John",
    age: 30,
    role: "Admin",
  };

  // ? Type alias => It is a way to provide a name to a type. It is similar to interfaces but can name primitives, unions, tuples, and any other types that you’d otherwise have to write by hand.

  type Roll = number; // type alias

  type UserWithRole1 = User1 & { role: string }; // type alias

  type User1 = {
    name: string;
    age: number;
  };

  // const user1: User1 = {
  //     name: "John",
  //     age: 30
  // }
  const user1: UserWithRole1 = {
    name: "John",
    age: 30,
    role: "Admin",
  };


//   ? Interface in Array 

  //    js --- > object , array --> object , function --- > object

  type RollNumber = number[]; // type alias

  const rollNumber: RollNumber = [1, 2, 3, 4, 5];

  interface Roll2 {
    [index: number]: number;
  }
  const roll2: Roll2 = [1, 2, 3, 4, 5];



  //? interface in Function

type Add = (n1: number, n2: number) => number; // type alias

  const Add : Add = (n1, n2) => {
    return n1 + n2;
  }



    interface Add2 {
        (n1: number, n2: number): number;
    }

    const Add2 : Add2 = (n1, n2) => {
        return n1 + n2;
    }
}
