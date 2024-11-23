# Typescript কী?

Typescript হলো Microsoft-এর তৈরি একটি প্রোগ্রামিং language, যা JavaScript-এর উপর ভিত্তি করে তৈরি। এটি JavaScript-এর একটি superset, অর্থাৎ JavaScript-এর সব ফিচার Typescript-এ আছে এবং এর সাথে আরও নতুন কিছু সুবিধা add করা হয়েছে। Typescript-এর কোড .ts এক্সটেনশনে লেখা হয়। তবে ব্রাউজার সরাসরি Typescript বুঝতে পারে না, তাই এটিকে JavaScript-এ transpile করতে হয়।

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

## Typescript-এর limitedতা (Drawbacks):

#### ১. টাইপ complexতা:

নতুন ডেভেলপারদের জন্য টাইপ সিস্টেম শেখা কঠিন হতে পারে
complex টাইপ ডেফিনিশন লেখা চ্যালেঞ্জিং

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

   - চমৎকার সিনট্যাক্স এবং দ্রুত শেখার সুবিধা থাকার কারণে এটি নতুন ডেভেলপারদের জন্য উপaddী।

5. **Error Handling:**
   - রানটাইমে error ধরা পড়ে, ফলে কোডিংয়ে কিছু সময় error নজরে আসতে দেরি হয়।

---

### **TypeScript**

1. **পরিচিতি:**

   - TypeScript হলো JavaScript-এর একটি superset, যা মাইক্রোসফট তৈরি করেছে।
   - এটি JavaScript-এর সকল ফিচার রয়েছে, কিন্তু এতে অতিরিক্ত ফিচার যেমন টাইপ চেকিং, ইন্টারফেস, ক্লাস ইত্যাদি add করা হয়েছে।

2. **টাইপ সিস্টেম:**

   - TypeScript একটি **স্ট্যাটিক টাইপড language**। অর্থাৎ, ভেরিয়েবলের ডাটা টাইপ নির্ধারণ করতে হয়।
     ```typescript
     let x: number = 10; // x শুধুমাত্র সংখ্যা হতে পারে
     x = "hello"; // ত্রুটি: "string" টাইপ "number"-এর সাথে মেলে না।
     ```

3. **ব্রাউজার সাপোর্ট:**

   - TypeScript সরাসরি ব্রাউজার বুঝতে পারে না। এটি **transpile** করে JavaScript-এ রূপান্তর করতে হয়।

4. **বড় প্রজেক্টের জন্য উপaddী:**

   - বড় এবং complex প্রজেক্টে TypeScript-এর স্ট্রাকচার এবং টাইপ সিস্টেম অনেক সুবিধা দেয়।

5. **Error Handling:**
   - কোড লেখার সময়েই error চিহ্নিত হয় (compile-time error), তাই runtime error-এর সম্ভাবনা কমে।

---

### **JavaScript এবং TypeScript-এর তুলনা:**

| **Key**              | **JavaScript**                   | **TypeScript**                                         |
| -------------------- | -------------------------------- | ------------------------------------------------------ |
| **টাইপ সিস্টেম**     | Dynamic Typed                    | Static Typed                                           |
| **Error Handling**   | রানটাইমে error ধরা পড়ে           | কম্পাইল টাইমে error ধরা পড়ে                            |
| **কোডের complexতা**  | তুলনামূলকভাবে সহজ                | কোড কিছুটা complex হতে পারে                            |
| **ব্রাউজার সাপোর্ট** | সরাসরি ব্রাউজারে রান করতে পারে   | ব্রাউজার বুঝতে পারে না, JavaScript-এ transpile করতে হয় |
| **শেখা এবং ব্যবহার** | শেখা সহজ এবং দ্রুত               | শেখা একটু সময়সাপেক্ষ, তবে strong                       |
| **উপaddিতা**         | ছোট এবং সাধারণ প্রজেক্টে কার্যকর | বড় এবং complex প্রজেক্টে কার্যকর                       |
| **অতিরিক্ত ফিচার**   | OOP এবং টাইপিং সীমিত             | OOP এবং টাইপিং ভালোভাবে সাপোর্ট করে                    |

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
TypeScript হলো JavaScript-এর একটি improve সংস্করণ, যা স্ট্রাকচারড এবং স্কেলেবল কোড লিখতে সাহায্য করে। তবে, TypeScript শেখার আগে JavaScript ভালোভাবে জানা জরুরি। 😊

---

### **TypeScript-এ Implicit এবং Explicit Data Types**

TypeScript-এ ডাটা টাইপ ব্যবহারের দুটি প্রধান পদ্ধতি রয়েছে: **Implicit** এবং **Explicit** এরা TypeScript-এর টাইপ সিস্টেমকে define করতে সাহায্য করে।

---

### **1. Implicit Data Types :**

Implicit টাইপিং মানে আপনি টাইপ সরাসরি উল্লেখ না করলেও TypeScript সেটি নির্ধারণ করতে পারে। এটি টাইপ ইনফারেন্স-এর মাধ্যমে ডাটা টাইপ automatically ধরে নেয়।

#### **উদাহরণ:**

```typescript
let name = "Rahim"; // TypeScript ধরে নিয়েছে name হলো string।
let age = 25; // এখানে age টাইপ হিসেবে number ধরে নিয়েছে।
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
let age: number = 25; // age এর জন্য টাইপ নির্ধারণ করা হয়েছে number।
let isStudent: boolean = true; // isStudent এর টাইপ boolean বলা হয়েছে।
```

**কীভাবে কাজ করে:**

- টাইপ সরাসরি উল্লেখ করার কারণে TypeScript নির্ধারিত টাইপের বাইরে অন্য কোনো ডাটা allow করে না।
- এই পদ্ধতি ডেভেলপারের জন্য ডাটা টাইপের উপর সম্পূর্ণ control দেয়।

**Benefits:**

- টাইপ সংক্রান্ত ভুল কম হয়, কারণ টাইপ পূর্বেই নির্ধারণ করা থাকে।
- বড় এবং complex প্রজেক্টে স্ট্রাকচার ধরে রাখতে সাহায্য করে।

**Drawbacks:**

- কিছুটা বেশি টাইপিং লাগে, ফলে কোড লেখা সময়সাপেক্ষ হতে পারে।

---

### **Implicit এবং Explicit-এর তুলনা:**

| **Key**                | **Implicit**                       | **Explicit**                             |
| ---------------------- | ---------------------------------- | ---------------------------------------- |
| **টাইপ উল্লেখ করা**    | টাইপ সরাসরি উল্লেখ করা হয় না।      | টাইপ সরাসরি উল্লেখ করা হয়।               |
| **কোডের Simplicity**   | কোড সহজ এবং ছোট।                   | টাইপ define করার কারণে কোড কিছুটা বড় হয়। |
| **ডাটা টাইপ কন্ট্রোল** | TypeScript টাইপ নির্ধারণ করে।      | ডেভেলপার টাইপ কন্ট্রোল করে।              |
| **Error এর সম্ভাবনা**  | টাইপ ভুল ইনফার হলে error হতে পারে। | টাইপ সঠিকভাবে define করায় error কম হয়।   |
| **ব্যবহার **           | ছোট ও সাধারণ প্রোজেক্ট             | বড় এবং complex প্রোজেক্ট                 |

---

### **উদাহরণ: Implicit এবং Explicit একসঙ্গে ব্যবহার**

```typescript
// Implicit টাইপিং:
let city = "Dhaka"; // TypeScript ধরে নিচ্ছে এটা string।
let population = 1000000; // এটা number হিসেবে ইনফার করা হয়েছে।

// Explicit টাইপিং:
let country: string = "Bangladesh"; // সরাসরি টাইপ উল্লেখ।
let area: number = 147570; // টাইপ number বলে দেওয়া হয়েছে।
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
Implicit এবং Explicit টাইপিং TypeScript-এর strong টাইপ সিস্টেমের অংশ। উভয়েরই নির্দিষ্ট ক্ষেত্রে নিজস্ব সুবিধা রয়েছে। তাই, নির্দিষ্ট প্রজেক্টের প্রয়োজন অনুযায়ী এই দুটি পদ্ধতি সঠিকভাবে ব্যবহার করতে হবে। 😊

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

TypeScript-এ **nullable types** এমন ডাটা টাইপ যা `null` বা `undefined` মান ধারণ করতে পারে। এগুলো টাইপ সেফটি improve করতে সাহায্য করে, কারণ এটি আপনাকে স্পষ্টভাবে জানিয়ে দেয় যে কোনো ভেরিয়েবল বা প্রপার্টি `null` বা `undefined` হতে পারে।

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

## Type Assertion

**Type Assertion** হচ্ছে TypeScript-এ একটি উপায় যা দ্বারা আপনি কম্পাইলারকে বলছেন, "আমি জানি এই ভ্যারিয়েবলের টাইপ কি হবে, তুমি এটা নিয়ে চিন্তা করো না।" এটি মূলত আপনার কাছে জানা থাকা টাইপের ইনফর্মেশন কম্পাইলারকে সরবরাহ করার জন্য ব্যবহৃত হয়।

---

### **Type Assertion-এর syntax**

TypeScript-এ Type Assertion দুইভাবে লেখা যায়ঃ

1. **Angle-bracket syntax**

   ```typescript
   let someValue: any = "Hello, TypeScript!";
   let stringLength: number = (<string>someValue).length;
   ```

2. **`as` syntax**
   ```typescript
   let someValue: any = "Hello, TypeScript!";
   let stringLength: number = (someValue as string).length;
   ```

---

### **Type Assertion-এর প্রয়োজন কেন হয়?**

TypeScript-এর টাইপ সিস্টেম অনেক ক্ষেত্রে স্ট্যাটিক্যালি টাইপ ইন্টারফেস করে, কিন্তু কখনো কখনো আপনি নিশ্চিত জানেন যে একটি ভ্যারিয়েবল একটি নির্দিষ্ট টাইপ হবে, যদিও কম্পাইলার তা বুঝতে পারে না। এই ক্ষেত্রে Type Assertion ব্যবহার করা হয়।

#### উদাহরণ:

1. **`any` টাইপে কাজ করার সময়:**
   যখন একটি ভ্যারিয়েবলের টাইপ `any` থাকে এবং আপনি জানেন এটি আসলে একটি নির্দিষ্ট টাইপ হবে।

   ```typescript
   let someValue: any = "Hello, TypeScript!";
   let stringLength: number = (someValue as string).length;
   ```

2. **DOM manipulation এর সময়:**
   যখন আপনি HTML elements নিয়ে কাজ করছেন এবং TypeScript সেই এলিমেন্টের সঠিক টাইপ ধরতে পারছে না।

   ```typescript
   let inputElement = document.getElementById("username") as HTMLInputElement;
   inputElement.value = "Hello!";
   ```

3. **API থেকে ডেটা আসার পর:**
   API থেকে আসা ডেটা টাইপ `any` হতে পারে, কিন্তু আপনি জানেন এটি কোন নির্দিষ্ট ফরম্যাটে আসবে।

   ```typescript
   interface User {
     id: number;
     name: string;
   }

   let userData: any = fetchUserData(); // hypothetical function
   let user = userData as User;
   console.log(user.name);
   ```

---

### **Type Assertion কেন ব্যবহার করবো?**

1. **কম্পাইলারকে সঠিক টাইপের নিশ্চয়তা দিতে।**  
   আপনি যদি জানেন যে আপনার ডেটার টাইপ নির্দিষ্ট, তাহলে TypeScript-কে সেটা জানাতে পারবেন।

2. **বাগ এড়াতে সাহায্য করতে।**  
   সঠিক টাইপ অ্যাসার্ট করলে আপনি ডেটা ম্যানিপুলেশনে ভুলের সম্ভাবনা কমাতে পারবেন।

3. **কোডের রিডেবিলিটি বাড়ায়।**  
   Type Assertion ব্যবহার করলে এটি স্পষ্ট হয় যে আপনি ডেটার টাইপ সম্পর্কে নিশ্চিত।

---

### **কখন Type Assertion ব্যবহার করা উচিত নয়?**

- আপনি যদি পুরোপুরি নিশ্চিত না হন যে টাইপটি সঠিক, তাহলে Type Assertion ব্যবহার করবেন না। এটি রানটাইমে এরর তৈরি করতে পারে।
- `any` টাইপের অত্যাধিক ব্যবহার এড়ানোর জন্য Type Assertion কম প্রয়োজন হয় এমনভাবে কোড লেখা উচিত।

---

### **What is an Interface in TypeScript?**

**Interface** হলো TypeScript-এর একটি বৈশিষ্ট্য যা একটি অবজেক্ট, ফাংশন, বা ক্লাসের কাঠামো (shape) নির্ধারণ করতে ব্যবহৃত হয়। এটি এমন এক ধরনের কন্ট্রাক্ট বা ব্লুপ্রিন্ট যা বলে দেয়, একটি অবজেক্টে কোন কোন প্রোপার্টি থাকবে এবং তাদের টাইপ কী হবে।

---

### **কেন আমরা Interface ব্যবহার করি?**

1. **স্ট্রাকচার ডিফাইন করার জন্য**  
   Interface অবজেক্ট বা ক্লাসের জন্য একটি নির্দিষ্ট স্ট্রাকচার ডিফাইন করে, যা কোডের রিডেবিলিটি এবং মেইনটেনেবিলিটি বাড়ায়।

2. **টাইপ সেফটি নিশ্চিত করার জন্য**  
   এটি নিশ্চিত করে যে একটি অবজেক্ট বা ফাংশন পূর্বনির্ধারিত কাঠামো অনুসরণ করছে। ভুল টাইপ বা মিসিং প্রপার্টি থাকলে TypeScript কম্পাইল টাইমে এরর দেখায়।

3. **কোড রিইউজ করা সহজ করে**  
   Interface একাধিক জায়গায় ব্যবহার করা যায়, যা কোডের ডুপ্লিকেশন কমায়।

---

### **Type এবং Interface-এর মধ্যে পার্থক্য**

| **Aspect**        | **Interface**                                                          | **Type**                                                                                   |
| ----------------- | ---------------------------------------------------------------------- | ------------------------------------------------------------------------------------------ |
| **Definition**    | একটি অবজেক্টের কাঠামো নির্ধারণ করতে ব্যবহৃত হয়।                       | Type-alias ব্যবহার করে primitive, union, intersection বা অবজেক্ট টাইপ ডিফাইন করতে ব্যবহৃত। |
| **Extensibility** | Interface ক্লাস বা অন্যান্য Interface extend করতে পারে।                | Type-alias একটি টাইপের সাথে নতুন টাইপ মিশ্রণ করতে union বা intersection ব্যবহার করে।       |
| **Reopening**     | Interface-কে একাধিকবার ডিক্লেয়ার করা সম্ভব।                           | Type-alias পুনরায় ডিক্লেয়ার করা সম্ভব নয়।                                               |
| **Usage**         | সাধারণত অবজেক্ট, ক্লাস, বা ফাংশনের স্ট্রাকচার ডিফাইন করতে ব্যবহৃত হয়। | complex টাইপ ডিফাইন (যেমন union বা tuple) বা কমপ্লেক্স টাইপ ব্যবহার করতে ব্যবহৃত হয়।      |

---

### **Object-এর ক্ষেত্রে Type এবং Interface**

#### Using Interface:

```typescript
interface User {
  id: number;
  name: string;
  isAdmin: boolean;
}

const user: User = {
  id: 1,
  name: "John Doe",
  isAdmin: true,
};
```

#### Using Type:

```typescript
type User = {
  id: number;
  name: string;
  isAdmin: boolean;
};

const user: User = {
  id: 1,
  name: "John Doe",
  isAdmin: true,
};
```

---

### **Array-এর ক্ষেত্রে Type এবং Interface**

#### Using Interface:

```typescript
interface StringArray {
  [index: number]: string;
}

const myArray: StringArray = ["apple", "banana", "cherry"];
```

#### Using Type:

```typescript
type StringArray = string[];

const myArray: StringArray = ["apple", "banana", "cherry"];
```

---

### **Function-এর ক্ষেত্রে Type এবং Interface**

#### Using Interface:

```typescript
interface MathOperation {
  (x: number, y: number): number;
}

const add: MathOperation = (x, y) => x + y;
const subtract: MathOperation = (x, y) => x - y;
```

#### Using Type:

```typescript
type MathOperation = (x: number, y: number) => number;

const add: MathOperation = (x, y) => x + y;
const subtract: MathOperation = (x, y) => x - y;
```

---

### **Multiple Type বা Interface একত্রে ব্যবহার (Union & Intersection)**

#### Union:

```typescript
type Admin = {
  role: string;
};

type User = {
  id: number;
  name: string;
};

type AdminOrUser = Admin | User;

const person1: AdminOrUser = { role: "Manager" };
const person2: AdminOrUser = { id: 1, name: "John Doe" };
```

#### Intersection:

```typescript
interface Admin {
  role: string;
}

interface User {
  id: number;
  name: string;
}

type AdminUser = Admin & User;

const adminUser: AdminUser = { id: 1, name: "John Doe", role: "Manager" };
```

---

### **Interface vs Type কোথায় ব্যবহার করবেন?**

1. যদি অবজেক্ট বা ক্লাসের স্ট্রাকচার নির্ধারণ করতে হয়, তাহলে **Interface** ব্যবহার করুন।
2. যদি complex টাইপের (union, intersection, tuple) প্রয়োজন হয়, তাহলে **Type** ব্যবহার করুন।

এটি মূলত কোডের প্রয়োজন এবং ব্যক্তিগত পছন্দের ওপর নির্ভর করে। তবে সাধারণত Interface ব্যবহার বেশি প্রচলিত।

--- ### **Extending Type এবং Interface**

TypeScript-এ **Interface** এবং **Type** উভয়ই extend বা inheritance সমর্থন করে। তবে এই প্রক্রিয়াগুলি তাদের নিজস্ব নিয়ম অনুযায়ী কাজ করে।

---

### **Extending Interfaces**

Interface অন্য একটি Interface বা একাধিক Interface থেকে extend করতে পারে।

#### একক Interface থেকে extend:

```typescript
interface Person {
  name: string;
  age: number;
}

interface Employee extends Person {
  employeeId: number;
  position: string;
}

const employee: Employee = {
  name: "Alice",
  age: 25,
  employeeId: 101,
  position: "Developer",
};
```

#### একাধিক Interface থেকে extend:

```typescript
interface Person {
  name: string;
  age: number;
}

interface Contact {
  email: string;
  phone: string;
}

interface Employee extends Person, Contact {
  employeeId: number;
  position: string;
}

const employee: Employee = {
  name: "Bob",
  age: 30,
  email: "bob@example.com",
  phone: "123456789",
  employeeId: 102,
  position: "Manager",
};
```

---

### **Extending Types**

Type-alias সাধারণত intersection (`&`) অপারেটর ব্যবহার করে extend করা হয়।

#### একক টাইপ থেকে extend:

```typescript
type Person = {
  name: string;
  age: number;
};

type Employee = Person & {
  employeeId: number;
  position: string;
};

const employee: Employee = {
  name: "Alice",
  age: 25,
  employeeId: 101,
  position: "Developer",
};
```

#### একাধিক টাইপ থেকে extend:

```typescript
type Person = {
  name: string;
  age: number;
};

type Contact = {
  email: string;
  phone: string;
};

type Employee = Person &
  Contact & {
    employeeId: number;
    position: string;
  };

const employee: Employee = {
  name: "Bob",
  age: 30,
  email: "bob@example.com",
  phone: "123456789",
  employeeId: 102,
  position: "Manager",
};
```

---

### **Key Differences in Extending Type and Interface**

| **Aspect**               | **Interface**                                              | **Type**                                                 |
| ------------------------ | ---------------------------------------------------------- | -------------------------------------------------------- |
| **Syntax**               | `extends` কিওয়ার্ড ব্যবহার করে extend করা হয়।            | Intersection (`&`) অপারেটর ব্যবহার করে extend করা হয়।   |
| **Multiple Inheritance** | সরাসরি একাধিক Interface থেকে extend করা যায়।              | Intersection অপারেটরের মাধ্যমে একাধিক টাইপ add করা যায়। |
| **Extensibility**        | Interface-কে ভবিষ্যতে নতুন প্রপার্টি দিয়ে আপডেট করা যায়। | Type-alias পুনরায় ডিক্লেয়ার করা যায় না।               |

---

### **কোথায় কোনটি ব্যবহার করবেন?**

- **Interface**:  
  যখন ক্লাস বা অবজেক্টের স্ট্রাকচার নির্ধারণ করতে হবে এবং ভবিষ্যতে নতুন প্রপার্টি add করার সম্ভাবনা থাকে।
- **Type**:  
  যখন complex টাইপ কম্বিনেশন (union, intersection) বা অন্যান্য টাইপ ডিফাইন করতে হবে।

  ***

  ### **Generic Type in TypeScript**

**Generic Type** হলো TypeScript-এর এমন একটি বৈশিষ্ট্য যা কোডকে আরো **ডায়নামিক**, **reusable** এবং **টাইপ-সেফ** করে। এটি টাইপ প্যারামিটার ব্যবহার করে তৈরি হয়, যাতে বিভিন্ন টাইপের সাথে কাজ করা যায়, অথচ টাইপ সেফটি বজায় থাকে।

---

### **কেন Generic Type ব্যবহার করি?**

1. **reusable কোড তৈরির জন্য:**  
   একাধিক টাইপের জন্য একই কোড কাজ করতে পারে।

2. **টাইপ সেফটি নিশ্চিত করার জন্য:**  
   কোড রানটাইমে এরর এড়ায় এবং টাইপ নিশ্চিত করে।

3. **ডাইনামিক টাইপ হ্যান্ডলিং:**  
   একাধিক টাইপের সাথে কাজ করার সময়ও টাইপ ইনফরমেশন বজায় থাকে।

---

### **Generic Type-এর উদাহরণ এবং বিভিন্ন ক্ষেত্রে ব্যবহার**

#### 1. **Generic Function**

একটি ফাংশন বিভিন্ন ডেটা টাইপের জন্য কাজ করতে পারে।

```typescript
function identity<T>(value: T): T {
  return value;
}

// Number টাইপের জন্য:
const numberValue = identity<number>(42);
console.log(numberValue); // Output: 42

// String টাইপের জন্য:
const stringValue = identity<string>("Hello, TypeScript!");
console.log(stringValue); // Output: Hello, TypeScript!
```

#### 2. **Generic Array**

Generic ব্যবহার করে বিভিন্ন টাইপের অ্যারে হ্যান্ডল করা যায়।

```typescript
function getFirstElement<T>(arr: T[]): T {
  return arr[0];
}

const numberArray = [1, 2, 3];
const stringArray = ["apple", "banana", "cherry"];

console.log(getFirstElement(numberArray)); // Output: 1
console.log(getFirstElement(stringArray)); // Output: apple
```

#### 3. **Generic Interface**

Generic Interface ব্যবহার করে অবজেক্টের টাইপ ডাইনামিক করা যায়।

```typescript
interface ApiResponse<T> {
  status: number;
  data: T;
}

const userResponse: ApiResponse<{ id: number; name: string }> = {
  status: 200,
  data: {
    id: 1,
    name: "John Doe",
  },
};

console.log(userResponse.data.name); // Output: John Doe
```

#### 4. **Generic Class**

Generic Class তৈরি করে বিভিন্ন ডেটা টাইপের জন্য ক্লাস পুনঃব্যবহার করা যায়।

```typescript
class Box<T> {
  private content: T;

  constructor(value: T) {
    this.content = value;
  }

  getContent(): T {
    return this.content;
  }
}

const numberBox = new Box<number>(123);
console.log(numberBox.getContent()); // Output: 123

const stringBox = new Box<string>("Hello");
console.log(stringBox.getContent()); // Output: Hello
```

#### 5. **Generic Constraints**

কখনো কখনো Generic টাইপ limited করতে হয়, যাতে নির্দিষ্ট প্রপার্টি নিশ্চিত করা যায়।

```typescript
function getLength<T extends { length: number }>(item: T): number {
  return item.length;
}

console.log(getLength("Hello")); // Output: 5
console.log(getLength([1, 2, 3])); // Output: 3

// console.log(getLength(42)); // Error: Property 'length' does not exist on type 'number'.
```

#### 6. **Generic with Union Types**

Generic টাইপে `Union` টাইপ ব্যবহার করা যায়।

```typescript
function merge<T, U>(obj1: T, obj2: U): T & U {
  return { ...obj1, ...obj2 };
}

const person = merge({ name: "Alice" }, { age: 25 });
console.log(person); // Output: { name: "Alice", age: 25 }
```

---

### 7. **Generic Tuple in TypeScript**

Generic Tuple তৈরি করলে একটি নির্দিষ্ট টাইপের ডাটা সেট ধরে রাখা যায়, যেখানে প্রতিটি আইটেমের টাইপ আলাদা হতে পারে। Generic ব্যবহার করে tuple ডায়নামিক এবং reusable করা যায়।

#### Example: Generic Tuple

```typescript
function createTuple<T, U>(item1: T, item2: U): [T, U] {
  return [item1, item2];
}

const tuple1 = createTuple<string, number>("Age", 25);
console.log(tuple1); // Output: ["Age", 25]

const tuple2 = createTuple<boolean, string>(true, "Active");
console.log(tuple2); // Output: [true, "Active"]
```

#### Advanced Example: Generic Tuple with More Elements

```typescript
function createMultiTuple<T, U, V>(item1: T, item2: U, item3: V): [T, U, V] {
  return [item1, item2, item3];
}

const multiTuple = createMultiTuple<string, number, boolean>("Alice", 30, true);
console.log(multiTuple); // Output: ["Alice", 30, true]
```

---

### 8. **Generic Array of Objects in TypeScript**

Generic Array of Objects তৈরি করলে একই টাইপের অবজেক্টের কালেকশনকে টাইপ-সেফ করা যায়।

#### Example: Generic Array of Objects

```typescript
interface Person<T> {
  id: number;
  data: T;
}

const people: Array<Person<string>> = [
  { id: 1, data: "Alice" },
  { id: 2, data: "Bob" },
];

console.log(people);
// Output: [ { id: 1, data: "Alice" }, { id: 2, data: "Bob" } ]
```

#### Example: Generic Array with Flexible Data Types

```typescript
interface Item<T> {
  id: number;
  value: T;
}

const items: Item<number | string>[] = [
  { id: 1, value: 100 },
  { id: 2, value: "Hello" },
];

console.log(items);
// Output: [ { id: 1, value: 100 }, { id: 2, value: "Hello" } ]
```

---

### **Combining Generic Array and Tuple**

```typescript
function createObjectArray<T, U>(key: T, value: U): Array<[T, U]> {
  return [[key, value]];
}

const objectArray = createObjectArray<string, number>("Age", 25);
console.log(objectArray); // Output: [["Age", 25]]
```

---

### **Advanced Example: Generic Array with Constraints**

#### Restricting Object Properties

```typescript
interface Product<T extends string | number> {
  id: T;
  name: string;
}

const products: Product<number>[] = [
  { id: 1, name: "Laptop" },
  { id: 2, name: "Phone" },
];

console.log(products);
// Output: [ { id: 1, name: "Laptop" }, { id: 2, name: "Phone" } ]
```

---

### **Generic Utility Types**

TypeScript-এর বিল্ট-ইন Generic Utility Types যেমন **`Partial`**, **`Readonly`**, **`Pick`**, **`Record`** ইত্যাদি।

#### Example: `Partial`

```typescript
interface User {
  id: number;
  name: string;
  email: string;
}

const updateUser = (id: number, newData: Partial<User>) => {
  console.log(`Updating user ${id}`, newData);
};

updateUser(1, { name: "Updated Name" });
// Output: Updating user 1 { name: "Updated Name" }
```

---

### **কোথায় Generic Type ব্যবহার করবেন?**

1. **Reusable Components**: যখন কোড বা ফাংশন একাধিক টাইপের জন্য কাজ করবে।
2. **API Responses**: যখন API থেকে বিভিন্ন টাইপের ডেটা পাওয়া যায়।
3. **Utility Functions**: যেমন ডেটা প্রসেসিং বা ম্যানিপুলেশন।
4. **Classes**: টাইপ-অ্যাগনস্টিক ক্লাস তৈরি করতে।

Generic Type TypeScript-এর একটি strong বৈশিষ্ট্য যা টাইপ সেফটি এবং কোডের reusableতা নিশ্চিত করে।

---

### **Constraints in TypeScript**

**Constraints** হলো TypeScript-এ Generic টাইপের limited তা নির্ধারণ করার একটি উপায়। যখন Generic টাইপ ব্যবহার করা হয়, তখন এটি যেকোনো টাইপ হতে পারে। তবে কিছু ক্ষেত্রে আমরা চাই নির্দিষ্ট টাইপের বৈশিষ্ট্য বা প্রপার্টি থাকা mandatory/required হোক। Constraints ব্যবহার করে আমরা সেই টাইপের limited তা নির্ধারণ করতে পারি।

---

### **কেন Constraints ব্যবহার করি?**

1. **নির্দিষ্ট টাইপের প্রপার্টি বা মেথড থাকা নিশ্চিত করার জন্য:**  
   Generic টাইপ ব্যবহারের সময় নির্দিষ্ট কিছু প্রপার্টি বা মেথড থাকা mandatory/required করতে।
2. **বাগ এড়াতে সাহায্য করার জন্য:**  
   Constraints ব্যবহার করলে টাইপ সেফটি বাড়ে এবং রানটাইম এরর কমে।

3. **Flexible অথচ টাইপ-সেফ কোড লেখার জন্য:**  
   Constraints টাইপ সেফটি নিশ্চিত করে, তবু Generic-এর ডায়নামিক স্বভাব বজায় থাকে।

---

### **Constraints In Typescript **

#### **১. Basic Constraints**

Generic টাইপ একটি নির্দিষ্ট টাইপ বা টাইপের রেঞ্জের মধ্যে limited করা যায়।

```typescript
function getLength<T extends { length: number }>(item: T): number {
  return item.length;
}

// Valid usage
console.log(getLength("Hello")); // Output: 5
console.log(getLength([1, 2, 3])); // Output: 3
console.log(getLength({ length: 10 })); // Output: 10

// Invalid usage
// console.log(getLength(42)); // Error: Property 'length' does not exist on type 'number'.
```

##### explanation:

`T extends { length: number }` এর অর্থ হচ্ছে `T` টাইপ যেকোনো কিছুকে represent করতে পারে, তবে তার মধ্যে `length` প্রপার্টি থাকতে হবে।

---

#### **২. Constraints with Interfaces**

Generic টাইপে কাস্টম `interface` ব্যবহার করা যায়।

```typescript
interface HasName {
  name: string;
}

function greet<T extends HasName>(person: T): string {
  return `Hello, ${person.name}!`;
}

const user = { name: "Alice", age: 25 };
console.log(greet(user)); // Output: Hello, Alice!
```

##### explanation:

এখানে `T extends HasName` নির্দেশ করে যে `T` টাইপের অবজেক্টে `name` প্রপার্টি থাকা আবশ্যক।

---

#### **৩. Constraints with Classes**

Generic টাইপে ক্লাস ব্যবহার করে Constraints নির্ধারণ করা যায়।

```typescript
class Animal {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
}

class Dog extends Animal {
  breed: string;
  constructor(name: string, breed: string) {
    super(name);
    this.breed = breed;
  }
}

function getAnimalName<T extends Animal>(animal: T): string {
  return animal.name;
}

const myDog = new Dog("Buddy", "Golden Retriever");
console.log(getAnimalName(myDog)); // Output: Buddy
```

##### explanation:

`T extends Animal` নির্দেশ করে যে Generic টাইপ `T` অবশ্যই `Animal` বা তার সাবক্লাস হতে হবে।

---

#### **৪. Constraints with Multiple Types**

Generic টাইপ একাধিক টাইপের সাথে limited করা যায়।

```typescript
function merge<T extends object, U extends object>(obj1: T, obj2: U): T & U {
  return { ...obj1, ...obj2 };
}

const person = merge({ name: "Alice" }, { age: 25 });
console.log(person); // Output: { name: "Alice", age: 25 }
```

##### explanation:

এখানে `T` এবং `U` উভয়ই `object` টাইপ হতে হবে। ফলে শুধু অবজেক্ট টাইপের ডেটা merge করা যাবে।

---

#### **৫. Constraints with keyof**

`keyof` ব্যবহার করে Generic টাইপকে একটি অবজেক্টের প্রপার্টি কী পর্যন্ত limited করা যায়।

```typescript
function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

const user = { id: 1, name: "John", age: 30 };
console.log(getProperty(user, "name")); // Output: John
console.log(getProperty(user, "age")); // Output: 30

// Invalid usage
// console.log(getProperty(user, "address")); // Error: Argument of type '"address"' is not assignable.
```

##### explanation:

`K extends keyof T` নির্দেশ করে যে `K` শুধুমাত্র `T` অবজেক্টের ভ্যালিড কী হতে পারে।

---

### **Constraints এর সুবিধা**

1. **টাইপ সেফ কোড:**  
   Generic টাইপে Constraints add করলে টাইপ সেফটি নিশ্চিত হয়।

2. **Flexible yet Controlled:**  
   ডায়নামিক Generic টাইপ ব্যবহারের সময়ও টাইপ কন্ট্রোল করা যায়।

3. **Reusable Functions এবং Classes:**  
   Constraints যুক্ত Generic ফাংশন এবং ক্লাস সহজে reusable হয়।

---

### **Constraints-এর লিমিটেশন**

- Constraints ব্যবহার করলে টাইপ limited হয়ে যায়। তাই কখনো কখনো বেশি জেনেরিক কাজের ক্ষেত্রে বাধা সৃষ্টি করতে পারে।
- `extends` কেবল নির্ধারিত টাইপ বা টাইপের বৈশিষ্ট্য চেক করে, রানটাইমে কোনো বৈধতা check করতে পারে না।

---

**Constraints** TypeScript-এর Generic টাইপের power কে আরো strong করে। এটি এমন একটি ফিচার যা টাইপ সেফটি বজায় রেখে কোডকে ডায়নামিক এবং reusable করে তোলে। এটি অবজেক্ট, ফাংশন, ক্লাস, এবং মেথডের জন্য বিভিন্ন ক্ষেত্রে অত্যন্ত কার্যকর।

---

### **Asynchronous TypeScript (Promise এবং Async/Await) - বাংলায় ব্যাখ্যা**

TypeScript-এ **Asynchronous Programming** হলো এমন একটি পদ্ধতি যেখানে কিছু কাজ (যেমন ডেটাবেস কল, API কল) **অন্য কাজ শেষ না হওয়া পর্যন্ত ব্লক না করে চলতে থাকে।**

এই পদ্ধতি সাধারণত দুইভাবে ব্যবহৃত হয়:

1. **Promise**
2. **Async/Await**

---

### **Promises**

**Promise** হলো JavaScript/TypeScript-এর একটি বিল্ট-ইন অবজেক্ট যা ভবিষ্যতে কিছু কাজ complete হলে একটি ভ্যালু রিটার্ন করবে। এটি তিনটি স্টেট নিয়ে কাজ করে:

1. **Pending**: প্রমিসটি এখনো শেষ হয়নি।
2. **Fulfilled**: কাজ successfully শেষ হয়েছে।
3. **Rejected**: কাজ fail হয়েছে।

#### **Promise-এর উদাহরণ**

```typescript
function fetchData(): Promise<string> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = true; // আপনি এই মান change করতে পারেন
      if (success) {
        resolve("ডেটা successfully লোড হয়েছে।");
      } else {
        reject("ডেটা লোড করতে fail হয়েছে।");
      }
    }, 2000);
  });
}

// Promise ব্যবহার
fetchData()
  .then((data) => {
    console.log(data); // Output: ডেটা successfully লোড হয়েছে।
  })
  .catch((error) => {
    console.error(error); // Output: ডেটা লোড করতে fail হয়েছে।
  });
```

---

### **Async/Await**

**Async/Await** হলো Promises এর উপর ভিত্তি করে একটি syntax, যা asynchronous কোড লেখার জন্য আরো সহজ এবং readable করে তোলে।

- `async` ফাংশন ব্যবহার করলে তা **automatically একটি Promise রিটার্ন করে**।
- `await` কিওয়ার্ড ব্যবহার করে একটি Promise resolve বা reject হওয়ার জন্য wait করা যায়।

#### **Async/Await-এর উদাহরণ**

```typescript
async function fetchData(): Promise<string> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = true;
      if (success) {
        resolve("ডেটা successfully লোড হয়েছে।");
      } else {
        reject("ডেটা লোড করতে fail হয়েছে।");
      }
    }, 2000);
  });
}

async function loadData() {
  try {
    const data = await fetchData();
    console.log(data); // Output: ডেটা successfully লোড হয়েছে।
  } catch (error) {
    console.error(error); // Output: ডেটা লোড করতে fail হয়েছে।
  }
}

loadData();
```

---

### **Promise এবং Async/Await এর মধ্যে পার্থক্য**

| **Promise**                                       | **Async/Await**                                      |
| ------------------------------------------------- | ---------------------------------------------------- |
| `.then()` এবং `.catch()` ব্যবহার করে কাজ করা হয়। | `try...catch` ব্লকের মাধ্যমে error হ্যান্ডল করা হয়। |
| কোড কমপ্লেক্স হতে পারে।                           | কোড সহজ এবং readable হয়।                            |
| সব কিছু chain আকারে লিখতে হয়।                    | Sequential (ধাপে ধাপে) আকারে লেখা হয়।               |

---

### **কোথায় ব্যবহার করবেন?**

- **Promise:**  
  যদি অনেকগুলো asynchronous কাজ sequential (ধাপে ধাপে) না হয়, তাহলে Promise ব্যবহার করা সুবিধাজনক।

- **Async/Await:**  
  যদি asynchronous কাজগুলো sequential বা নির্দিষ্ট sequence maintain করতে হয়, তাহলে Async/Await বেশি কার্যকর।

---

### **Promise এবং Async/Await একত্রে ব্যবহার**

TypeScript-এ আমরা Promise এবং Async/Await একসাথে ব্যবহার করতে পারি।

```typescript
async function processTasks() {
  try {
    const task1 = await new Promise((resolve) =>
      setTimeout(() => resolve("Task 1 Complete"), 1000)
    );
    console.log(task1); // Output: Task 1 Complete

    const task2 = await new Promise((resolve) =>
      setTimeout(() => resolve("Task 2 Complete"), 2000)
    );
    console.log(task2); // Output: Task 2 Complete

    const task3 = await new Promise((resolve) =>
      setTimeout(() => resolve("Task 3 Complete"), 1000)
    );
    console.log(task3); // Output: Task 3 Complete
  } catch (error) {
    console.error("Error processing tasks:", error);
  }
}

processTasks();
```

---

### **Asynchronous Programming-এর সুবিধা**

1. **কোড ব্লক না করা:**  
   একটি কাজ শেষ হওয়ার জন্য wait না করে অন্য কাজ শুরু হয়।
2. **Performance improve করা:**  
   External API কল বা ডেটাবেস থেকে ডেটা লোডের সময় অ্যাপ্লিকেশন ফ্রিজ করে না।

3. **টাইপ সেফটি:**  
   TypeScript asynchronous কোডেও টাইপ সেফটি নিশ্চিত করে।

---

1. **Promise**: একটি asynchronous কাজ শেষ হওয়ার পরে value দেয়।
2. **Async/Await**: Promises এর উপর একটি simpler syntax।
3. **ব্যবহার ক্ষেত্র**:
   - Simple কাজ: **Promise**
   - Sequential কাজ: **Async/Await**

---

### **Conditional Types in TypeScript**

**Conditional Types** TypeScript-এ একটি strong ফিচার যা টাইপগুলোকে নির্দিষ্ট condition অনুসারে change করতে দেয়। এটি সাধারণত **`T extends U ? X : Y`** এই format এ লেখা হয়।

---

### **Syntax:**

```typescript
T extends U ? X : Y
```

- **`T`**: একটি টাইপ যা check করা হবে।
- **`U`**: একটি টাইপ যা condition হিসেবে ব্যবহার করা হবে।
- **`X`**: যদি condition fulfill হয়, তবে এই টাইপ রিটার্ন হবে।
- **`Y`**: যদি condition fulfill না হয়, তবে এই টাইপ রিটার্ন হবে।

---

### **কেন Conditional Types ব্যবহার করি?**

1. **টাইপ নির্ভর আচরণ:**  
   যখন টাইপের উপর ভিত্তি করে অন্য টাইপ নির্ধারণ করতে হয়।
2. **Flexible কোড:**  
   কোডে ডাইনামিক টাইপের ব্যবহার নিশ্চিত করে।

3. **Utility Types তৈরি করতে:**  
   Conditional Types দিয়ে টাইপের উপর নির্ভর করে নতুন টাইপ তৈরি করা যায়।

---

### **উদাহরণ**

#### 1. **সাধারণ Conditional Type**

```typescript
type IsString<T> = T extends string ? true : false;

type Test1 = IsString<string>; // true
type Test2 = IsString<number>; // false
```

##### ব্যাখ্যা:

- `IsString` check করছে `T` কি `string` টাইপের?
- যদি `T` `string` হয়, তাহলে `true` রিটার্ন করে, otherwise `false`।

---

#### 2. **Nested Conditional Types**

```typescript
type TypeChecker<T> = T extends string
  ? "String"
  : T extends number
  ? "Number"
  : "Unknown";

type Result1 = TypeChecker<string>; // "String"
type Result2 = TypeChecker<number>; // "Number"
type Result3 = TypeChecker<boolean>; // "Unknown"
```

##### ব্যাখ্যা:

- এখানে বিভিন্ন টাইপের জন্য ভিন্ন ভিন্ন result রিটার্ন করা হচ্ছে।

---

#### 3. **Infer (Type Inference)**

`infer` কিওয়ার্ড Conditional Types এর সাথে ব্যবহার করে টাইপ বের করা যায়।

```typescript
type GetReturnType<T> = T extends (...args: any[]) => infer R ? R : never;

type Test1 = GetReturnType<() => string>; // string
type Test2 = GetReturnType<(x: number) => boolean>; // boolean
type Test3 = GetReturnType<string>; // never
```

##### ব্যাখ্যা:

- `infer R` মানে আমরা `T` এর মধ্যে থেকে রিটার্ন টাইপ বের করে নিচ্ছি।
- যদি `T` একটি ফাংশন না হয়, তাহলে এটি `never` রিটার্ন করে।

---

#### 4. **Distributive Conditional Types**

যদি টাইপটি ইউনিয়ন টাইপ হয়, তাহলে Conditional Type সেটির প্রতিটি সদস্যের জন্য আলাদাভাবে কাজ করে।

```typescript
type ToArray<T> = T extends any ? T[] : never;

type Test1 = ToArray<string>; // string[]
type Test2 = ToArray<string | number>; // string[] | number[]
```

##### ব্যাখ্যা:

- এখানে `string | number` টাইপের জন্য `ToArray` আলাদা করে `string[]` এবং `number[]` প্রক্রিয়া করে।

---

#### 5. **Utility Types-এর ভিতরে Conditional Types**

TypeScript-এর অনেক **Utility Types** Conditional Types ব্যবহার করে তৈরি করা হয়েছে।

##### Example: `Exclude`

```typescript
type Exclude<T, U> = T extends U ? never : T;

type Result = Exclude<"a" | "b" | "c", "a">; // "b" | "c"
```

##### Example: `Extract`

```typescript
type Extract<T, U> = T extends U ? T : never;

type Result = Extract<"a" | "b" | "c", "a" | "b">; // "a" | "b"
```

##### Example: `NonNullable`

```typescript
type NonNullable<T> = T extends null | undefined ? never : T;

type Result = NonNullable<string | null | undefined>; // string
```

---

### **কোথায় Conditional Types ব্যবহার করবেন?**

1. **Utility Types তৈরি করতে।**
2. **complex টাইপ ম্যানিপুলেশন করতে।**
3. **API Response বা ডেটার টাইপ check করতে।**

---

**Conditional Types** TypeScript-এর টাইপ management কে আরো strong ও ডাইনামিক করে। এটি ডেভেলপারদের কোডের টাইপ সেফটি নিশ্চিত করার পাশাপাশি টাইপ অনুযায়ী ফ্লেক্সিবিলিটি add করে। Conditional Types বুঝতে পারলে TypeScript-এ টাইপ ম্যানিপুলেশনের প্রায় সবকিছু করা সম্ভব।

----

### **Mapped Types in TypeScript**

**Mapped Types** হলো TypeScript-এ এমন একটি ফিচার, যা একটি existed টাইপ বা ইন্টারফেসের প্রতিটি প্রপার্টি থেকে একটি নতুন টাইপ তৈরি করতে সাহায্য করে। এটি সাধারণত **`key`** এবং **`value`** এর উপর কাজ করে এবং মূল টাইপের বৈশিষ্ট্যগুলো change বা প্রসারিত করতে ব্যবহৃত হয়।

---

### **Syntax of Mapped Types**
```typescript
type NewType = { 
  [Key in keyof OriginalType]: Transformation;
};
```

- **`keyof`**: মূল টাইপ থেকে সমস্ত কী বের করে।  
- **`Key in keyof OriginalType`**: মূল টাইপের প্রতিটি প্রপার্টির জন্য নতুন টাইপ তৈরি করে।  
- **`Transformation`**: প্রপার্টির টাইপ কাস্টমাইজ করতে দেয়।  

---

### **Examples of Mapped Types**

#### 1. **Basic Example**
```typescript
type Person = {
  name: string;
  age: number;
};

type ReadOnlyPerson = {
  [Key in keyof Person]: Readonly<Person[Key]>;
};

// Result:
// type ReadOnlyPerson = {
//   readonly name: string;
//   readonly age: number;
// }
```

---

#### 2. **Making All Properties Optional**
```typescript
type Optional<T> = {
  [Key in keyof T]?: T[Key];
};

type Person = {
  name: string;
  age: number;
};

type OptionalPerson = Optional<Person>;

// Result:
// type OptionalPerson = {
//   name?: string;
//   age?: number;
// }
```

---

#### 3. **Making All Properties Read-Only**
```typescript
type ReadOnly<T> = {
  [Key in keyof T]: Readonly<T[Key]>;
};

type Person = {
  name: string;
  age: number;
};

type ReadOnlyPerson = ReadOnly<Person>;

// Result:
// type ReadOnlyPerson = {
//   readonly name: string;
//   readonly age: number;
// }
```

---

#### 4. **Mapping and Transforming Properties**
```typescript
type UppercaseKeys<T> = {
  [Key in keyof T as Uppercase<string & Key>]: T[Key];
};

type Person = {
  name: string;
  age: number;
};

type UppercasePerson = UppercaseKeys<Person>;

// Result:
// type UppercasePerson = {
//   NAME: string;
//   AGE: number;
// }
```

---

### **Built-in Mapped Types**

#### **1. Partial**
সব প্রপার্টিকে **optional** করে।
```typescript
type Partial<T> = {
  [Key in keyof T]?: T[Key];
};
```

#### **2. Readonly**
সব প্রপার্টিকে **readonly** করে।
```typescript
type Readonly<T> = {
  [Key in keyof T]: Readonly<T[Key]>;
};
```

#### **3. Pick**
নির্দিষ্ট প্রপার্টি বেছে নিয়ে একটি নতুন টাইপ তৈরি করে।
```typescript
type Pick<T, K extends keyof T> = {
  [Key in K]: T[Key];
};
```

#### **4. Record**
নির্দিষ্ট কী ও ভ্যালু থেকে টাইপ তৈরি করে।
```typescript
type Record<K extends keyof any, T> = {
  [Key in K]: T;
};
```

---

### **Look-up Types in TypeScript**

**Look-up Types** TypeScript-এ এমন একটি ফিচার, যা একটি টাইপ বা ইন্টারফেস থেকে নির্দিষ্ট প্রপার্টির টাইপ খুঁজে বের করতে ব্যবহৃত হয়। এটি **`T[K]`** সিনট্যাক্সে লেখা হয়।

---

### **Look-up Types এর Syntax**
```typescript
type PropertyType = T[K];
```
- **`T`**: একটি টাইপ বা ইন্টারফেস।  
- **`K`**: `keyof T` এর একটি প্রপার্টি।  
- **`T[K]`**: সেই প্রপার্টির টাইপ।

---

### **Examples of Look-up Types**

#### 1. **Basic Look-up Type**
```typescript
interface Person {
  name: string;
  age: number;
}

type NameType = Person["name"]; // string
type AgeType = Person["age"];   // number
```

---

#### 2. **Using Look-up Types with `keyof`**
```typescript
interface Person {
  name: string;
  age: number;
}

type PersonKeys = keyof Person; // "name" | "age"
type ValueType = Person[PersonKeys]; // string | number
```

---

#### 3. **Dynamic Look-up Type**
```typescript
interface Person {
  name: string;
  age: number;
}

type GetProperty<T, K extends keyof T> = T[K];

type NameType = GetProperty<Person, "name">; // string
type AgeType = GetProperty<Person, "age">;   // number
```

---

#### 4. **Look-up Type with Arrays**
```typescript
type ArrayElement<T> = T extends Array<infer U> ? U : never;

type Names = string[];
type Element = ArrayElement<Names>; // string
```

---

### **Mapped Types vs Look-up Types**

| **Feature**          | **Mapped Types**                                                                                   | **Look-up Types**                                                                     |
|-----------------------|---------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------|
| **Purpose**           | একটি existed টাইপের প্রপার্টি বা টাইপকে change করে নতুন টাইপ তৈরি করা।                          | একটি নির্দিষ্ট প্রপার্টির টাইপ খুঁজে বের করা।                                        |
| **Example**           | `{ [Key in keyof T]: NewType }`                                                                   | `T[K]`                                                                               |
| **Use Case**          | `Partial`, `Readonly`, `Pick`, ইত্যাদি তৈরি করা।                                                 | একটি টাইপ বা ইন্টারফেসের প্রপার্টির টাইপ খুঁজে বের করা।                                |
| **Complexity**        | পুরো টাইপের প্রতিটি প্রপার্টিকে ম্যাপ করা।                                                          | নির্দিষ্ট প্রপার্টির টাইপ বের করা সহজ।                                               |

---

- **Mapped Types** নতুন টাইপ তৈরি করার জন্য ব্যবহার করা হয়, যেখানে টাইপের প্রতিটি প্রপার্টি কাস্টমাইজ করা যায়।  
- **Look-up Types** নির্দিষ্ট টাইপের প্রপার্টি থেকে টাইপ খুঁজে বের করতে ব্যবহৃত হয়।  
TypeScript-এর এই ফিচার দুটি টাইপ ম্যানিপুলেশনকে অনেক সহজ ও শক্তিশালী করে।

--- 

### **TypeScript-এর Built-in Utility Types**

TypeScript-এ বেশ কিছু **Utility Types** রয়েছে, যা existed টাইপ নিয়ে কাজ সহজ করে। এই টাইপগুলো নতুন টাইপ তৈরি, টাইপ ম্যানিপুলেট বা টাইপ রিস্ট্রিক্ট করতে ব্যবহৃত হয়। নিচে সবগুলো **Utility Type** ব্যাখ্যা ও উদাহরণসহ দেওয়া হলো।

---

### **1. Partial<T>**
**`Partial`** একটি টাইপের সব প্রপার্টিকে **optional** করে দেয়। 

#### **কেন ব্যবহার করা হয়?**
যখন আপনি চান যে একটি অবজেক্টের কিছু প্রপার্টি প্রয়োজনীয় না হয়ে optional হোক।

#### **Syntax:**
```typescript
type Partial<T> = {
  [P in keyof T]?: T[P];
};
```

#### **উদাহরণ:**
```typescript
interface User {
  name: string;
  age: number;
  email: string;
}

type PartialUser = Partial<User>;

const user1: PartialUser = {
  name: "John", // age এবং email optional হয়ে গেছে
};
```

---

### **2. Required<T>**
**`Required`** একটি টাইপের সব প্রপার্টিকে **required** বা প্রয়োজনীয় করে দেয়।

#### **কেন ব্যবহার করা হয়?**
যখন একটি টাইপের সব প্রপার্টিকে mandatory/required করতে হয়।

#### **Syntax:**
```typescript
type Required<T> = {
  [P in keyof T]-?: T[P];
};
```

#### **উদাহরণ:**
```typescript
interface User {
  name?: string;
  age?: number;
}

type RequiredUser = Required<User>;

const user2: RequiredUser = {
  name: "Jane",
  age: 25, // এখন সব প্রপার্টি প্রয়োজনীয়
};
```

---

### **3. Readonly<T>**
**`Readonly`** একটি টাইপের সব প্রপার্টিকে **read-only** করে দেয়, অর্থাৎ এগুলো change করা যাবে না।

#### **কেন ব্যবহার করা হয়?**
যখন আপনি চান যে কোনো অবজেক্টের মান অপরিবর্তিত থাকবে।

#### **Syntax:**
```typescript
type Readonly<T> = {
  readonly [P in keyof T]: T[P];
};
```

#### **উদাহরণ:**
```typescript
interface User {
  name: string;
  age: number;
}

type ReadonlyUser = Readonly<User>;

const user3: ReadonlyUser = {
  name: "John",
  age: 30,
};

// user3.name = "Jane"; // Error: Read-only property
```

---

### **4. Record<K, T>**
**`Record`** একটি টাইপ তৈরি করে যেখানে **key** এবং **value** এর টাইপ নির্দিষ্ট করা যায়।

#### **কেন ব্যবহার করা হয়?**
যখন একটি অবজেক্টে নির্দিষ্ট ধরনের key-value পেয়ার প্রয়োজন।

#### **Syntax:**
```typescript
type Record<K extends keyof any, T> = {
  [P in K]: T;
};
```

#### **উদাহরণ:**
```typescript
type UserRoles = "admin" | "editor" | "viewer";

type Permissions = Record<UserRoles, boolean>;

const userPermissions: Permissions = {
  admin: true,
  editor: false,
  viewer: true,
};
```

---

### **5. Pick<T, K>**
**`Pick`** টাইপ থেকে নির্দিষ্ট প্রপার্টি **বেছে নিয়ে** নতুন টাইপ তৈরি করে।

#### **কেন ব্যবহার করা হয়?**
যখন শুধু নির্দিষ্ট প্রপার্টিগুলো প্রয়োজন।

#### **Syntax:**
```typescript
type Pick<T, K extends keyof T> = {
  [P in K]: T[P];
};
```

#### **উদাহরণ:**
```typescript
interface User {
  name: string;
  age: number;
  email: string;
}

type UserNameAndEmail = Pick<User, "name" | "email">;

const user4: UserNameAndEmail = {
  name: "Alice",
  email: "alice@example.com",
};
```

---

### **6. Omit<T, K>**
**`Omit`** টাইপ থেকে নির্দিষ্ট প্রপার্টি **বাদ দিয়ে** নতুন টাইপ তৈরি করে।

#### **কেন ব্যবহার করা হয়?**
যখন নির্দিষ্ট প্রপার্টিগুলো ছাড়া বাকি টাইপ প্রয়োজন।

#### **Syntax:**
```typescript
type Omit<T, K extends keyof any> = Pick<T, Exclude<keyof T, K>>;
```

#### **উদাহরণ:**
```typescript
interface User {
  name: string;
  age: number;
  email: string;
}

type UserWithoutEmail = Omit<User, "email">;

const user5: UserWithoutEmail = {
  name: "Bob",
  age: 28,
};
```

---

### **7. Exclude<T, U>**
**`Exclude`** টাইপ থেকে নির্দিষ্ট টাইপ বাদ দেয়।

#### **কেন ব্যবহার করা হয়?**
যখন কোনো টাইপ থেকে অপ্রয়োজনীয় টাইপগুলো বাদ দিতে হয়।

#### **Syntax:**
```typescript
type Exclude<T, U> = T extends U ? never : T;
```

#### **উদাহরণ:**
```typescript
type AllRoles = "admin" | "editor" | "viewer";
type NonEditorRoles = Exclude<AllRoles, "editor">;

// Result: "admin" | "viewer"
```

---

### **8. Extract<T, U>**
**`Extract`** টাইপ থেকে নির্দিষ্ট টাইপগুলো **নিয়ে আসে।**

#### **কেন ব্যবহার করা হয়?**
যখন কোনো টাইপের নির্দিষ্ট অংশ দরকার হয়।

#### **Syntax:**
```typescript
type Extract<T, U> = T extends U ? T : never;
```

#### **উদাহরণ:**
```typescript
type AllRoles = "admin" | "editor" | "viewer";
type OnlyEditor = Extract<AllRoles, "editor" | "viewer">;

// Result: "editor" | "viewer"
```

---

### **9. NonNullable<T>**
**`NonNullable`** টাইপ থেকে **`null`** এবং **`undefined`** সরিয়ে দেয়।

#### **কেন ব্যবহার করা হয়?**
যখন একটি টাইপে শুধু **valid** মান প্রয়োজন।

#### **Syntax:**
```typescript
type NonNullable<T> = T extends null | undefined ? never : T;
```

#### **উদাহরণ:**
```typescript
type NullableString = string | null | undefined;
type NonNullableString = NonNullable<NullableString>;

// Result: string
```

---

### **10. ReturnType<T>**
**`ReturnType`** ফাংশনের **return টাইপ** বের করে।

#### **কেন ব্যবহার করা হয়?**
যখন একটি ফাংশনের রিটার্ন টাইপ নির্ধারণ করতে হয়।

#### **Syntax:**
```typescript
type ReturnType<T> = T extends (...args: any[]) => infer R ? R : any;
```

#### **উদাহরণ:**
```typescript
function getUser(): { name: string; age: number } {
  return { name: "John", age: 30 };
}

type UserType = ReturnType<typeof getUser>;

// Result: { name: string; age: number }
```

---

### **11. Parameters<T>**
**`Parameters`** ফাংশনের **প্যারামিটার টাইপ** বের করে।

#### **কেন ব্যবহার করা হয়?**
যখন একটি ফাংশনের প্যারামিটার টাইপ দরকার হয়।

#### **Syntax:**
```typescript
type Parameters<T> = T extends (...args: infer P) => any ? P : never;
```

#### **উদাহরণ:**
```typescript
function greet(name: string, age: number): string {
  return `Hello, ${name}. You are ${age} years old.`;
}

type GreetParams = Parameters<typeof greet>;

// Result: [string, number]
```

---

### **12. ConstructorParameters<T>**
**`ConstructorParameters`** একটি ক্লাস কন্সট্রাক্টরের প্যারামিটার টাইপ বের করে।

#### **Syntax:**
```typescript
type ConstructorParameters<T> = T extends new (...args: infer P) => any ? P : never;
```

#### **উদাহরণ:**
```typescript
class User {
  constructor(public name: string, public age: number) {}
}

type UserConstructorParams = ConstructorParameters<typeof User>;

// Result: [string, number]
```

---

### **13. InstanceType<T>**
**`InstanceType`** একটি ক্লাসের ইনস্ট্যান্স টাইপ বের করে।

#### **Syntax:**
```typescript
type InstanceType<T> = T extends new (...args: any[]) => infer R ? R : any;
```

#### **উদাহরণ:**
```typescript
class User {
  constructor(public name: string, public age: number) {}
}

type UserInstance = InstanceType<typeof User>;

// Result: User
```

---

### **14. ThisParameterType<T>**  
**`ThisParameterType`** একটি ফাংশনের **`this` টাইপ** বের করে।  

#### **কেন ব্যবহার করা হয়?**  
যখন ফাংশনে ব্যবহৃত **`this`** এর টাইপ আলাদাভাবে নির্ধারণ বা যাচাই করতে হয়।  

#### **Syntax:**  
```typescript
type ThisParameterType<T> = T extends (this: infer U, ...args: any[]) => any ? U : never;
```

#### **উদাহরণ:**  
```typescript
function sayHi(this: { name: string }, greeting: string) {
  return `${greeting}, ${this.name}!`;
}

type ThisType = ThisParameterType<typeof sayHi>; 
// Result: { name: string }
```

---

### **15. OmitThisParameter<T>**  
**`OmitThisParameter`** একটি ফাংশন থেকে **`this`** প্যারামিটার সরিয়ে দেয়।  

#### **কেন ব্যবহার করা হয়?**  
যখন **`this`** প্যারামিটার সরিয়ে একটি ফাংশনকে **standalone function** হিসেবে ব্যবহার করতে হয়।  

#### **Syntax:**  
```typescript
type OmitThisParameter<T> = unknown extends ThisParameterType<T>
  ? T
  : T extends (...args: infer A) => infer R
  ? (...args: A) => R
  : T;
```

#### **উদাহরণ:**  
```typescript
function sayHi(this: { name: string }, greeting: string) {
  return `${greeting}, ${this.name}!`;
}

const standaloneSayHi: OmitThisParameter<typeof sayHi> = sayHi.bind({ name: "Alice" });

console.log(standaloneSayHi("Hello")); // Output: "Hello, Alice!"
```

---

### **16. ThisType<T>**  
**`ThisType`** টাইপ নির্ধারণ করতে সাহায্য করে যেটি **`this`** এর জন্য ব্যবহৃত হবে।  

#### **কেন ব্যবহার করা হয়?**  
**`this`** এর টাইপ নির্ধারণের জন্য এটি সাধারণত **`noImplicitThis`** অপশন ব্যবহার করার সময় কাজে আসে।  

#### **Syntax:**  
```typescript
interface ThisType<T> {}
```

#### **উদাহরণ:**  
```typescript
type ObjectDescriptor<D, M> = {
  data?: D;
  methods?: M & ThisType<D & M>; // this: D & M
};

function createObject<D, M>(desc: ObjectDescriptor<D, M>): D & M {
  const data: object = desc.data || {};
  const methods: object = desc.methods || {};
  return { ...data, ...methods } as D & M;
}

let obj = createObject({
  data: { x: 10, y: 20 },
  methods: {
    move(dx: number, dy: number) {
      this.x += dx; // this টাইপ নির্ধারণ করা আছে
      this.y += dy;
    },
  },
});

obj.move(5, 5);
console.log(obj.x); // 15
console.log(obj.y); // 25
```

---

### **17. Template Literal Types**  
Template Literal Types TypeScript-এর টাইপের মাধ্যমে স্ট্রিং ম্যানিপুলেশনের জন্য ব্যবহৃত হয়।  

#### **উদাহরণ:**  
```typescript
type Greeting = "Hello";
type Name = "Alice";

type Message = `${Greeting}, ${Name}!`; // "Hello, Alice!"
```

---

### **18. Exclude<T, U> এবং Extract<T, U> পুনরায় ব্যবহার**  
এগুলো একটি টাইপ থেকে নির্দিষ্ট টাইপ বাদ দেওয়া বা অন্তর্ভুক্ত করার জন্য ব্যবহৃত হয়।  

#### **Nested Example:**  
```typescript
type A = "a" | "b" | "c";
type B = "a" | "d";

type Excluded = Exclude<A, B>; // Result: "b" | "c"
type Extracted = Extract<A, B>; // Result: "a"
```

---

### **19. Custom Utility Types **  
আপনি নিজের কাস্টম Utility Type তৈরি করতে পারেন!  

#### **Example: Mutable Type (ReadOnly সরিয়ে নেওয়া)**  
```typescript
type Mutable<T> = {
  -readonly [P in keyof T]: T[P];
};

interface ReadOnlyUser {
  readonly name: string;
  readonly age: number;
}

type MutableUser = Mutable<ReadOnlyUser>;

const user: MutableUser = { name: "John", age: 30 };
user.name = "Doe"; // Works fine now
```

---

###   
TypeScript-এর Utility Types টাইপ ম্যানিপুলেশন এবং জটিল টাইপ কাজগুলোকে সহজ করে। এগুলো দিয়ে:
1. টাইপ রিস্ট্রিকশন এবং প্রসারিত করা যায়।
2. ফাংশনের প্যারামিটার, রিটার্ন এবং কনস্ট্রাক্টরের টাইপ সহজে বের করা যায়।
3. existed টাইপ থেকে নতুন টাইপ তৈরি করা যায়।  

যদি TypeScript-এ টাইপ নিয়ে কাজ করতে হয়, তবে এই Utility Typesগুলো জানা অত্যন্ত গুরুত্বপূর্ণ।

---