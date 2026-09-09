import file from "node:fs/promises";

export function createUserRepository(filePath) {

    async function findAll() {
        const text = await file.readFile(filePath, "utf-8");
        return JSON.parse(text);
    }

    async function findById(id) {
        const users = await findAll();
        return users.find(user => user.id === id) ?? null;
    }

    async function create(user) {
        const users = await findAll();

        const newUser = {
            id: crypto.randomUUID(),
            ...user
        };

        const existingUser = users.find(user => user.email === newUser.email);
        if (existingUser) {
            throw new Error(`User with email ${newUser.email} already exists`);
        }

        users.push(newUser);
        await file.writeFile(filePath, JSON.stringify(users, null, 2), "utf-8");

       return newUser;
};

     async function update(id, updatedUser) {
        const users = await findAll();

        const index = users.findIndex(user => user.id === id);
        if (index === -1) {
            throw new Error(`User with id ${id} not found`);
        }
        
        users[index] = { ...users[index], ...updatedUser };
        await file.writeFile(filePath, JSON.stringify(users, null, 2), "utf-8");
        return users[index];
    }

    async function deleteUser(id) {
        const users = await findAll();

        const index = users.findIndex(user => user.id === id);
        if (index === -1) {
            throw new Error(`User with id ${id} not found`);
        }

        const deletedUser = users[index];

        users.splice(index, 1);

        await file.writeFile(filePath, JSON.stringify(users, null, 2), "utf-8");
        return deletedUser;
    } 

       return { 
        findAll,
        findById,
        create,
        update,
        deleteUser
    };
}