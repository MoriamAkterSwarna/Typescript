{
  // ? Type guards

  // * Typeof as type guard

  //   const add = (p1: string | number, p2: string | number): string | number => {
  //     if (typeof p1 === "number" && typeof p2 === "number") {
  //       return p1 + p2;
  //     } else {
  //       return p1.toString() + p2.toString();
  //     }
  //   };

  type AlphaNumeric = string | number;
  const add = (p1: AlphaNumeric, p2: AlphaNumeric): AlphaNumeric => {
    if (typeof p1 === "number" && typeof p2 === "number") {
      return p1 + p2;
    } else {
      return p1.toString() + p2.toString();
    }
  };

  const res1 = add(2, 3);
  console.log(res1);

  //   * In as type Guard

  type NormalUser = {
    name: string;
  };

  type AdminUser = {
    name: string;
    role: "Admin";
  };

  const getUser = (user: NormalUser | AdminUser) => {
    if ("role" in user) {
      console.log(`${user.name} role is ${user.role}`);
    } else {
      console.log(`${user.name}`);
    }
  };

  const normalUser: NormalUser = {
    name: "Mr X",
  };

  const adminUser: AdminUser = {
    name: "Mr Admin",
    role: "Admin",
  };

  getUser(normalUser);
  getUser(adminUser);
}
