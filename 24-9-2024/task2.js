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
