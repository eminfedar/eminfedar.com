---
templateKey: blog-post
path: /c++11-auto
title: "C++11: auto"
image: "/static/img/cpp/cpp11/kapak-auto.png"
tags: ["C++","C++11"]
date: 2020-03-10T12:00:03.066Z
description: C++11'de gelen "auto" keywordü nedir?
---
Merhabalar, bu yazıda C++11 sürümünde dile eklenmiş `auto` keywordünü inceleyeceğiz.

---
## Ne işe yarar?
1. Değişken **tipinin** derleyici tarafından otomatik tanımlanmasını sağlar:

```cpp
int a = 5;
auto b = a;

typeid(a) == typeid(b); // true

```

2. Uzun tip tanımlamalarından kurtarır:

```cpp
class UzunBirSinifAdi {};

// Açık tanım:
UzunBirSinifAdi* nesne2 = new UzunBirSinifAdi;
// Auto:
auto nesne = new UzunBirSinifAdi;

typeid(nesne) == typeid(nesne2); // true
```
1. **Container** tipindeki değişkenlerin içini gezerken kolaylık sağlar:

```cpp
std::vector<int> dizi = { 1, 2, 3 };

// Açık tanım (explicit)
for (std::vector<int>::iterator i = dizi.begin(); i != dizi.end(); i++)
{
    std::cout << *i << ", ";
}
// 1, 2, 3,

// Auto
for (auto i = dizi.begin(); i != dizi.end(); i++)
{
    std::cout << *i << ", ";
}
// 1, 2, 3,

// En temizi:
for (auto i : dizi)
{
    std::cout << i << ", ";
}
// 1, 2, 3,
```

Dikkat, saf dizilerde for bu şekilde dönülemez:
```cpp
int normalDizi[3] = { 1, 2, 3 };

for (auto i: normalDizi)
{
    std::cout << i << ", ";
}
// ERROR: this range-based 'for' statement requires a suitable "begin" function and none was found
```

---

## Ne değildir?
1. Javascript'teki **var, let** değildir:

```cpp
auto a = 5;
a = "Selam"; // Error: a value of type "const char *" cannot be assigned to an entity of type "int"
```
2. Performans katili değildir:

**auto kullanımı sonucu derlenen assembly kodu:**
```cpp
int main()
{
    auto a = 5;
}

// Assembly:
0000000000000000 <main>:
   0:	f3 0f 1e fa          	endbr64 
   4:	55                   	push   rbp
   5:	48 89 e5             	mov    rbp,rsp
   8:	c7 45 fc 05 00 00 00 	mov    DWORD PTR [rbp-0x4],0x5
   f:	b8 00 00 00 00       	mov    eax,0x0
  14:	5d                   	pop    rbp
  15:	c3                   	ret    
```
**int kullanımı sonucu derlenen assembly kodu:**
```cpp
int main()
{
    int a = 5;
}

// Assembly:
0000000000000000 <main>:
   0:	f3 0f 1e fa          	endbr64 
   4:	55                   	push   rbp
   5:	48 89 e5             	mov    rbp,rsp
   8:	c7 45 fc 05 00 00 00 	mov    DWORD PTR [rbp-0x4],0x5
   f:	b8 00 00 00 00       	mov    eax,0x0
  14:	5d                   	pop    rbp
  15:	c3                   	ret
```
Gördüğünüz üzere derlenen kod tamamen aynı. Çünkü auto ekstra bir değişken dönüşümü veya tarama yapmaz. Değer tipi neyse değişkenin tipini ona eşitler.
## Artıları:
1. Uzun değişken isimlerinin görüntü ve yazım karışıklığından kurtarma
2. Temiz görünüm
3. Her tipi aynı şekilde **tekrar tekrar** yazmaktan kurtarır

```cpp
// Hele şöyle bir şey tanımlıyorsanız:
std::vector<std::map<int, std::vector<int>>> a = ...;

// direk auto de geç ya:
auto a = ...;
```

## Eksileri:
1. Okuyucu için karışıklık oluşturabilir

```cpp
auto a = birFonksiyon("selam"); // buradan ne dönüyor acaba??

std::string b = birFonksiyon("selam"); // ne döndüğü gayet açık.
```
2. Dışarıdan kullanılan fonksiyonların dönüşlerinde kafa karışıklığı yapabilir:

```cpp
#include <kutuphanefalan.h>

auto buneMesela = kutuphaneFonku(1, "abc");
auto bunePeki = kutuphaneFonku(1);
// İsimleri aynı fakat overload edilmiş dönüş tipleri farklı olabilir?

typeid(buneMesela) == typeid(bunePeki); // ???
// Bilemiyoruz çünkü fonksiyon başka parametrelerde başka tip döndürüyor olabilir?
```