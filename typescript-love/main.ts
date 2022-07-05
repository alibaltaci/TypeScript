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



