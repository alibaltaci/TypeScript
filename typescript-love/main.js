// TypeScript içinde bir JavaScript kodu çalıştıralım
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
function sayHello(message) {
    console.log(message);
}
;
sayHello("selam");
// typescript compiler ile TS kodumuzu JS 'ye dönüştürelim.
// tsc (typescript compiler) => .ts => .js
// ################################ 
// ES Version farklılıklarını .ts ve .js dosyları üzeirinden gözlemleyelim.
var myName = "ali";
var myWord = "Ben ".concat(myName);
// console.log(myName, myWord);
// Array Kopyalayalım [...Array]
var myArray = ["Python", "JavaScript", "TypeScript"];
var copyMyArray = __spreadArray([], myArray, true);
// #####################################
// TS Veri Tipleri
var a = "Ali";
// a = 3;
// Type Assention
var helloMessage;
helloMessage = "Hello";
// way-1:
var newHelloMessage = helloMessage.toLocaleLowerCase();
console.log(newHelloMessage);
// way-2:
var newNewHelloMessage = helloMessage.toUpperCase();
console.log(newHelloMessage, newNewHelloMessage);
// Object Type
var user = {
    name: "Ali",
    age: 25,
    langs: ["Python", "JavaScript", "TypeScript", 5]
};
var newUnionObject;
newUnionObject = {
    name: "ali",
    age: 22,
    role: "user",
    color: {
        name: "black",
        hex: "#000"
    }
};
console.log(newUnionObject);
// Functions 
// arrow func.
var add = function (num1, num2) {
    console.log(num1 + num2);
    return num1 + num2;
};
add("3", "Ali");
// Functions optional Params 
var logUser = function (firstname, lastname) {
    console.log(firstname + " " + lastname);
};
logUser("Ali", "Baltacı");
var logUserOp = function (firstname, lastname) {
    console.log(firstname + " " + lastname);
};
logUserOp("Ali");
// Functions Default
var logUserDef = function (firstname, lastname) {
    if (lastname === void 0) { lastname = "Yok"; }
    console.log(firstname + " " + lastname);
};
logUserDef("Ali");
var logUserType = function (color) {
    console.log(color);
};
logUserType({
    name: "Blue",
    hex: "#000"
});
