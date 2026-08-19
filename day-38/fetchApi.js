// Topics: Fetch API, Async/Await

// Description

// Create a function that accepts a GitHub username and requests the user profile from the GitHub public API.

// Return:

// username
// display name
// avatar URL
// public repository count
// follower count
// profile URL

// Throw an error when the user does not exist.

// Starter Code
// async function getGitHubProfile(username) {
//   // Write your solution here
// }
// Requirements

// Check response.ok before parsing the response.

async function getGithubProfile(username) {
    const response = await fetch (`https://api.github.com/users/${username}`);

    console.log(response.ok);
    console.log(response.status);

    if (!response.ok) {
        throw new Error("User not found");
    } else {
    const data = await response.json();
    
    return {
        username: data.login,
        displayName: data.name,
        avatarUrl: data.avatar_url,
        publicRepoCount: data.public_repos,
        followerCount: data.followers,
        profileUrl: data.html_url
    }
}
}

getGithubProfile(`potato-dv`)
.then (profile => console.log(profile));
