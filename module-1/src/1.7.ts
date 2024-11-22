{
    // ? Spread Operator 


    const bros1 : string[] = ['Mir', 'Firoz', 'Mizan'];
    const bros2 : string[] = ['Rahim', 'Karim', 'Rahman'];  


    // bros1.push(bros2);   // Error 
    bros1.push(...bros2); // Allowed 


    const mentors1 = {
        ts: 'Mezba', 
        Rd: 'Mir', 
        dbms: 'Mizan'
    }
    const mentors2 = {
        prisma: 'Firoz', 
        next: 'Tanmoy', 
        cloud: 'Nahid'
    }

    const allMentors = {...mentors1, ...mentors2};  // Allowed



    // ? Rest Operator 


    const greetFriends = ( f1 : string, f2 : string, f3 : string) => {
        console.log(`Hello ${f1}, ${f2}, ${f3}`); 
    }

    // greetFriends('Mir', 'Firoz', 'Mizan'); // Hello Mir, Firoz, Mizan
    // greetFriends('Mir', 'Firoz', 'Mizan', 'Rahim'); // Error


    const greetAllFriends = (...friends : string[]) => {
       friends.forEach(friend => {
              console.log(`Hello ${friend}`);
         } ) 
    }

    // greetAllFriends('Mir', 'Firoz', 'Mizan'); // Hello Mir, Firoz, Mizan 

    
}