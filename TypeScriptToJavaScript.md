# TS kodlarını derleyici yardımı ile JS 'ye çevirme (compile) (to ES5)

cmd --> `` tsc main.ts main.js `` ya da sadece `` tsc main.ts ``

* İşlemden sonra iki dosya da aynı anda açık olursa, benzer fonksiyonlar kullanıldığı için hata gösterir. Biri kapatıldığı anda hata gider. 

* JS dosyamızı çalıştıralım

cmd --> `` node main.js ``

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