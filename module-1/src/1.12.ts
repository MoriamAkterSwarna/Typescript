{

    // ? nullable type 

    const searchName = (value: string | null) => {
        if(value){
            console.log('Searching for ', value);
        }
        else{
            console.log('Please provide a value');
        }
    }

    // searchName('John Doe'); // Searching for  John Doe

    searchName(null); 



    // ? Unknown Type 

    const getSpeedInMeterPerSecond = (value: unknown) => {
        if(typeof value === 'number'){
            const converted = value * 1000 / 3600; 
            console.log('Speed in meter per second ', converted );
        }
        else if(typeof value === 'string'){
            const[res, unit]  = value.split(' ');
            const converted = parseInt(res) * 1000 / 3600;
            console.log('Speed in meter per second ', converted );
        }
        else{
            console.log('Please provide a valid number');
        }
    }

    // getSpeedInMeterPerSecond(100); // Speed in meter per second  27.77777777777778

    // getSpeedInMeterPerSecond('100'); // Please provide a valid number

    getSpeedInMeterPerSecond('1000 km/hr'); // Please provide a valid number



    // ? Never Type 

    function throwError(message: string): never {
        throw new Error(message);
    }
    throwError('Abb mein kya karu?');
}