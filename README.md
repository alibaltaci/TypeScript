# TypeScript 

# TypeScript Nedir?

* TypeScript bir JS superset 'idir.* TypeScript kendi başıan bir dil değildir. JS üzerine inşa edilmiş. JS 'ye yeni özellikler katan bir uzantı dildir. 

* JS küçük çaplı projelrde client side (müşteri taraflı) bir dil olarak tasarlandığı için yapısal eksiklikleri vardı. JS ile birlikte tip kontrolü yapamayız. Nesne tabanlı dillerin avantaj sağladığı yapıları (sınıflar, inheritence) barındırmaz. TypeScript bu eksiklikleri gidermek ve JS 'yi daha büyük projelerde kullanabilmek için tasarlanmıştır.

*Superset (Kapyan/Üst Küme): Matematikteki alt küme kavramı gibi. a kümesi b kümesinin alt kümesi ise, a 'nın tüm elemanları aynı zamanda b 'nin de elemanlarıdır. Yani, b kümesi a kümesinin üstüdür, b kümesi a kümesini kapsar.

Herhangi bir x programlama dili y programlama dilinin superset 'i ise, x dilinin compiler 'i ile siz y dilinde yazilmis programları derleyebilirsiniz; çünkü, y dili x dilinin alt kümesi, x dilinde olan her sey y dilinde de var. 

## ***Static Typing / Dynamic Typing***

* Programlama dilleri statik ya da dynamic yazıma sahip olabilirler.

***Static Typing***

* (TypeScript, Java, C, C++)

* Geliştirici değişkenleri kullanmadan önce b değişkenlerin tiplerini açıkça belirtmek zorundadır. Program içerisinde tanımladığımız değişkenin tipini (string, integer, bolean ...), program içerinsinde fatklı bir alanda kullanmadan önce açıkça belirtmek zorundayız. 

* Bu değişkenin tipini belirledikten sonra farklı bir tipe çeviremeyiz. 

* Hatalı işlemler yaparsak daha  development kısmında hata mesajlarını **(compile time)** almaya başlarız. Static yazım bize compile time hata mesajları verir. Hata mesajlarını program çalışmadan önce almamızı sağlar ve geliştiricinin bu hataları daha erken düzeltmesini sağlar.

* Daha hızlıdır (fast)* ve daha az hafıza kullanır (Less Memory).

*Type Checking: programlama dilleri konseptinde dil tasarımı sırasında dil tasarımcısının, o dilde yazılacak programın compile veya execution time'ı sırasında değişkenlere atanan değerlerin türleri (örn. int,float,char,string) arasında uyuşma olup olmadığının kontrol edilmesi veya edilmemesi durumu

***Dynamic Typing***

* (JS, PHP, Python)

* Geliştiriciye esnek bir ortam sağlar.

* Hata mesajları ancak program çalıştıktan **(run time)** sonra gelir.

* Değişken tiplerini belirleme zorunluluğu yoktur.

* Değişken tipleri program içerisinde değiştirilebilir.

# TypeScript Avantajları

* Erken tespit edilen hatalar (compile time).

* Predictability (Tahmin edilebilirlik). Bunu sağlamasının sebebi, Static yazım tipine sahip olduğu için programımız içerisinde her bir değişkenin tipinin önceden belli olması. Tipi tanımlanan değişken aynı tipte devam edecek. Bu durum bize tahmin edilebilirlik kazandırır.

* JS 'ye dahil olmayan OOP (Class, Interface, Inheritance...) özelliklerini kullananabiliriz.

* More Types. JS tiplerine yeni tipler sağlar. Bu tipler çok daha spesifik tiplerdir. 

* Browser Compatability (Tarayıcı Uyumluluğu) (ES7 - ES6 ile yeni özellikleri kullanıp bunların ES5 'e dönüştürülmesi).

# TypeScript Özellikleri

1. Geçerli bir JS kodu aynı zamanda bir TS kodudur. .JS uzantısını .TS 'ye çevirmeniz yeterli olacaktır. (Kapsayıcı Küme)

2. TS her yerde kullanılabilir. Browser, Mobil Cihazlar, herhangi bir işletim sistemi.

3. TS JS kütüphaneleri ile birlikte kullanılabilir. Geliştiriciler var olan JS kodunu değiştirmeden kullanabilirler. JS ve TS uzantılı dosyala aynı projede kullanılabilirler. (bkz. madde 1)

4. Hata mesajlarını development zamanında verir. (Bkz. Static Type)

# TypeScript Dezavantajı

* Tarayıcılar TypeScript kodunu anlayamazlar. Bu yüzden TS kodu bir derleyici yardımı ile JS koduna derlenir.

-----

|TypeScript Code
-----------------

 TypeScript file (*.ts) (Classes, Interface, Modules, Types) 

----> 

|Compilation / Transpiling (Derleme / Aktarma)
--------------------------

TypeScript Compiler (tsc) (Target: ES3 / ES5 /ES6 ...)

----> 

|Vanilla* JS Code 
-----------------

JavaScript file (*.js) (Runs everywhere)

*“Vanilya JavaScript”, geliştiricilerin normal JavaScript'i tanımlamak için kullandıkları bir terimdir. Herhangi bir ek kütüphane veya framework(jquery,react,vue) olmadan dahili JavaScript yöntemlerini ve nesnelerini kullanmak anlamına gelir.

----

* Geliştirme aşamasına derleme süreci katar.

# TypeScript 'i Ne Zaman Kullanmalıyız?

* Büyük kod tabanlı çalışmalarda.

* Takım üyeleri static yazım dillerine alışkınsa.

* Bir kütüphane veya framework TS 'yi öerdiğinde (Angulas.js).

---
---
---

# TS kodlarını derleyici yardımı ile JS 'ye çevirme (compile) (to ES5)

cmd --> `` tsc main.ts main.js `` ya da sadece `` tsc main.ts ``

* İşlemden sonra iki dosya da aynı anda açık olursa, benzer fonksiyonlar kullanıldığı için hata gösterir. Biri kapatıldığı anda hata gider. 

* JS dosyamızı çalıştıralım

cmd --> `` node main.js ``

# Watch Mode

Bu sayede .ts dosyamızda yaptığımız her değişiklik anlık olarak yakalanır ve .js dosyamıza derlenir.

cmd --> `` tsc main.ts -w ``

# JavaScript Version

* ES5 (Supported by all browsers).

* ES6 (2015) Arrows, classes, template strings ( `` ), let... const... [...array]

* ES7 ES2016 Array.prototype.includes

* ES8 ES2017

# ES Versiyon farklılıklarını .ts ve .js dosyaları üzerinde gözlemleyelim

### TS dosyamızda ES6 ile gelen template string 'i kullanacağız 

*main.ts*  -->

```
const myName = "ali";
const myWord = `Ben ${myName}`;
```

*main.js*  --> 

```
var myName = "ali";
var myWord = "Ben ".concat(myName);
```

## Array Kopyalayalım [...Array]

```
const myArray = ["Python", "JavaScript", "TypeScript"];

const copyMyArray = [...myArray];
```

 to ES5 ===>

```
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};

var myArray = ["Python", "JavaScript", "TypeScript"];
var copyMyArray = __spreadArray([], myArray, true);
```

---
---
---

# TypeScript Veri Tipleri

* @typeAnnotations :type
* Any
* Number
* String 
* Boolean
* Arrays string[], number[], any[]
* Enum
* Tuple [type1, type2]
* unknown
* TYPE INFERENCE?

TypeScript static typing 'e sahip olduğu için, bir değişkene hangi değeri atarsak program içinde hep aynı tiple kullanılmaya devam eder.


```
let a = "Ali";

a = 3;  --> Type 'number' is not assignable to type 'string'.

```

Farklı tip bir değer atamaya çalışırsak yukarıdaki hatayı alırız.

Aynı tip değer atanarak değişkenin değeri değiştirilebilir.

Derleme işlemine hataya rağmen devem etmek istersek uyarı alırız fakat bu durum derlemeyi durdurmaz ve kodumuz JS 'ye derlenir.

JS 'de Dynamic Typing kullanıldığı için tip dönüşümleri yapmak mümkündür. Dikkat edilmesi lazım.

## Any

``let a;``

Bu tür bir atamada a değeri any değerinde olsa bile sonraki atamalarda da aynı kalmaya devam eder.

## @typeAnnotations 

* Değişkenin Tipini belirtip sonradan değer ataması yapabiliriz. Buna typeAnnotation denir. Bu işlemi semi colon " : " yardımı ile yaparız.

```
let a: string;

a = "Ali";
 ```

 ## TYPE INFERENCE

Aşağıdaki kullanım yanlış değildir fakat manasızdır. Değişkene atama yapılırken atanan verinin tipine göre değer alır. Buna TYPE INFERENCE denir.

```
let a: string = "Ali";
```

Oluşturulan değişkene değer ataması hemen yapılmayacaksa, değişken oluşturulduğu anda tip tanımlaması yapılabilir (@typeAnnotations). Tanımlama yapılmazsa any olarak alğılanır ve TS 'nin kafası karışır.

`` let a: number; ``

## enum

```
enum Color {Purple, Black, Blue, Red};

let bgColor = Color. --> {Purple, Black, Blue, Red}
```

Color değişkenini farklı içinde barındırdığı farklı değerler yeniden tanımlayabiliriz.

```
bgColor = Color.Black;
```

## Tuple 

 Bir Array değişkenimiz varsa ve array içindeki elmanların sırası ile tipleri belli ise, array tanımlandığı anda aşağıdaki gibi bir atama yapılabilir.

 ```
 let error: [string, number];

 error = ["Not found", 404];
 ```

## unknown

Değişkenimizi oluştururken tipini unknown yapıp sonrasında rahatlıkla tipi farklı olan değerleri atayabiliriz. Any ' e göre daha sağlıklı bir yöntemdir.

``` 
let notSure: unknown;

notSure = "Ali";
notSure = 42;
notSure = true;
notSure = ["asdf", "rewq"];

```

Kendince katı kuralları vardır. Bir tipe sahip olan bir değişken unknıown 'a atayamazsınız.

Aşağıdaki kullanım hatalıdır.

```
let a = true;

let notSure: unknown;

a = notSure

```

---
---
---

# Type Assertions 

TypeScript 'in hatalı olarak kabul edeceği bir değişken oluşturma işlemi yapığımızı ama bunun farkında olduğumuzu varsayalım. Yaptığımız hatalı değişken oluşturma işleminden sonra değişkenimize farklı tipte bir değer atayalım ve bu tipin özelliklerini kullanmak istediğimizi varsayalım. Bunu Type Assertion ile yaparız.



```
let message;  (any)

message = "Hello";

```

Yöntem - 1:

```
const newMessage = (<string>message).toLowerCase();
```

Yöntem - 2:

```
const newNewHelloMessage = (message as string).toLowerCase();
```

Yukarıdaki işlem ile TS 'yi susturmuş oluyoruz.

Farklı tipte tanımlanmış değişkenleri bu şekilde kullanamayız. Durum Any için geçerlidir.

---
---
---

# Object Type

````
let user = {
    name: "Ali",
    age: 25,
    langs: ["Python", "JavaScript", "TypeScript", 5],
}
````

TS Type Inference sayesinde aşağıdaki gibi bir obje üretir. -->

```
let user: {
    name: string;
    age: number;
    langs: (string | number)[];
}
```

Bu bir TS objesidir. JS objesi olsa ; yerine , olurdu.


---
---
---

# Union Type

Bir değişkenimiz iki farklı veri tipinde değer alabilir demek istersek bunu **pipe** " | " yardımı ile yapıyoruz.

```
let unionObject: {
    name: string;
    age: number | string;
};

unionObject.age = 25;

```

# Literal Type

Değişkene kesin tip atama.

```
let unionObject: {
    name: string;
    age: number | string;
    role: "admin" | "user";
};

unionObject.role = "user"; / "admin";
```

role kısmına sadece string değer ataması değil orada yazması gereken değeri de direkt olarak belirttik. Bunu diğer veri tipleri için de yapabiliriz.

# Custom Type

```
type Color = {
    name: "black" | "white";
    hex: string;
};

let unionObject: {
    name: string;
    age: number | string;
    role: "admin" | "user";
    color: Color;
};

unionObject.color.name = "black";
unionObject.color.hex = "#000";
```

Birden fazla custom type

```
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
```

* Bu bölümdeki type 'lar TS 'ye özeldir. JS 'de derlenmezler.

---
---
---

# Functions

Fonksiyonun alacağı değerlerin tiplerini belirtebiliriz.

Önceki bölümlerdeki tip özelliklerinin hepsi fonksiyon tanımlarken de kullanılabilir.

```
const add = (num1: string, num2: string) => {     //void
    console.log(num1 + num2);
};

add("3", "Ali");
```

Aşağıdaki gibi return tipini belirtmek de mümkündür fakat özel bir neden yoksa buna gerek yok. Type Inference sayasinde fonksiyonun döneceği değerin tipini kendisi anlar. 

Ayrıca return değeri verebilmemeiz için tanımlanan fonksiyonun bir return yapması lazım. Aksi takdirde hata alırız. Void bir return yapmıyor demektir.

```
const add = (num1: string, num2: string):string => { 
    console.log(num1 + num2);
    retrun num1 + num2;
};

add("3", "Ali");

```

## Optional Params

Parametrenin sonuna ? konularak opsiyonel olduğu söylenebilir.

```
const logUser = (firstname: string, lastname: string) => {
    console.log(firstname + " " + lastname);
};

logUser("Ali", "Baltacı");

const logUserOp = (firstname: string, lastname?: string) => {
    console.log(firstname + " " + lastname);
};

logUserOp("Ali");

```

## Default

```
const logUserDef = (firstname: string, lastname = "Yok") => {
    console.log(firstname + " " + lastname);
};

logUserDef("Ali");
```


```
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
```

---
---
---

# Interfaces

TS sayesinde OOP 'nin getirdiği özellikleri kullanabilriz. Interfaces bunlardan biridir.

````
interface Employee {
    readonly empCode: number;
    name: string;
    age?: number;
};

let newEmployee: Employee;

newEmployee = {
    empCode: 1,
    name: "Ali",
};

newEmployee.name = "dddd";

// newEmployee.empCode = 11  //readonly
````

#  Extending Interfaces

````
interface Person {
    name: string | number;
    age?: number;
};

interface Employee2 extends Person {
    empCode: number;
    department: string;
};

let newEmployee2: Employee2;

newEmployee2 = {
    name: "Ali",
    empCode: 42,
    department: "IT",
};

console.log(newEmployee2);
````

# Implements 

```
interface IEmployee {
    empCode: number;
    name: string;
    age: number;
    getSalary: (number) => number;
};

class CEmployee implements IEmployee {
    empCode: number;
    name: string;
    age: number;

    constructor(employee: number, name: string, age: number) {};

    getSalary = (empCode: number) => {
        return 10000;
    };
};

let newCEmployee = new CEmployee(42, "Ali", 99);

console.log(newCEmployee.getSalary(1));
```



# TypeScript With React

# Adding TypeScript 

https://create-react-app.dev/docs/adding-typescript/

## Yeni Proje Başlatmak

Installation
To start a new Create React App project with TypeScript, you can run:

``npx create-react-app my-app --template typescript``

or

``yarn create react-app my-app --template typescript``

If you've previously installed ``create-react-app`` globally via ``npm install -g create-react-app``, we recommend you uninstall the package using ``npm uninstall -g create-react-app`` or ``yarn global remove create-react-app`` to ensure that npx always uses the latest version.

Global installs of ``create-react-app`` are no longer supported.`

## Var Olan Projeye TS Eklemek

To add TypeScript to an existing Create React App project, first install it:

``npm install --save typescript @types/node @types/react @types/react-dom @types/jest``

or

``yarn add typescript @types/node @types/react @types/react-dom @types/jest``

# .tsx ve .ts Uzantılı Dosyaların Farkı

.ts sadece JS kodu içeren dosyalarımızdır.

.jsx* Jsx kodları içeren dosyalarımızdır.

*JSX, birçok geliştiricinin aşina olduğu sözdizimini kullanarak bileşen oluşturmayı yapılandırmanın bir yolunu sağlayan JavaScript dil sözdiziminin bir React uzantısıdır. Görünüş olarak HTML'ye benzer.

# .d.ts Uzantılı Dosyalar

Tiplerin tanımlamalarının olduğu dosylardır.

# Props

```
export default function Hello( { name } ) {
  return (
    <div>
      <h1>Hello {name} </h1>
    </div>
  );
};
```

Fonksiyonumuza yukarıdaki gibi bir prop tanımlarsak aşağıdaki bir uyarı ile karşılaşırız.

```
(parameter) name: any
Binding element 'name' implicitly has an 'any' type.
```
Bu uyarıdan kurtulmak için prop 'a bir tip ataması yapmamız gerekir.

```
export default function Hello( { name }: {name: string} ) {
  return (
    <div>
      <h1>Hello {name} </h1>
    </div>
  );
};
```

## With Interface 

Birden fazla prop göndermek istediğimizde bunların tiplerini de tanımlamak zorunda oldğumuz için kodlarımız uzar ve güzel bir görüntü olmaz.

```
export default function Hello( { name, description, label }: {name: string, description: string, label: string} ) {
  return (
    <div>
      <h1>Hello {name} </h1>
    </div>
  );
};
```

Daha düzenli bir kod gösterimi için Interface 'i kullanabiliriz.

```
interface IHelloProps {
    name: string;
    description?: string;
    label?: string;
};

export default function Hello( { name, description, label }: IHelloProps ) {
  return (
    <div>
      <h1>Hello {name} </h1>
    </div>
  );
};
```

* Funksiyonumuzun da tipini belirtip daha genel kullanım aşağıdaki koda bakalım.

```
const Hello: React.FC<IHelloProps> = ( { name, description, label } ) => {
      return (
        <div>
          <h1>Hello {name} </h1>
        </div>
      )
    }

export default Hello;

```

Buradaki `` React.FC< > `` ile `` React.FunctionComponent < >`` aynı şeyi ifade etmektedir.

Funksiyona göndermek istediğimiz tüm Interface 'leri `` < > `` arasına girebiliriz.

## prop-types

TS Interface kullandığımız için React 'e olan ve hangi prop 'un hangi tipi alacağını söylediğimiz `` prop-types `` 'ı kullanmamıza gerek kalmadı.

TS bize farklı bir component içerisinde kullandığımız component 'in hangi propları alması gerektiğini bize otomatik olarak gösterir. 

## Function

Hello.tsx --> 

```
interface IHelloProps {
    name: string;
    description?: string;
    label?: string;
    onSmthHappen: (name: string) => void;
};

const Hello: React.FC<IHelloProps> = ( { name, description, label } ) => {
      return (
        <div>
          <h1>Hello {name} </h1>
          {onSmthHappen(name)}
        </div>
      )
    }

export default Hello;
```

App.tsx -->

```
function App() {
  return (
    <div className="App">
      Hello TypeScript With React 

      <Hello name = {"Ali"} onSmthHappen= {(name) => {console.log(name)}} />

    </div>
  );
}
```

## props default

```
const Hello: React.FC<IHelloProps> = ( { name, description="desc", label } ) => {
      return (
        <div>
          <h1>Hello {name} {description} </h1>
          {/* {onSmthHappen(name)} */}
        </div>
      )
    }
```

## import FC

```
import React, {FC} from 'react'
```

```
const Hello: FC<IHelloProps> = ( { name, description="desc", label } ) => {
      return (
        <div>
          <h1>Hello {name} {description} </h1>
          {/* {onSmthHappen(name)} */}
        </div>
      )
    }
```

# Events 

Eventlerin hangi tipi alacağını anlayabilmek için onChange 'e over yapıyoruz ve çıkan uyarıdaki `` ?: `` sonraki kısım bize eventin alacağı değer ile ilgili bilgi verir.

Void 'den sonra return olmaz.

Event 'e tip atamak event üzerinde özellikleri kullanmamıza olanak sağlar.  `` event.target.value ``

```
const Hello: React.FC<IHelloProps> = ( { name, description="desc" } ) => {
    
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
        event.target.value
    };

    return (
      <div>
        <h1>Hello {name} {description} </h1>
        <input type="text" onChange={handleChange} />
      </div>
    )
  }
```

Etiketimizi değiştirip tekrardan onChange 'e over yapılırsa, event 'imizin tipinin değiştitği görülecektir.

```
return (
    <div>
    <h1>Hello {name} {description} </h1>
    <div onChange={handleChange} />
    </div>
)
}
```

over onChange --> 

```
(property) React.DOMAttributes<HTMLDivElement>.onChange?: React.FormEventHandler<HTMLDivElement> | undefined
```

# Hooks

## useState

```
const Hello: React.FC<IHelloProps> = ( { name, description="desc" } ) => {

    const [data, setData] = useState(42);

    setData(24);
    
    return (
        <div>
            <h1>Hello {name} {description} </h1>
        </div>
    )   
}  
```

Type Inference sayesinde ``data`` ``number`` tipini alır. ``setData`` ile günellemek istediğimizde `` number `` bir değer ile devam etmek zorundayız.

 `` | `` `` pipe `` ile birden fazla tip alabileceğini belirtelim. `` useState<number | string | null> ``

 ```
 const Hello: React.FC<IHelloProps> = ( { name, description="desc" } ) => {

    const [data, setData] = useState<number | string | null>(42);

    setData(24);
    
    return (
        <div>
            <h1>Hello {name} {description} </h1>
        </div>
    )   
}  
 ```

## object type

```
const Hello: React.FC<IHelloProps> = ( { name, description="desc" } ) => {

    const [data, setData] = useState< {age: number} >( {age: 42} );

    setData({age: 99 });


    return (
        <div>
            <h1>Hello {name} {description} </h1>
        </div>
    )   
} 
```

## Object Type With Interface

Object Type ile interface 'i birlikte kullanalım.

```
interface dataNode {
    age: number | null; 
    name?: string; 
    department?: string | number;
};

const Hello: React.FC<IHelloProps> = ( { name, description="desc" } ) => {

    const [data, setData] = useState< dataNode >( {age: 42, name: "Ali", department: "IT", } );

    setData({age: 99 });


    return (
        <div>
            <h1>Hello {name} {description} </h1>
        </div>
    )   
}
```

# useRef

Atayacağımız tipleri over yardımı ile görüyoruz.

```
const Hello: React.FC<IHelloProps> = ( { name, description="desc" } ) => {

    const inputRef = useRef<HTMLInputElement>(null);
    const divRef = useRef<HTMLDivElement>(null);
    const buttonRef = useRef<HTMLButtonElement>(null);

    return (
        <div ref={divRef}>
            <h1>Hello {name} {description} </h1>
            <input type="text" ref={inputRef} />
            <button ref={buttonRef}> Button </button>
        </div>
    )   
}
```

## useReducer

```
interface Note {
    content: string;
}

type Actions = {type: "add", content: string} | {type: "remove", id: number}

// type State = Note[];

const NotesReducer = (state: Note[], action: Actions) => {
    switch(action.type){
        case "add":
            return [...state, {content: action.content}]
        case "remove":
            return state.filter( (_ , i) => action.id !== i)
        default:
            return [...state];
    }
}

const Hello: React.FC = ( {  } ) => {

    const [notes, dispatch] = useReducer(NotesReducer, [])

    return (
        <div>
            <h1>Hello</h1>
            <button onClick={ () => {
                dispatch({
                    type: "add",
                    content: "Note 1",
                })
            }}>Button </button>

        </div>
    )   
}

export default Hello;
```
