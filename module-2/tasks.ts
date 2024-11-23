/*   =====Task 1: ===== Basic Data Types and First Program
 Objective: Write a TypeScript program that outputs a welcome message.

 Instructions:

 Create a TypeScript program.
 Print the following message to the console:
 Hello World, I will complete this course successfully and become a Next level Web Developer! */

const message: string =
  "Hello World, I will complete this course successfully and become a Next level Web Developer! ";

console.log(message); // Hello World, I will complete this course successfully and become a Next level Web Developer!

/* ====== Task 2=====: Functions, Optional, and Literal Types
Objective: Create a function with parameters and an optional literal type.

Instructions:

Define a function that takes:
name (string)
age (number)
role (optional, with type 'admin' | 'user' | 'guest')
The function should log these values or perform a basic action. */

type Role = "admin" | "user" | "guest";

//  Normal function with optional parameter
function userDetails(name: string, age: number, role?: Role): void {
  console.log(`Name: ${name}, Age: ${age}, Role: ${role}`);
}

// Arrow function with optional parameter

const userDetailsArrow = (name: string, age: number, role?: Role): void => {
  console.log(`Name: ${name}, Age: ${age}, Role: ${role}`);
};

userDetails("John", 30, "admin"); // Name: John, Age: 30, Role: admin
userDetailsArrow("John", 30, "admin"); // Name: John, Age: 30, Role: admin

{
  /* Task 3: Object Types, Type Alias, & Literal Types
Objective: Define a structured Person object using Type Aliases.

Instructions:

Define a Person type alias with properties for Name, Address, Hair and Eye Color, Income and Expense, Hobbies, Family Members, Job, Skills, Marital Status, and Friends. */

  type Person = {
    name: string;
    address: string;
    hairColor: string;
    eyeColor: string;
    income: number;
    expense: number;
    hobbies: string[];
    familyMembers: string[];
    job: string;
    skills: string[];
    maritalStatus: string;
    friends: string[];
  };

  const person: Person = {
    name: "John",
    address: "Dhaka",
    hairColor: "Black",
    eyeColor: "Brown",
    income: 50000,
    expense: 20000,
    hobbies: ["Reading", "Traveling"],
    familyMembers: ["Father", "Mother"],
    job: "Software Developer",
    skills: ["JavaScript", "TypeScript"],
    maritalStatus: "Single",
    friends: ["Alice", "Bob"],
  };
}

{
  /* Task 4: Union and Intersection Types
Objective: Create union and intersection types using interfaces.

Instructions:

Define interfaces Book and Magazine.
Create:
A type that is a union of Book and Magazine.
A type that is an intersection of Book and Magazine. */

  interface Book {
    title: string;
    pages: number;
    publisher?: string;
  }

  interface Magazine {
    title: string;
    pages: number;
    issue?: number;
  }

  type BookOrMagazine = Book | Magazine; // Union Type

  type BookAndMagazine = Book & Magazine; // Intersection Type

  const book: Book = {
    title: "TypeScript",
    pages: 300,
    publisher: "O'Reilly",
  };

  const magazine: Magazine = {
    title: "JavaScript Weekly",
    pages: 20,
    issue: 123,
  };
}

{
  /* Task 5: Function Type
Objective: Write a function that reverses a string.

Instructions:

Write a function reverseString that:
Takes a single string argument.
Returns the string in reverse order.
Example:
Input: "hello"
Output: "olleh" */

  function reverseString(str: string): string {
    return str.split("").reverse().join("");
  }

  console.log(reverseString("hello")); // olleh
}

{
  /* Task 6: Spread and Rest Operators, Destructuring
Objective: Write a function that uses the rest operator for variable-length arguments.

Instructions:

Create a function that takes multiple numeric arguments (using the rest operator) and returns the sum of all arguments. */

  function sum(...args: number[]): number {
    return args.reduce((acc, curr) => acc + curr, 0);
  }

  const total = sum(1, 2, 3, 4, 5);
  console.log(total); // 15
}

{
  /* Task 7: Type Assertion and Narrowing
Objective: Write a function that behaves differently based on the input type.

Instructions:

Create a function that accepts a parameter of type string | number.
The function should:
Return the length if the input is a string.
Return the square if the input is a number. */

  const calculate = (input: string | number): number => {
    if (typeof input === "string") {
      return input.length;
    } else {
      return input * input;
    }
  };

  console.log(calculate("hello")); // 5
  console.log(calculate(5)); // 25
}

{
  /* Task 8: Intersection Types
Objective: Practice using intersection types.

Instructions:

Create a type AdminUser that is an intersection of:
User with properties name and email
Admin with property adminLevel
Write a function describeAdmin(user: AdminUser): string that returns a description of the admin user. */

  type User = {
    name: string;
    email: string;
  };

  type Admin = {
    adminLevel: number;
  };

  type AdminUser = User & Admin;

  const describeAdmin = (user: AdminUser): string => {
    return `${user.name} is an admin with level ${user.adminLevel}`;
  };

  const adminUser: AdminUser = {
    name: "John",
    email: "aa@bb.com",
    adminLevel: 2,
  };

  console.log(describeAdmin(adminUser)); // John is an admin with level 2
}

{
  /* Task 9: Optional Chaining
Objective: Use optional chaining with nested objects.

Instructions:

Write a function getEmployeeCity(employee) that safely retrieves the city of an employee from a nested object using optional chaining. */

  type Employee = {
    name: string;
    address?: {
      city: string;
    };
  };

  const getEmployeeCity = (employee: Employee): string => {
    return employee.address?.city || "City not found";
  };

  const employee: Employee = {
    name: "John",
    address: {
      city: "Dhaka",
    },
  };

  console.log(getEmployeeCity(employee)); // Dhaka
}

{
  /* Task 10: Nullish Coalescing
Objective: Handle null and undefined values using nullish coalescing.

Instructions:

Write a function getDisplayName(name: string | null | undefined): string that returns "Anonymous" if name is null or undefined. */

  const getDisplayName = (name: string | null | undefined): string => {
    return name ?? "Anonymous";
  };

  console.log(getDisplayName("John")); // John
  console.log(getDisplayName(null)); // Anonymous
  console.log(getDisplayName(undefined)); // Anonymous
}

{
  /* Task 11: Unknown Type
Objective: Handle different types with the unknown type.

Instructions:

Write a function processData(data: unknown) that:
Checks if data is a string and returns the uppercased version.
If data is a number, returns the square of it.   
 */

  const processData = (data: unknown): string | number => {
    if (typeof data === "string") {
      return data.toUpperCase();
    } else if (typeof data === "number") {
      return data * data;
    }
    return "Invalid data";
  };

  console.log(processData("hello")); // HELLO
  console.log(processData(5)); // 25
}

{
  /* Task 12: Never Type
Objective: Use the never type for functions that don’t return.

Instructions:

Write a function handleError that:
Accepts a message: string.
Throws an error with the given message.
Use the never return type to indicate that this function never returns.
 */

  type customError = {
    message: string;
  };

  const handleError = (message: string): never => {
    throw new Error(message);
  };

  try {
    handleError("Something went wrong");
  } catch (error) {
    console.log((error as customError).message); // Something went wrong
  }
}

{
  /* Task 13: Generics with Functions and Interfaces
Objective: Use generics to handle different types.

Instructions:

Create a generic function that:
Accepts an array of any type.
Returns a new array with duplicate values removed. */

  const removeDuplicates = <T>(arr: T[]): T[] => {
    return [...new Set(arr)];
  };

  const numbers = removeDuplicates([1, 2, 3, 1, 2, 3]);
  console.log(numbers); // [1, 2, 3]
}

{
  /* Task 14: Asynchronous TypeScript and Type Aliases
Objective: Simulate an asynchronous operation with TypeScript.

Instructions:

Write an asynchronous function that:
Simulates fetching user data (containing name and age).
Returns the data after a short delay.  */

  type UserData = {
    name: string;
    age: number;
  };

  const fetchUserData = async (): Promise<UserData> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ name: "John", age: 30 });
      }, 1000);
    });

    const userData = await fetchUserData();
    console.log(userData); // { name: 'John', age: 30 }
  };
}

{
  /* Task 15: Type Guards
Objective: Create custom type guards for more accurate type checking.

Instructions:

Write a function isString(value: unknown): value is string that checks if a value is a string.
Use this in another function printUpperCase(value: unknown): void that prints the value in uppercase if it’s a string.
 */

  const isString = (value: unknown): value is string => {
    return typeof value === "string";
  };

  const printUpperCase = (value: unknown): void => {
    if (isString(value)) {
      console.log(value.toUpperCase());
    }
  };

  printUpperCase("hello"); // HELLO
}

{
  /* Task 16: Utility Types and Keyof Constraints
Objective: Access object properties dynamically using keyof.

Instructions:

Create a function that:
Takes an object and a key.
Returns the property value from the object based on the provided key.
Use keyof to constrain the key to valid properties of the object. */

  type User = {
    name: string;
    age: number;
  };

  const getProperty = <T, K extends keyof T>(obj: T, key: K): T[K] => {
    return obj[key];
  };

  const user: User = {
    name: "John",
    age: 30,
  };

  console.log(getProperty(user, "name")); // John
}
