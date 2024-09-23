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
;
for (var i = 0; i < admins.length; i++) {
    if (admins[i].isAdmin) {
        if (oldestAdmin === null || admins[i].age > oldestAdmin.age) {
            oldestAdmin = admins[i];
        }
    }
}
console.log(oldestAdmin);
