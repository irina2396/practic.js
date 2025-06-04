//Напишіть дві функції
// letMeSeeYourName(callback) - запитує ім'я користувача
//через prompt та викликає callback функцію
//greet(name) - коллбек, що приймає ім'я і логірує в консоль
//Рядок "Привіт <name>"
//Реалізуй перевірку, що prompt не порожній

// function letMeSeeYourName(callback) {
//     const name = prompt("Введи своє ім'я:");

//     if (name !== "") {
//         callback(name);
//     } else {
//         console.log("Ім'я не введено");
//     }
// }

// function greet(name) {
//     console.log(`Привіт, ${name}`);
// }
// letMeSeeYourName(greet)

// *====================================

//Напишіть дві функції
//makeProduct(name, price, callback) - приймає
//ім'я та ціну товару, а також callback.
//Функція створює об'єкт товару, додаючи йому унікальний
//ідентифікатор як id і викликає callback
//Передаючи йому створений об'єкт.
//showProduct(product) - коллбек приймаючий об'єкт
//продукту і логірующий їх у консоль

// ?======================
// id: Math.random()
// id: new Date()
// id: Date.now()
// id: Math.floor(Math.random() * 100)
// ?=======================

// function makeProduct(name, price, callback) {
//     const product = {
//         id: Date.now(),
//         name,
//         price
//     };
//     callback(product);
// }

// function showProduct(product) {
//     console.log(product);
// }

// console.log(makeProduct("Fish", 350, showProduct));
// console.log(makeProduct("Chiken", 250, showProduct));

// *===================================================

// const product = {
//   price: 5000,
//   showPrice() {
//     console.log(this.price);
//   },
// };
// product.showPrice();

// *=================================================

// function callAction(action) {
//   return action;
// }

// const item = {
//   getQuatity() {
//     console.log(this.quantity);
//   },
//   quantity: 5,
// };

// callAction(item.getQuatity());

// *=================================================

// Напишіть функцію makeShef(shefName), яка повертає функцію
// makeDish(dish), яка памятає імя щефа піл час її виклику
// Функція  makeDish має логіровать рядок "<імя шефа> is cooking <dish>"

// function makeShef(shefName) {
//   return function makeDish(dish) {
//     console.log(`${shefName} is cooking ${dish}`);
//   };
// }

// const shefCooking = makeShef("Jon");
// shefCooking("dinner");
// shefCooking("ckiken");

// *==============================================

// Зібрати в allTopics масив всіх предметів всіх курсів
// Виконати фільтрацію, залишивши в uniqueTopics тільки унікальні елементи

// const courses = [
//   {
//     name: "Basic HTML+CSS",
//     topics: ["VSCode", "HTML", "CSS", "GitHub", "GitHub Desctop"],
//   },
//   {
//     name: "Intermediate HTML+CSS",
//     topics: ["VSCode", "HTML", "CSS", "GitHub", "Git", "Terminal"],
//   },
//   {
//     name: "Basic JavaScript",
//     topics: [
//       "VSCode",
//       "Type system",
//       "Loops",
//       "Function",
//       "Git",
//       "Conditions",
//       "Classes",
//       "GitHub",
//       "DOM",
//     ],
//   },
//   {
//     name: "Intermediate JavaScript",
//     topics: [
//       "VSCode",
//       "NPM",
//       "Bundlers",
//       "Transpiling",
//       "Git",
//       "Promises",
//       "AJAX",
//       "GitHub",
//     ],
//   },
// ];

// const allTopics = courses.flatMap(course => course.topics);
// const uniqueTopics = [...new Set(allTopics)];

// console.log(uniqueTopics);

// const allTopics = courses.flatMap((course) => course.topics);
// const uniqueTopics = allTopics.filter(
//   (topic, index, array) => array.indexOf(topic) === index
// );

// *=========================================================

//Напиши функцію конструктор User для створення користувача з такими властивостями
//a. userName - ім'я, рядок
//b. age - вік, число
//c. numbersOfPost - кількість постів, число
//d. клас очікує 1 параметр - об'єкт налаштувань з однойменними властивостями

//Додай метод getInfo(), який повертає рядок:
//`Користувачеві ${} ${} років і в нього ${} публікацій.

// function User({ userName, age, numbersOfPost }) {
//     this.userName = userName;
//     this.age = age;
//     this.numbersOfPost = numbersOfPost;

//     this.getInfo = function () {
//         return `Користувачеві ${this.userName} ${this.age} років і в нього ${this.numbersOfPost} публікацій.`;
//     };
// }
// const polly = new User({ userName: "Polly", age: 30, numbersOfPost: 15 });
// console.log(polly);
// polly.getInfo();

// *=======================================================

//Напиши клас Client який створює об'єкт
//з ​​властивостями login email
//Оголоси приватні властивості #login #email,
//доступ до яких зроби через геттер та сеттер login email
// getClientData()
// changeEmail

// class Client {
//   #login;
//   #email;

//   constructor(login, email) {
//     this.#login = login;
//     this.#email = email;
//   }

//   getClientData() {
//     return {
//       login: this.#login,
//       email: this.#email,
//     };
//   }

//   changeEmail(newEmail) {
//     this.#email = newEmail;
//   }
// };

// const client = new Client("mango", "mango@gmail.com");
// client.changeEmail = '"mango@gmail.com"';
// console.log(client.getClientData.email);

// *=================================================

// get getClientData()
// set changeEmail(newEmail)
//  Написати клас, який буде представляти зоопарк тварин.
//  Створити загальний клас Animal для тварин.
// У зоопарку повинні бути різні типи тварин, такі як ссавці, птахи, рептилії тощо.
// Кожен тип тварин повинен мати свої властивості та методи, наприклад,
//  методи для отримання інформації про тварину та для годівлі тварин.
//  Крім того, зоопарк повинен мати метод для додавання тварин до списку та
// метод для виведення списку всіх тварин у зоопарку.

// class Animal {
//   constructor(name, type) {
    
//   }
//   getInfo() { }
    
//   feed() {}
// }

// class Mammal extends Animal {
//   constructor(name, type, ...) {
//     super(name,type)
//   }
// }
// class Bird extends Animal {
//   constructor(name, type, ...) {
//     super(name,type)
//   }
// }
// class Zoo {
//   constructor() {
    
//   }
//   addAnimal() { }
//   listAnimals() {}
// }
// const zoo = new Zoo();

// const lion = new Mammal("Simba", "Lion", "African Lion");
// zoo.addAnimal(lion);

// const eagle = new Bird("Bald Eagle", "Bird", 72);
// zoo.addAnimal(eagle);

// zoo.listAnimals();


