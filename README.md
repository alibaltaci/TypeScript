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
