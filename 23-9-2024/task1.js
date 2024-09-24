//q1
var number = 5;
if (number % 2 == 0) {
    console.log("its even");
}
else {
    console.log("its odd");
}
//q2
var products = [20, 50, 10, 100, 4];
for (var i = 0; i < products.length; i++) {
    if (products[i] >= 50) {
        console.log(products[i]);
    }
}
var admins = [
    { name: "Rama", age: 20, isAdmin: true },
    { name: "Youssef", age: 30, isAdmin: false },
    { name: "Najlaa", age: 12, isAdmin: false },
    { name: "Mohammad", age: 25, isAdmin: true },
    { name: "Lujain", age: 20, isAdmin: true },
    { name: "Qussai", age: 24, isAdmin: true },
];
var oldestAdmin = null;
for (var i = 0; i < admins.length; i++) {
    if (admins[i].isAdmin) {
        if (oldestAdmin == null || admins[i].age > oldestAdmin.age) {
            oldestAdmin = admins[i];
        }
    }
}
console.log(oldestAdmin);
//Sum All Elements in an Array
var numbers = [20, 50, 10, 100, 4];
var sum = 0;
for (var i = 0; i < numbers.length - 1; i++) {
    sum += numbers[i];
}
console.log("the summ is", sum);
//Check if All Elements in Array are Positive
var n = [-20, 50, -10, 100, 4];
var allPositive = true;
for (var i = 0; i < n.length - 1; i++) {
    if (n[i] < 0) {
        allPositive = false;
    }
}
console.log(allPositive);
//Find the Longest Name in an Array
var subjects = ["Biology", "English", "Physics", "Maths", "Chemistry"];
var shortestString = subjects[0];
for (var i = 0; i < subjects.length - 1; i++) {
    if (subjects[i].length > shortestString.length) {
        shortestString = subjects[i];
    }
}
console.log(shortestString); // Maths
//Count Occurrences of a Character in a String
var str = "sdsdfdffffff ";
var result = {};
for (var i = 0; i < str.length - 1; i++) {
    var ch = str.charAt(i);
    if (!result[ch]) {
        result[ch] = 1;
    }
    else {
        result[ch] += 1;
    }
}
console.log(result);
//Identify Prime Numbers in an Array
var p = [1, 4, 6, 2, 55, 3];
for (var i = 0; i < p.length; i++) {
    if (p[i] <= 1) {
        continue;
    }
    var isPrime = true;
    for (var j = 2; j < p[i]; j++) {
        if (p[i] % j == 0) {
            isPrime = false;
            break;
        }
    }
    if (isPrime) {
        console.log("The prime number is:", p[i]);
    }
}
