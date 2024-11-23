{
    // ? Conditional types => 


    type A1 = number; 
    type A2 = string; 

    type x = A1 extends A2 ? true : false; // false
    type y = A2 extends A1 ? true : false; // false
    type z = A1 extends null ? true : false; // true
    type w = A2 extends undefined ? true : false; // true

    // type p = A1 extends null ?  true : A2 extends undefined ? undefined : any  // true
    type p = A1 extends null ?  true : A2 extends undefined ? undefined : any  //  any


    type Sheikh = {
        bike : string;
        car : string;
        ship : string;
        plane : string;

    }


    //  car ache ki na / bike ache ki na / ship ache ki na / tractor ache ki na 
    type CheckVehicle <T> = T extends keyof Sheikh ? true : false;

    type HasBike = CheckVehicle<"bike">; // true 
    type HasCar = CheckVehicle<"car">; // true
    type HasShip = CheckVehicle<"ship">; // true
    type HasTractor = CheckVehicle<"tractor">; // false
    type HasPlane = CheckVehicle<"plane">; // true
} 