// EASY  |  JSON.parse, JSON.stringify, serialization, data types
// Objective: Understand the format most REST APIs exchange and its limitations.
// Challenge: Create safeParseJson(text) and serializePublicUser(user).
// Requirements
//     • safeParseJson returns a structured result.
//     • Remove passwordHash before serialization.
//     • Demonstrate what happens to Date and undefined.
// Example: safeParseJson("{bad}") -> {ok: false, error: "Invalid JSON"}
// Starter code
// export function safeParseJson(text) {
//   try { /* parse */ } catch (error) { /* translate */ }
// }
// Constraints
//     • Never expose secret fields.
//     • Do not mutate the original user.
// Bonus: Add a JSON replacer for BigInt or private keys.

export function safeParseJson(text) {
    try {
        const parsed = JSON.parse(text);
        return { ok: true, value: parsed };
    } catch (error) {
        return { ok: false, error: "Invalid JSON" };
    }
}

export function serializePublicUser(user) {
    const { passwordHash, ...publicUser } = user;
    return JSON.stringify(publicUser);
};

// test cases

const testData = { 
    name: "Alice",
    nickname: undefined,
    age: 30,
    Nationality: "Philippines",
    Date: new Date(),
    passwordHash: "secret123"
}

const parsedValid = safeParseJson(JSON.stringify(testData));
console.log(parsedValid);

const serializedUser = serializePublicUser(testData);
console.log(serializedUser);

const invalidJson = "{banana}";
const parsedInvalid = safeParseJson(invalidJson);
console.log(parsedInvalid);

