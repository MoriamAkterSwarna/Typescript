{
  // ? Function with Generic Type

  const createArray = (param: string): string[] => {
    return [param];
  };

  const createArrayWithGeneric = <T>(param: T): T[] => {
    return [param];
  };

  const res1 = createArray("Hello");

  const res2 = createArrayWithGeneric<string>("Hello");
  const res3 = createArrayWithGeneric<number>(1);
  const res4 = createArrayWithGeneric<boolean>(true);

  type User = {
    id: number;
    name: string;
  };

  // const res5 = createArrayWithGeneric<{id: number, name: string}> ({id: 1, name: 'John'});
  const res5 = createArrayWithGeneric<User>({ id: 1, name: "John" });

  const createArrayWithTuple = <T, Q>(param1: T, param2: Q): [T, Q] => {
    return [param1, param2];
  };

  const result1 = createArrayWithTuple<string, number>("Hello", 111);

  const result3 = createArrayWithTuple<number, boolean>(1, true);

  type User1 = {
    id: number;
    name: string;
  };
  type Address = {
    city: string;
    country: string;
  };

  // const result5 = createArrayWithTuple<{id: number, name: string}> ({id: 1, name: 'John'});
  const result5 = createArrayWithTuple<User1, Address>(
    { id: 1, name: "John" },
    { city: "NY", country: "USA" }
  );



    // ? Function with Generic Type and extends


    const addCourseToStudent = <T> (student: T) => {
        const course = 'Next Level web development';
        
        return {
            ...student,
            course
        }


        const std1 = addCourseToStudent({id: 1, name: 'John', course: 'React', devType: 'Frontend'});

        const std2 = addCourseToStudent({id: 2, name: 'Doe', devType: 'Backend', email: 'ab@ba.com'});
    }
}
