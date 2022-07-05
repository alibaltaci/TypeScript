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



