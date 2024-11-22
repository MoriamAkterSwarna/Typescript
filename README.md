# Typescript কী?

Typescript হলো Microsoft-এর তৈরি একটি প্রোগ্রামিং language, যা JavaScript-এর উপর ভিত্তি করে তৈরি। এটি JavaScript-এর একটি superset, অর্থাৎ JavaScript-এর সব ফিচার Typescript-এ আছে এবং এর সাথে আরও নতুন কিছু সুবিধা যোগ করা হয়েছে। Typescript-এর কোড .ts এক্সটেনশনে লেখা হয়। তবে ব্রাউজার সরাসরি Typescript বুঝতে পারে না, তাই এটিকে JavaScript-এ transpile করতে হয়।

## Typescript-এর সুবিধা (Benefits):

#### 1. পুরোনো ব্রাউজার সাপোর্ট করে:

Transpilation প্রক্রিয়ার মাধ্যমে নতুন ES6+ ফিচারগুলোকে ES5-এ convert করা হয়, যা পুরোনো ব্রাউজারেও সাপোর্ট করে।

#### 2. টাইপ সেফটি:

এটি কোডের safety বাড়ায়। যেমন, আপনি যদি একটি ফাংশনে string টাইপের ডাটা পাঠানোর কথা থাকে কিন্তু number পাঠান, তাহলে কম্পাইল টাইমেই এরর দেখাবে।

#### 3. প্রোডাক্টিভিটি বৃদ্ধি:

- কোড এডিটরে ভালো ইন্টেলিসেন্স সাপোর্ট পাওয়া যায়
- অটো-কমপ্লিশন ফিচার থাকায় দ্রুত কোড লেখা যায়
- কোড মেইনটেইন করা সহজ হয়

#### 4. বাগ কম, টেস্টিং কম:

- কম্পাইল টাইমে অনেক এরর ধরা পড়ে
- টাইপ চেকিং থাকায় রানটাইম এরর কমে যায়
- টেস্টিং এর প্রয়োজনীয়তা কমে যায়

#### 5. বড় প্রোজেক্টের জন্য আদর্শ:

বড় আকারের এন্টারপ্রাইজ প্রোজেক্টে এটি কোডের structure ধরে রাখতে এবং মেইনটেইন করতে বেশ effective.

## Typescript-এর সীমাবদ্ধতা (Drawbacks):

#### ১. টাইপ জটিলতা:

নতুন ডেভেলপারদের জন্য টাইপ সিস্টেম শেখা কঠিন হতে পারে
জটিল টাইপ ডেফিনিশন লেখা চ্যালেঞ্জিং

#### ২. লাইব্রেরি সাপোর্ট:

সব JavaScript লাইব্রেরির TypeScript ডেফিনিশন নাও থাকতে পারে
কিছু লাইব্রেরির টাইপ ডেফিনিশন আপডেট পেতে দেরি হয়

#### ৩. ওভার-ইঞ্জিনিয়ারিং:

অনেক সময় অতিরিক্ত টাইপ লেখার প্রবণতা দেখা যায়
সাধারণ কাজেও বেশি কোড লিখতে হয়

#### ৪. মাইগ্রেশন সমস্যা:

বড় JavaScript প্রজেক্ট TypeScript-এ কনভার্ট করা কঠিন
টিম মেম্বারদের নতুন করে শিখতে হয়

### ব্রাউজার কি TypeScript কোড চিনতে পারে?

না, ব্রাউজার সরাসরি TypeScript কোড রান করতে পারে না। TypeScript কোড প্রথমে একটি কম্পাইলার (tsc) দ্বারা JavaScript-এ কনভার্ট করা হয়। এই JavaScript কোডই ব্রাউজার রান করে। এই প্রসেসকে ট্রান্সপাইলেশন বলা হয়।

### Others:

- TypeScript দিয়ে Object Oriented Programming করা সহজ
- Interface, Generic, Decorator ইত্যাদি পাওয়া যায়
- বড় টিমের প্রজেক্টে খুবই উপকারী


# JavaScript Vs TypeScript 


### **JavaScript**  

1. **পরিচিতি:**  
   - JavaScript হলো একটি ডায়নামিক প্রোগ্রামিং language, যা ওয়েব ব্রাউজারে সরাসরি রান করতে পারে।  
   - এটি মূলত ক্লায়েন্ট-সাইড স্ক্রিপ্টিং-এর জন্য তৈরি হলেও এখন Node.js-এর মাধ্যমে সার্ভার-সাইডেও ব্যবহৃত হয়।  

2. **টাইপ সিস্টেম:**  
   - JavaScript একটি **ডায়নামিক টাইপড language**। অর্থাৎ, ভেরিয়েবলের ডাটা টাইপ নির্ধারণ করার দরকার হয় না।  
     ```javascript
     let x = 10; // x একটি সংখ্যা
     x = "hello"; // এখন x একটি স্ট্রিং
     ```

3. **ব্রাউজার সাপোর্ট:**  
   - JavaScript সরাসরি ব্রাউজার বুঝতে পারে এবং রান করতে পারে।  

4. **সহজ এবং দ্রুত:**  
   - চমৎকার সিনট্যাক্স এবং দ্রুত শেখার সুবিধা থাকার কারণে এটি নতুন ডেভেলপারদের জন্য উপযোগী।  

5. **Error Handling:**  
   - রানটাইমে error ধরা পড়ে, ফলে কোডিংয়ে কিছু সময় error নজরে আসতে দেরি হয়।  

---

### **TypeScript**  

1. **পরিচিতি:**  
   - TypeScript হলো JavaScript-এর একটি superset, যা মাইক্রোসফট তৈরি করেছে।  
   - এটি JavaScript-এর সকল ফিচার রয়েছে, কিন্তু এতে অতিরিক্ত ফিচার যেমন টাইপ চেকিং, ইন্টারফেস, ক্লাস ইত্যাদি যোগ করা হয়েছে।  

2. **টাইপ সিস্টেম:**  
   - TypeScript একটি **স্ট্যাটিক টাইপড language**। অর্থাৎ, ভেরিয়েবলের ডাটা টাইপ নির্ধারণ করতে হয়।  
     ```typescript
     let x: number = 10; // x শুধুমাত্র সংখ্যা হতে পারে
     x = "hello"; // ত্রুটি: "string" টাইপ "number"-এর সাথে মেলে না।
     ```

3. **ব্রাউজার সাপোর্ট:**  
   - TypeScript সরাসরি ব্রাউজার বুঝতে পারে না। এটি **transpile** করে JavaScript-এ রূপান্তর করতে হয়।  

4. **বড় প্রজেক্টের জন্য উপযোগী:**  
   - বড় এবং জটিল প্রজেক্টে TypeScript-এর স্ট্রাকচার এবং টাইপ সিস্টেম অনেক সুবিধা দেয়।  

5. **Error Handling:**  
   - কোড লেখার সময়েই error চিহ্নিত হয় (compile-time error), তাই runtime error-এর সম্ভাবনা কমে।  

---

### **JavaScript এবং TypeScript-এর তুলনা:**

| **Key**             | **JavaScript**                                     | **TypeScript**                                  |
|-------------------------|---------------------------------------------------|------------------------------------------------|
| **টাইপ সিস্টেম**       | Dynamic Typed                                  | Static Typed                                |
| **Error Handling**      | রানটাইমে error ধরা পড়ে                          | কম্পাইল টাইমে error ধরা পড়ে                  |
| **কোডের জটিলতা**       | তুলনামূলকভাবে সহজ                               | কোড কিছুটা জটিল হতে পারে                      |
| **ব্রাউজার সাপোর্ট**   | সরাসরি ব্রাউজারে রান করতে পারে                   | ব্রাউজার বুঝতে পারে না, JavaScript-এ transpile করতে হয় |
| **শেখা এবং ব্যবহার**    | শেখা সহজ এবং দ্রুত                               | শেখা একটু সময়সাপেক্ষ, তবে শক্তিশালী           |
| **উপযোগিতা**           | ছোট এবং সাধারণ প্রজেক্টে কার্যকর                 | বড় এবং জটিল প্রজেক্টে কার্যকর                 |
| **অতিরিক্ত ফিচার**     | OOP এবং টাইপিং সীমিত                             | OOP এবং টাইপিং ভালোভাবে সাপোর্ট করে           |

---

### **কোনটি বেছে নেবেন?**  
1. **JavaScript**:  
   - যদি আপনি ছোট প্রজেক্ট করেন বা নতুন ডেভেলপার হন।  
   - যদি ব্রাউজারে সরাসরি কোড রান করানোর প্রয়োজন হয়।  

2. **TypeScript**:  
   - যদি বড় প্রজেক্ট করেন যেখানে স্ট্রাকচার মেইনটেইন করতে হবে।  
   - যদি স্ট্যাটিক টাইপিং প্রয়োজন হয় এবং less error এ কোড লিখতে চান।  

---

** মূল কথা:**  
TypeScript হলো JavaScript-এর একটি উন্নত সংস্করণ, যা স্ট্রাকচারড এবং স্কেলেবল কোড লিখতে সাহায্য করে। তবে, TypeScript শেখার আগে JavaScript ভালোভাবে জানা জরুরি। 😊


---


### **TypeScript-এ Implicit এবং Explicit Data Types**  

TypeScript-এ ডাটা টাইপ ব্যবহারের দুটি প্রধান পদ্ধতি রয়েছে: **Implicit** এবং **Explicit** এরা TypeScript-এর টাইপ সিস্টেমকে define করতে সাহায্য করে।

---

### **1. Implicit Data Types :**

 
Implicit টাইপিং মানে আপনি টাইপ সরাসরি উল্লেখ না করলেও TypeScript সেটি নির্ধারণ করতে পারে। এটি টাইপ ইনফারেন্স-এর মাধ্যমে ডাটা টাইপ automatically ধরে নেয়।  

#### **উদাহরণ:**
```typescript
let name = "Rahim"; // TypeScript ধরে নিয়েছে name হলো string।
let age = 25;       // এখানে age টাইপ হিসেবে number ধরে নিয়েছে।
let isStudent = true; // TypeScript isStudent কে boolean হিসাবে ধরেছে।
```

**কীভাবে কাজ করে:**  
- TypeScript ডাটা টাইপ ইনফার করার জন্য ভেরিয়েবলে দেওয়া মানের উপর নির্ভর করে।  
- এই পদ্ধতি কোড লেখাকে দ্রুত এবং সহজ করে তোলে।  

**Benefits:**  
- টাইপ নির্ধারণ করার প্রয়োজন হয় না, ফলে কোড সহজ এবং পরিষ্কার থাকে।  
- ছোট এবং সাধারণ কোডের জন্য কার্যকর।  

**Drawbacks:**  
- যদি ডেভেলপার ভুল টাইপ ইনফার করে, তবে সমস্যার সম্ভাবনা থাকে।  

---

### **2. Explicit Data Types :**

  
Explicit টাইপিং মানে, ডেভেলপার সরাসরি টাইপ উল্লেখ করে দেয়। এতে TypeScript জানে যে একটি ভেরিয়েবল কী ধরনের ডাটা ধারণ করবে।  

#### **উদাহরণ:**
```typescript
let name: string = "Rahim"; // এখানে টাইপটি সরাসরি উল্লেখ করা হয়েছে।
let age: number = 25;       // age এর জন্য টাইপ নির্ধারণ করা হয়েছে number।
let isStudent: boolean = true; // isStudent এর টাইপ boolean বলা হয়েছে।
```

**কীভাবে কাজ করে:**  
- টাইপ সরাসরি উল্লেখ করার কারণে TypeScript নির্ধারিত টাইপের বাইরে অন্য কোনো ডাটা allow করে না।  
- এই পদ্ধতি ডেভেলপারের জন্য ডাটা টাইপের উপর সম্পূর্ণ control দেয়।  

**Benefits:**  
- টাইপ সংক্রান্ত ভুল কম হয়, কারণ টাইপ পূর্বেই নির্ধারণ করা থাকে।  
- বড় এবং জটিল প্রজেক্টে স্ট্রাকচার ধরে রাখতে সাহায্য করে।  

**Drawbacks:**  
- কিছুটা বেশি টাইপিং লাগে, ফলে কোড লেখা সময়সাপেক্ষ হতে পারে।  

---

### **Implicit এবং Explicit-এর তুলনা:**

| **Key**              | **Implicit**                              | **Explicit**                             |
|--------------------------|-------------------------------------------|------------------------------------------|
| **টাইপ উল্লেখ করা**     | টাইপ সরাসরি উল্লেখ করা হয় না।             | টাইপ সরাসরি উল্লেখ করা হয়।              |
| **কোডের Simplicity**         | কোড সহজ এবং ছোট।                         | টাইপ define করার কারণে কোড কিছুটা বড় হয়।   |
| **ডাটা টাইপ কন্ট্রোল**   | TypeScript টাইপ নির্ধারণ করে।             | ডেভেলপার টাইপ কন্ট্রোল করে।            |
| **Error এর সম্ভাবনা**     | টাইপ ভুল ইনফার হলে error হতে পারে।       | টাইপ সঠিকভাবে define করায় error কম হয়। |
| **ব্যবহার **      | ছোট ও সাধারণ প্রোজেক্ট          | বড় এবং জটিল প্রোজেক্ট         |

---

### **উদাহরণ: Implicit এবং Explicit একসঙ্গে ব্যবহার**

```typescript
// Implicit টাইপিং:
let city = "Dhaka"; // TypeScript ধরে নিচ্ছে এটা string।
let population = 1000000; // এটা number হিসেবে ইনফার করা হয়েছে।

// Explicit টাইপিং:
let country: string = "Bangladesh"; // সরাসরি টাইপ উল্লেখ।
let area: number = 147570;         // টাইপ number বলে দেওয়া হয়েছে।
```

---

### **কোনটি বেছে নেবেন?**

1. **Implicit টাইপিং ব্যবহার করুন:**  
   - যদি কোড ছোট এবং সহজ হয়।  
   - দ্রুত কোড লিখতে চান।  

2. **Explicit টাইপিং ব্যবহার করুন:**  
   - যদি প্রজেক্ট বড় হয়।  
   - ডাটা টাইপের উপর সম্পূর্ণ নিয়ন্ত্রণ রাখতে চান।  
   - টাইপিং ভুলের ঝুঁকি কমাতে চান।  

---

**Conclusion:**  
Implicit এবং Explicit টাইপিং TypeScript-এর শক্তিশালী টাইপ সিস্টেমের অংশ। উভয়েরই নির্দিষ্ট ক্ষেত্রে নিজস্ব সুবিধা রয়েছে। তাই, নির্দিষ্ট প্রজেক্টের প্রয়োজন অনুযায়ী এই দুটি পদ্ধতি সঠিকভাবে ব্যবহার করতে হবে। 😊

--- 

### **Data Types in TypeScript**  

TypeScript একটি **statically typed** language, যেখানে ডাটা টাইপ আগে থেকেই নির্ধারণ করা হয়। এটি ডেভেলপারকে ডাটা টাইপ নিয়ে আরও বেশি control দেয় এবং কোড লেখার সময় error ধরা সহজ করে। নিচে TypeScript-এর বিভিন্ন ডাটা টাইপ:

---

### **1. Primitive Data Types:**  
এগুলো TypeScript-এর মৌলিক ডাটা টাইপ।  

#### **a. `number`**  
TypeScript-এ সব ধরনের সংখ্যার জন্য একই ডাটা টাইপ ব্যবহার করা হয়, যেমন পূর্ণসংখ্যা, দশমিক সংখ্যা।  
```typescript
let age: number = 25;
let price: number = 99.99;
```

#### **b. `string`**  
টেক্সট ডেটার জন্য ব্যবহার করা হয়।  
```typescript
let name: string = "John";
let greeting: string = `Hello, ${name}!`;
```

#### **c. `boolean`**  
সত্য বা মিথ্যার জন্য।  
```typescript
let isActive: boolean = true;
let isComplete: boolean = false;
```

#### **d. `null`**  
`null` মানে কোনো মান নেই।  
```typescript
let emptyValue: null = null;
```

#### **e. `undefined`**  
`undefined` মানে ভেরিয়েবল ডিক্লেয়ার করা হয়েছে কিন্তু কোনো মান দেওয়া হয়নি।  
```typescript
let notAssigned: undefined = undefined;
```

#### **f. `symbol`**  
TypeScript-এ **unique** এবং immutable আইডেন্টিফায়ার তৈরি করতে ব্যবহার হয়।  
```typescript
let uniqueKey: symbol = Symbol("key");
```

#### **g. `bigint`**  
অনেক বড় সংখ্যার জন্য ব্যবহার করা হয়।  
```typescript
let bigNumber: bigint = 9007199254740991n;
```

---

### **2. Special Types:**  

#### **a. `any`**  
যেকোনো ধরনের ডেটা ধরে রাখতে পারে। তবে এটি টাইপ সেফটির বাইরে থাকে, তাই সাবধানে ব্যবহার করা উচিত।  
```typescript
let randomValue: any = 42;
randomValue = "A string now!";
```

#### **b. `unknown`**  
`unknown` হলো একটি নিরাপদ টাইপ, যেখানে আপনি জানেন না ডাটা টাইপ কী। এটি `any`-এর তুলনায় বেশি সেফ।  
```typescript
let uncertainValue: unknown = 10;
if (typeof uncertainValue === "number") {
  let confirmedValue: number = uncertainValue; // Type checking করার পর ব্যবহার করা যায়।
}
```

#### **c. `void`**  
কোনো ফাংশন যদি কিছুই রিটার্ন না করে, তাহলে তার রিটার্ন টাইপ `void` হয়।  
```typescript
function logMessage(message: string): void {
  console.log(message);
}
```

#### **d. `never`**  
কোনো ফাংশন কখনোই কোনো মান রিটার্ন করবে না, যেমন: Error থ্রো করা।  
```typescript
function throwError(message: string): never {
  throw new Error(message);
}
```

---

### **3. Non-Primitive/ Reference Data Types:**  

#### **a. Arrays**  
TypeScript-এ অ্যারেগুলোর জন্য টাইপ উল্লেখ করা হয়।  
```typescript
let numbers: number[] = [1, 2, 3, 4];
let strings: Array<string> = ["one", "two", "three"];
```

#### **b. Tuples**  
Tuples হলো নির্দিষ্ট সংখ্যক এবং নির্দিষ্ট টাইপের ভ্যালুর গ্রুপ।  
```typescript
let tupleExample: [string, number] = ["Alice", 25];
```

#### **c. Objects**  
Objects-এ টাইপ ডিফাইন করে প্রোপার্টি উল্লেখ করা হয়।  
```typescript
let person: { name: string; age: number } = {
  name: "John",
  age: 30,
};
```

---

### **4. Union and Intersection Types:**  

#### **a. Union Type**  
একাধিক টাইপের মধ্যে যেকোনো একটি টাইপ গ্রহণ করতে পারে।  
```typescript
let unionExample: number | string = "Hello";
unionExample = 42; // ঠিক আছে।
```

#### **b. Intersection Type**  
একাধিক টাইপের বৈশিষ্ট্য একত্রিত করতে ব্যবহার করা হয়।  
```typescript
type Person = { name: string };
type Employee = { id: number };
type EmployeePerson = Person & Employee;

let employee: EmployeePerson = { name: "John", id: 101 };
```

---

### **5. Type Aliases and Enums:**  

#### **a. Type Aliases**  
কাস্টম টাইপ তৈরি করতে ব্যবহার করা হয়।  
```typescript
type StringOrNumber = string | number;
let value: StringOrNumber = 123;
value = "Hello";
```

#### **b. Enums**  
সংশ্লিষ্ট ভ্যালুগুলোর একটি সেট তৈরি করতে।  
```typescript
enum Color {
  Red,
  Green,
  Blue,
}
let favoriteColor: Color = Color.Green;
```

---

### **6. Literal Types:**  
নির্দিষ্ট মান নির্ধারণ করতে।  
```typescript
let direction: "left" | "right" = "left";
// direction = "up"; // ভুল হবে।
```

---

### **Nullable Types in TypeScript (Bangla)**

TypeScript-এ **nullable types** এমন ডাটা টাইপ যা `null` বা `undefined` মান ধারণ করতে পারে। এগুলো টাইপ সেফটি উন্নত করতে সাহায্য করে, কারণ এটি আপনাকে স্পষ্টভাবে জানিয়ে দেয় যে কোনো ভেরিয়েবল বা প্রপার্টি `null` বা `undefined` হতে পারে।

---

### **1. Null এবং Undefined in TypeScript**  
- **`null`:** এটি একটি ইচ্ছাকৃতভাবে খালি বা মানহীন মান।  
- **`undefined`:** এটি এমন একটি মান যা কোনো ভেরিয়েবলে অ্যাসাইন করা হয়নি, অর্থাৎ মান দেওয়া হয়নি।  

ডিফল্টভাবে, TypeScript **`strictNullChecks`** সক্রিয় থাকলে `null` এবং `undefined` অন্য টাইপের অংশ নয়।

#### **StrictNullChecks ছাড়া:**  
যখন `strictNullChecks` নিষ্ক্রিয় থাকে, তখন `null` এবং `undefined` যেকোনো ভেরিয়েবলে অ্যাসাইন করা যায়।  
```typescript
let value: string = null; // strictNullChecks ছাড়া সম্ভব।
value = undefined; // strictNullChecks ছাড়া সম্ভব।
```

#### **StrictNullChecks-সহ:**  
যখন `strictNullChecks` সক্রিয় থাকে, তখন `null` এবং `undefined` স্পষ্টভাবে টাইপের মধ্যে থাকতে হবে।  
```typescript
let value: string | null = null; // এখানে স্পষ্টভাবে null টাইপ উল্লেখ করতে হবে।
value = "Hello"; // সঠিক
value = undefined; // ত্রুটি: 'undefined' টাইপ 'string | null'-এ অ্যাসাইন করা যায় না।
```

---

### **2. Declaring Nullable Types**  
Nullable টাইপ ডিক্লেয়ার করতে **union type** ব্যবহার করতে হয়, যাতে `null` বা `undefined` অন্তর্ভুক্ত থাকে।  

#### **উদাহরণ:**  
```typescript
let name: string | null = null; // এখানে name হতে পারে string বা null।
let age: number | undefined = undefined; // এখানে age হতে পারে number বা undefined।
```

---

### **3. Optional Properties এবং Parameters**  
- **Optional Properties:**  
অবজেক্টের প্রপার্টি অপশনাল করা যায়, এবং যদি প্রপার্টি না থাকে, তাহলে তা `undefined` থাকবে।  

```typescript
interface User {
  name: string;
  age?: number; // Optional property
}

let user1: User = { name: "Alice" }; // age নেই, এটা undefined হবে।
let user2: User = { name: "Bob", age: 25 }; // age রয়েছে, সঠিক।
```

- **Optional Parameters:**  
ফাংশনের প্যারামিটারও অপশনাল হতে পারে।  

```typescript
function greet(name?: string): string {
  return name ? `Hello, ${name}!` : "Hello, Guest!";
}

console.log(greet()); // "Hello, Guest!"
console.log(greet("Alice")); // "Hello, Alice!"
```

---

### **4. Null-Checking Techniques**  
Nullable টাইপ ব্যবহার করার আগে, তার `null` বা `undefined` চেক করা উচিত যাতে রানটাইম ত্রুটি না হয়।  

#### **Conditional Statements ব্যবহার করে:**  
```typescript
function printLength(input: string | null): void {
  if (input !== null) {
    console.log(input.length);
  } else {
    console.log("Input is null");
  }
}
```

#### **Type Guards ব্যবহার করে:**  
```typescript
function isNumber(value: string | number | null): void {
  if (typeof value === "number") {
    console.log("It's a number:", value);
  } else if (value === null) {
    console.log("It's null");
  } else {
    console.log("It's a string:", value);
  }
}
```

---

### **5. Null Coalescing Operator (`??`)**  
`??` অপারেটরটি `null` বা `undefined` হলে ডিফল্ট মান ব্যবহার করতে সাহায্য করে।  

#### **উদাহরণ:**  
```typescript
let message: string | null = null;
let defaultMessage = message ?? "Default Message";
console.log(defaultMessage); // "Default Message"
```

---

### **6. Optional Chaining (`?.`)**  
Optional chaining ব্যবহার করলে আপনি `null` বা `undefined` চেক না করেও অবজেক্টের প্রপার্টি অ্যাক্সেস করতে পারেন। এটি আপনার কোডকে আরও নিরাপদ এবং রিডেবল করে তোলে।  

#### **উদাহরণ:**  
```typescript
let user: { name?: string } = {};
console.log(user.name?.toUpperCase()); // undefined (এখানে ত্রুটি হবে না)
```

---

### **7. Never Type in Nullable Context**  
যেসব ফাংশন কখনো রিটার্ন করে না বা সবসময় ত্রুটি ফেলে, তাদের রিটার্ন টাইপ `never` হতে পারে। এটি nullable টাইপের সঙ্গে মিলিয়ে বিশেষ কিছু ক্ষেত্রে ব্যবহার করা যায়।  

#### **উদাহরণ:**  
```typescript
function throwError(message: string): never {
  throw new Error(message);
}
```

---

### **8. Advantages of Nullable Types**  
- `null` এবং `undefined` হ্যান্ডেল করার সময় নিরাপত্তা বাড়ায়।  
- `null` ডেরিফেন্সের কারণে রানটাইম ত্রুটি কমে।  
- স্পষ্টভাবে nullable ভেরিয়েবল ডিক্লেয়ার করার মাধ্যমে কোড পরিষ্কার হয়।  

---

### **9. Common Use Cases**  
- API থেকে এমন মান আসতে পারে যা `null` হতে পারে।  
- কনফিগারেশন অবজেক্টের অপশনাল প্রপার্টি।  
- ফাংশনে ডিফল্ট প্যারামিটার ভ্যালু।  

---

