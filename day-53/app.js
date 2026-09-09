import { createUserRepository } from "./userRepository.js";

   const repository = createUserRepository("./data/users.json");

   const users = await repository.findAll();
   const user = await repository.findById("u2");
//    const newUser = await repository.create(
//     {
//      name: "Lebron Malupiton",
//      email: "lebron.malupiton@example.com"
//    }    
// )

//    const updatedUser = await repository.update("u1",{ active: false });
   const deleteUser = await repository.deleteUser("217f85f9-e59c-4e1a-af9a-1ffa0a6c792e");

// console.log(users);
// console.log(user);
// console.log(newUser);
// console.log(updatedUser);
console.log(deleteUser);