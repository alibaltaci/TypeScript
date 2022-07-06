// TypeScript içinde bir JavaScript kodu çalıştıralım

function sayHello(message){
    console.log(message);
};

sayHello("selam");

// typescript compiler ile TS kodumuzu JS 'ye dönüştürelim.
// tsc (typescript compiler) => .ts => .js


// ################################ 


// ES Version farklılıklarını .ts ve .js dosyları üzeirinden gözlemleyelim.

const myName = "ali";

const myWord = `Ben ${myName}`;

// console.log(myName, myWord);


// Array Kopyalayalım [...Array]

const myArray = ["Python", "JavaScript", "TypeScript"];

const copyMyArray = [...myArray];


// #####################################

// TS Veri Tipleri

let a = "Ali";

// a = 3;


// Type Assention

let helloMessage;

helloMessage = "Hello";

// way-1:
const newHelloMessage = (<string>helloMessage).toLocaleLowerCase();
console.log(newHelloMessage);

// way-2:
const newNewHelloMessage = (helloMessage as string).toUpperCase();
console.log(newHelloMessage, newNewHelloMessage);


// Object Type

let user = {
    name: "Ali",
    age: 25,
    langs: ["Python", "JavaScript", "TypeScript", 5],
}


// Union Type ? 

type Color = {
    name: "black" | "white";
    hex: string;
};

type unionObject = {
    name: string;
    age: number | string;
    role: "admin" | "user";
    color: Color;
};

let newUnionObject: unionObject;

newUnionObject = {
    name: "ali",
    age: 22,
    role: "user",
    color: {
        name: "black",
        hex: "#000",
    },
};

console.log(newUnionObject);


// Functions 

// arrow func.
const add = (num1: string, num2: string): string => {  //void
    console.log(num1 + num2);
    return num1 + num2;
};

add("3", "Ali");


// Functions optional Params 

const logUser = (firstname: string, lastname: string) => {
    console.log(firstname + " " + lastname);
};

logUser("Ali", "Baltacı");

const logUserOp = (firstname: string, lastname?: string) => {
    console.log(firstname + " " + lastname);
};

logUserOp("Ali");


// Functions Default

const logUserDef = (firstname: string, lastname = "Yok") => {
    console.log(firstname + " " + lastname);
};

logUserDef("Ali");

// 

type Color2 = {
    name: string;
    hex: string;
};

const logUserType = (color: Color2) => {
    console.log(color);
};

logUserType({
    name: "Blue",
    hex: "#000",
});


