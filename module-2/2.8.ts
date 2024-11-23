{
  // ? Promise In TypeScript
  // * Promise is a built-in object in JavaScript that represents the result of an asynchronous operation.

  // simulate a promise
  const createPromise = (): Promise<string> => {
    return new Promise<string>((resolve, reject) => {
      const data: string = "something";

      if (data) {
        resolve(data);
      } else {
        reject("Error");
      }
    });
  };

  //  call the promise

  // createPromise().then((data) => {
  //     console.log(data)
  // }).catch((error) => {
  //     console.log(error)
  // })

  const showData = async (): Promise<string> => {
    const data: string = await createPromise();
    // console.log(data)
    return data;
  };

type Todo = {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
    }
    
    const getTodo = async (): Promise<Todo> => {
        const response = await fetch("https://jsonplaceholder.typicode.com/todos/1") ;
    
        const data = await response.json() ;
        console.log(data)
        return data ;
    
    }
    
    getTodo() ;
}

 