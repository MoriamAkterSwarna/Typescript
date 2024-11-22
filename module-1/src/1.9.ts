{
    // ? Type alias 

 // ? ==== Object Type Alias ==== 
 // Type alias => custom type 
    type Student  = {
        name: string;
        age: number;
        gender: string;
        contactNo ?: string;
        address: string;
    } 

    // const student1 : {
    //     name: string;
    //     age: number;
    //     gender: string;
    //     contactNo: string;
    //     address: string;
    // } = {
    //     name: 'John Doe',
    //     age : 25,
    //     gender: 'male', 
    //     contactNo: '1234567890',
    //     address: 'Dhaka, Bangladesh' 
    // }; 


    // const student2: {
    //     name: string;
    //     age: number;
    //     gender: string;
    //     address: string;
    // } = {
    //     name: 'Jane Doe',
    //     age : 23,
    //     gender : 'male', 
    //     address: 'Dhaka, Bangladesh'
    // }



    const student1 : Student = {
        name: 'John Doe',
        age : 25,
        gender: 'male', 
        contactNo: '1234567890',
        address: 'Dhaka, Bangladesh'
    };
    const student2 : Student = { 
        name: 'Jane Doe',
        age: 23,
        gender: 'male', 
        address: 'Dhaka, Bangladesh'
    }; 

    type UserName = string; 
    type isAdmin = boolean; 

    const userName : UserName = 'John Doe'; 
    const isAdmin : isAdmin = true; 



    // ? ==== Function Type Alias ==== 

    type Add = (a : number, b : number) => number; 

    // const add = (a : number, b : number) : number => {
    //     return a + b;
    // } 

    const add : Add = (a, b ) => {
        return a + b;
    }

}