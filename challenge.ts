// challenge.ts
interface User {
    name: string;
    age?: number;
    birthday?: string;
}

const prettyPrintWilder = (users: User[]) => {
    users.map((user) => {
      console.log(`${user.name} is ${user.age} years old`);
    });
  };
  /**
   * for user2 we can put optional operator for age and birthday or replace birthday by age and remove it.
   * it will depend if it's a required field or not
   * */
  const wilders: User[] = [];
  const user1 = { name: "Pierre", age: 23 };
  const user2 = { name: "Paul", birthday: "10/02/1990", age: 32 };
  const user3 = { name: "Jacques", age: 25 };
  wilders.push(user1);
  wilders.push(user2);
  wilders.push(user3);
  prettyPrintWilder(wilders);