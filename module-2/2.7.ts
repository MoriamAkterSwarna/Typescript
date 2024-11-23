{

    //? generic constraints with keyof 


    //? keyof T is a type that represents all possible keys of type T


    type Vehicle = {
        bike: string;
        car: string;
        ship: string;
    }
    type Owner = "bike" | "car" | "ship";

    type Owner2 = keyof Vehicle; // "bike" | "car" | "ship"

    const person : Owner = "car"
    const person1 : Owner2 = "car"



    // const user = {
    //     name: "John",
    //     age: 25,
    //     address: "Dhaka",
    // }

    // user.address ;  // Dhaka

    // user['address'] ; // Dhaka



    const getPropertyValue = <X, Y extends keyof X>(obj: X, key: Y) =>{

        return obj[key];

    }
     const user = {
        name: "John",
        age: 25,
        address: "Dhaka",
    }


    const result1 = getPropertyValue(user, 'name'); // John);



}