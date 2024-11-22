
// ?  Reference Type 

// ? ==== Object Reference Type ==== 


const user : {
    fName: string;
    mName?: string;   // optional property
    lName: string;
    isMarried: boolean;
    // company: string;
    readonly company: string;
    // company: 'Programming Hero';  // literal type  => fixed value 
} = {
    fName: 'John',
    // mName: 'Doe',
    lName: 'Smith',
    isMarried: true,
    // company: 'Programming Hero fafa' // error
    company: 'Programming Hero'
}

// user.company ="PH"; // allowed when company is not readonly 
