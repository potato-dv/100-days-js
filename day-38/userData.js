async function findUsername(username) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users`);

    console.log(response.ok);
    console.log(response.status);

    if (!response.ok) {
        throw new Error("User not found");
    } else {
        const data = await response.json();

        const user = data.find(user => user.username === username);
    
    return user ? { id: user.id, name: user.name, userName: user.username, email: user.email } : null;

    }
}

// test cases
findUsername(`Bret`)
    .then(user => console.log(user))
    .catch(error => console.error(error));
