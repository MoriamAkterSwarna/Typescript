{
  // ? Mapped Types

  const arrOfNumbers: number[] = [1, 2, 3, 4, 5];

  const arrOfStrings: string[] = ["a", "b", "c", "d", "e"];

  const arr: string[] = arrOfNumbers.map((item) => item.toString());
  console.log(arr); // [ '1', '2', '3', '4', '5' ]    // * This is what we want to achieve with mapped types

  type AreaNumber = {
    height: number;
    width: number;
  };

  type Height = AreaNumber["height"]; // number  //*  Lookup Types =>  type Height = number

  // type AreaString = {
  //     height : string;
  //     width : string;
  // };

  // type Area = {
  //     height : number | string;
  //     width : number | string;
  // };

//   type AreaString = {
//     [key in keyof AreaNumber]: string;
//   };
  type AreaString<T> = {
    [key in keyof T]: T[key] ; // * T[key] => number | string  // loop up type
  };


  const area1: AreaString <{ height : string, width: number} > = {
    height : "10",
    width : 20

  }




}
