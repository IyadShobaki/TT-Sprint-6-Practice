function getUserEmail(user) {
  return user?.contact?.email;
}

// Example usage:
const user1 = {
  name: "Alice",
  contact: {
    email: "alice@example.com",
  },
};

const user2 = {
  name: "Bob",
};

console.log(getUserEmail(user1)); // "alice@example.com"
console.log(getUserEmail(user2)); // undefined
console.log(getUserEmail()); // undefined
console.log(getUserEmail({})); // undefined
