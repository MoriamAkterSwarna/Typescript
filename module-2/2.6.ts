{

    // ? Constraints  

  const addCourseToStudent = <T extends { name: string, id: number, email: string}>(student: T) => {
    const course = "Next Level web development";

    return {
      ...student,
      course,
    };

    const std1 = addCourseToStudent<{
        id: number;
        name: string;
        course: string;
        email: string;
        devType: string
    }>({
      id: 1,
      name: "John",
      course: "React",
      email: "aa@bb.com",
      devType: "Frontend",
    });

    const std2 = addCourseToStudent<{
        id: number;
        name: string;
        devType: string;
        email: string
    }>({
      id: 2,
      name: "Doe",
      devType: "Backend",
      email: "ab@ba.com",
    });


    // const std3 = addCourseToStudent({
    //     emni: 'emni',
    // });  // Error: Argument of type '{ emni: string; }' is not assignable to parameter of type '{ name: string; id: number; email: string; }'.

    const std3 = addCourseToStudent({
        id: 3,
        name: 'Emni',
        email: 'emni@emni.com',
        emni: 'emni',
    });
  };
}
