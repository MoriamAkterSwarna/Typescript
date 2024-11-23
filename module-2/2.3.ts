{
  // ? Generic Types

  // ? Generic types are a way to create reusable components.

  type GenericArray<T> = Array<T>; // type alias

  // const rollNumbers: number[] = [1, 2, 3, 4, 5];
  // const rollNumbers: Array<number> = [1, 2, 3, 4, 5];
  const rollNumbers: GenericArray<number> = [1, 2, 3, 4, 5];

  // const mentors: string[] = ["John", "Doe", "Jane"];
  // const mentors: Array<string> = ["John", "Doe", "Jane"];
  const mentors: GenericArray<string> = ["John", "Doe", "Jane"];

  // const bools: boolean[] = [true, false, true];
  // const bools: Array<boolean>= [true, false, true];
  const bools: GenericArray<boolean> = [true, false, true];

  //   ? Generic Array of Object

  const user: GenericArray<{ name: string; age: number; role: string }> = [
    {
      name: "John",
      age: 30,
      role: "Admin",
    },
    {
      name: "Jane",
      age: 25,
      role: "User",
    },
    {
      name: "Doe",
      age: 35,
      role: "Admin",
    },
  ];

  const add = (n1: number, n2: number): number => {
    return n1 + n2;
  };

  //   ? Generic Tuple
  type GenericTuple<X, Y> = [X, Y]; // type alias

  const manush: GenericTuple<string, string> = ["mr, x", "mr. y"];

  const userId: GenericTuple<number, { name: string; email: string }> = [
    123,
    { name: "John", email: "john@gmail.com " },
  ];
}
