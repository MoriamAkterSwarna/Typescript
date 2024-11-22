{
    // ? Union Type 

    type FrontEndDev = 'fakibazDeveloper' | 'Junior Developer';  // string literal type 

    type FullStackDev = 'frontendDeveloper'  | 'Senior Developer'; // string literal type

    const newDev : FrontEndDev = 'fakibazDeveloper'; // allowed  

    type Dev = FrontEndDev | FullStackDev; // union type 

    const newDev2 : Dev = 'Senior Developer'; // allowed

    type User = {
        name: string;
        email: string;
        gender: 'male' | 'female'; // string literal type   
        bloodGroup: 'A+' | 'A-' | 'B+' | 'B-' | 'AB+' | 'AB-' | 'O+' | 'O-'; // string literal type 

    }

    const newUser : User = {
        name: 'John Doe',
        email: 'john.doe@example', 
        gender: 'male', 
        bloodGroup: 'A+'
    };



    // ? Intersection Type


    type FrontEndDev2 = {
        skills: string[];
        designations1: 'Frontend Dev' ;
        
    };
    
    type BackEndDev = {
        skills: string[];
        designations2: 'Backend Dev';
    };

    type FullStackDev2 = FrontEndDev2 & BackEndDev; // intersection type

    const newDev3 : FullStackDev2 = {
        skills: ['HTML', 'CSS', 'JavaScript', 'React', 'NodeJS', 'ExpressJS', 'MongoDB'],
        designations1: 'Frontend Dev',
        designations2: 'Backend Dev'
    };

}