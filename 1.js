var user = new Object();
console.log(user);
user.name = "John";
console.log(user);
user.surename = "Mike";
console.log(user);
user.name = "Peter";
console.log(user);
delete user.name;
console.log(user);