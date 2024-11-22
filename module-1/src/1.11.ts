{

    // ? Ternary Operator

    const age: number = 25; 

    // if(age >= 18) {
    //     console.log('You are eligible to vote');
    // } 
    // else {
    //     console.log('You are not eligible to vote');
    // }

    age >= 18 ?  console.log(' Adult ' ): console.log(' Not Adult ');

    // ? Optional Chaining Operator 


    type User = {
        name: string;
        address: {
            city: string;
            road: string;

            presentAddress : string;
            permanentAddress ?: string;

        }
    }

    const user: User = {
        name: 'John Doe',
        address: {
            city: 'Dhaka',
            road: 'Farmgate',
            presentAddress: 'Dhaka, Bangladesh'
        }
    }

    const permanentAddress = user?.address?.permanentAddress  ?? 'Not Available'; 

    // console.log({permanentAddress}); // error

    console.log(permanentAddress); // Not Available




    /* The `Nullish Coalescing Operator` (`??`) is used to provide a default value for a variable if
    the variable is `null` or `undefined`. It is helpful when you want to assign a default value
    only if the variable is `null` or `undefined`, but not for other falsy values like `0`, `false`,
    or an empty string. */
    // ? Nullish Coalescing Operator   => 


    // const isAuthenticated = null; 
    // const isAuthenticated = undefined;
    const isAuthenticated = "";

    const rest1 = isAuthenticated ?? 'Guest'; 
    const res2 = isAuthenticated ? isAuthenticated : 'Guest';


    console.log(rest1); // Guest
    console.log(res2); // Guest




}