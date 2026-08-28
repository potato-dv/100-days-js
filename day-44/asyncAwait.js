// MEDIUM  |  Promises, async functions, await, sequential flow, rejection
// Objective: Understand why async functions return promises and where await is legal.
// Challenge: Complete and explain a simulated getUserWithPosts(userId) workflow.
// Requirements
//     • Await the user before using its id.
//     • Fetch independent post details concurrently.
//     • Handle a missing user distinctly from a network failure.
// Example: await getUserWithPosts(7) -> {user: {...}, posts: [...]}
// Starter code
// export async function getUserWithPosts(userId) {
//   const user = await findUser(userId);
//   // continue
// }
// Constraints
//     • No nested .then() chains.
//     • Label which lines are sequential and concurrent.
// Bonus: Rewrite once with promise chaining and compare.

export async function getUserWithPosts(userId) {
    // Sequential: Wait for the user to be fetched before proceeding
    const user = await findUser(userId);
    
    if (!user) {
        throw new Error("User not found");
    
    } else {
    // Concurrent: Fetch all posts concurrently
    const postPromises = user.postIds.map(postId => fetchPost(postId));
    const posts = await Promise.all(postPromises);

    return { user, posts };
    }
}

// test cases

function findUser(userId) {
    const user = {
        1: { id: "23-11654-273", name: "Ana", postIds: [101, 102] },
        2: { id: "23-11654-274", name: "Ben", postIds: [103] },
        3: { id: "23-11654-275", name: "Carl", postIds: [] }
    }
    return Promise.resolve(user[userId] || null);
};
function fetchPost(postId) {
    const posts = {
        101: { id: 34523, title: "Java", content: "Hello everyone in the Java community!" },
        102: { id: 34524, title: "Welcome", content: "This is the content of the welcome post." },
    }
    return Promise.resolve(posts[postId] || null);
}

try {
    const result = await getUserWithPosts(99);
    console.log(result);
} catch (iferror) {
    console.log(iferror.message);
}