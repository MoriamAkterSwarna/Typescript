{
    // ? Utility Types 

    // * Pick 

    type Person = {
        name: string;
        age: number;
        email?: string;
        contactNo: number; 
    }

    type Name = Pick<Person, "name">; // { name : string }
    type NameAge = Pick<Person, "name" | "age">; // { name : string, age : number }


    // * Omit

    type contactInfo = Omit<Person, "name" | "age">; // { email?: string; contactNo: number; }


    // * Required 

    type RequiredPerson = Required<Person>; // { name: string; age: number; email: string; contactNo: number; }


    // * Partial

    type PartialPerson = Partial<Person>; // { name?: string; age?: number; email?: string; contactNo?: number; }

    // * Readonly 

    type ReadonlyPerson = Readonly<Person>; // { readonly name: string; readonly age: number; readonly email?: string; readonly contactNo: number; }

    const person: ReadonlyPerson = { 
        name : "John",
        age : 20,
        email : "aa@bb.com ",
        contactNo : 123456789
    }

    // person.name = "Doe"; // Cannot assign to 'name' because it is a read-only property.


    // * Record

    type RecordPerson = Record<string, string>; 

    const recordPerson: RecordPerson = {
        name : "John",
        age : "20",
        email : " afla", 
        contactNo : "123456789",
        address : "Dhaka" , 
        country : "Bangladesh"
    }

    const EmptyObj : Record<string,unknown> = {}; 
    EmptyObj["name"] = "John"; // Property 'name' does not exist on type '{}'


    // * Exclude

    type A = number | string | boolean;
    type B = Exclude<A, boolean>; // number | string

    // * Extract

    type C = number | string | boolean;
    type D = Extract<C, boolean>; // boolean

    // * NonNullable

    type E = number | null | undefined;
    type F = NonNullable<E>; // number

    // * ReturnType

    function greet(): string {
        return "Hello";
    }

    type G = ReturnType<typeof greet>; // string

    // * InstanceType

    class PersonClass {
        name: string;
        age: number;

        constructor(name: string, age: number) {
            this.name = name;
            this.age = age;
        }
    }

    type H = InstanceType<typeof PersonClass>; // PersonClass

    // * Parameters

    function greetWithMessage(message: string): string {
        return message;
    }

    type I = Parameters<typeof greetWithMessage>; // [string]


    // * ThisType
    // * OmitThisParameter
    // * ConstructorParameters
    

}