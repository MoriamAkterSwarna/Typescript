// ? Basic Data Types

// ? ====== string =========
let firstName = 'John';  // type inference => implicitly typed

let lastName: string = 'Doe';  // type annotation => explicitly typed

// ? ========= number ========= 
let age = 25;   // type inference => implicitly typed
let weight : number = 75.5; // type annotation => explicitly typed

// ? ======= boolean =========

let isMarried = false;  // type inference => implicitly typed 
let isEmployed: boolean = true; // type annotation => explicitly typed 


// ? ======= undefined =========

let city; // type inference => implicitly typed 
let country: undefined = undefined; // type annotation => explicitly typed 


// ? ======= null =========

let state = null; // type inference => implicitly typed
let pincode: null = null; // type annotation => explicitly typed

// ? ======= any =========

let address; // type inference => implicitly typed

let phone: any = 1234567890; // type annotation => explicitly typed
let val : number = 488;
// val:number = phone; // no error 



// ? ======= Array =========


let fruits = ['Apple', 'Banana', 'Orange']; // type inference => implicitly typed

let vegetables: string[] = ['Carrot', 'Beans', 'Tomato']; // type annotation => explicitly typed

let numbers: number[] = [1, 2, 3, 4, 5]; // type annotation => explicitly typed 

numbers.push(6); // allowed
// numbers.push('6'); // error

// ? ======= Tuple =========

// tuple ==> array == > ordered collection of elements of different types  

let person: [string, number] = ['John', 25]; // type annotation => explicitly typed

// person = [25, 'John']; // error

let nm : [number, number, string] = [1, 2, 'John'];

nm.push(3); // allowed
nm.push('Doe'); // allowed
// nm[0] = "4"; // not allowed


