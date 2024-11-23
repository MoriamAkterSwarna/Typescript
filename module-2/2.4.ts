{
  //  ? Generic Interface

  interface Developer<T, X = null> {
    name: string;
    computer: {
      brand: string;
      model: string;
      releaseYear: number;
    };
    smartWatch: T;
    bike? : X 
  }

  interface XiaomiWatch {
    brand: string;
    model: string;
    display: string;
  }

//   const poorDeveloper: Developer<{
//     brand: string;
//     model: string;
//     display: string;
//   }> = {
//   const poorDeveloper: Developer<XiaomiWatch, null> = {
  const poorDeveloper: Developer<XiaomiWatch> = {
    name: "John Doe",
    computer: {
      brand: "Asus",
      model: "OLED Pro",
      releaseYear: 2017,
    },
    smartWatch: {
      brand: "Xiomi",
      model: "Xioami 8 Watch",
      display: "OLED",
    },
  };

  interface AppleWatch {
    brand: string;
    model: string;
    heartTrack: boolean;
    sleepTrack: boolean;
  }

  interface YamahaBike {
    model: string;
    engineCapacity: string;
  }

  // const richDeveloper: Developer < {
  //     brand: string;
  //     model: string;
  //     heartTrack: boolean;
  //     sleepTrack: boolean;
  //  }> = {
  const richDeveloper: Developer<AppleWatch, YamahaBike > = {
    name: "John Doe",
    computer: {
      brand: "Apple",
      model: "MacBook Pro",
      releaseYear: 2017,
    },
    smartWatch: {
      brand: "Apple",
      model: "Apple Watch",
      heartTrack: true,
      sleepTrack: true,
    },
    bike:{
        model: "Yamaha", 
        engineCapacity: '150cc'
    }
  };
}
