{
    // type assertion 
    let anything : any;

    anything = "Hello"; 
    

    anything = true; 

    (anything as string).length; // type assertion


    anything = 10;

    (anything as number).toFixed(2); // type assertion

    const kgToGram = (value: string | number) : string | number | undefined => {
        if(typeof value === "string") {
            const convertedValue = parseFloat(value);
            return `converted value is: ${convertedValue * 1000}`;
        }
        else {
            return value * 1000;
        }
    }


   const res1 = kgToGram("10") as string ; // 10000
  const res2 =kgToGram(10) as number; // 10000
    // console.log(kgToGram(true)); // undefined


    type CustomError= {
        message: string; 
    }

    try{

    }
    catch(error){
        console.log((error as CustomError).message); // error.message
        // console.log(error.message); // error.message
    }
}