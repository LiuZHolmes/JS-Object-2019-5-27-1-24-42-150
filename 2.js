var fruit = {
apple: 20,
pear: 20,
peach: 10
};
// write your code here...
var keys = Object.keys(fruit);
var sum = 0;
for (let i = 0; i < keys.length; i++) {
	sum = sum + fruit[keys[i]];
}
console.log(sum);