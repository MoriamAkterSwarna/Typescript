{
    // ? Destructuring 

     // Object Destructuring

     const user = {
        id: 1,
        name: {
            firstName: 'John',
            middleName: 'Doe',
            lastName: 'Smith'
        },
        age: 25,
        isMarried: true,
        contactNo: 1234567890 
     };

     
     const { contactNo, 
        name: {middleName : mName}, // Name alias 
     } = user; // destructuring



     // Array Destructuring


     const frids : string[] = ['Mir', 'Firoz', 'Mizan', 'Rahim', 'Karim', 'Rahman'];
     
     
    //  const [f1, bestFriend, f3, ...restFriends] = frids; // destructuring 

    const [, , bestFriend] = frids; // destructuring

}