/**
  |============================
  | Завдання 1
  |============================
*/
// Напишіть дві функції
// letMeSeeYourName(callback) - запитує ім'я користувача через prompt
// та викликає callback-функцію greet(name)
// greet(name) - callback-функція, що приймає ім'я і виводить в консоль
// рядок "Привіт <name>"
// Реалізуте перевірку, що у prompt() введено значення, в інакшому випадку
// виведіть в консоль повідомлення "Ви не ввели імʼя"
//++++++++++++++++++ Рішення ++++++++++++++++++

// function letMeSeeYourName(callback) {
//   const name = prompt("Введіть ім'я");
//   callback(name);
// }

// function greet (name) {
//   // if (name === "" || name === null) {
//   if (!name) {
//     console.log("Ви не ввели імʼя");
//     return;
//   } console.log(`Привіт ${name}`);
// }
// letMeSeeYourName(greet)
/**
  |============================
  | Завдання 2
  |============================
*/
// Напишіть дві функції:
// 1. makeProduct(name, price, callback), яка приймає
// ім'я, ціну товару, а також callback-функцію.
// Функція makeProduct() створює об'єкт товару <product>, додаючи йому унікальний
// ідентифікатор, ключ з імʼям <id> (для цього використайте виклик new Date().getTime())
// і викликає callback-функцію, передаючи їй створений об'єкт
// 2. showProduct(product) - коллбек, який приймає об'єкт
// продукту і виводить інформацію у консоль
//++++++++++++++++++ Рішення ++++++++++++++++++

// function makeProduct(name, price, callback) {
//   const product = {
//     name,
//     price,
//     id: new Date().getTime()
//   }
//   callback(product);
// }

// function showProduct(product) {
//   console.log(product);
// }
// makeProduct("Fish", 350, showProduct);

/**
  |============================
  | Завдання 3  
  |============================
*/
// Виконай рефакторинг makeDish так, щоб не потрібно було
// щоразу передавати ім'я шефа.
// Напишіть функцію makeShef(shefName), яка повертає функцію
// makeDish(dish), що пам'ятає ім'я шефа під час її виклику
//++++++++++++++++++ Рішення ++++++++++++++++++

// const makeShef = function (name) {
//   const makeDish = function (dish) {
//     console.log(`${name} is cooking ${dish}`)
//   }
//   return makeDish
// }
// const mango = makeShef('Mango');

// mango('chiken');
// mango('burger');

// const poly = makeShef('Poly');
// poly('pizza');
// poly('sandvich');

/**
  |============================
  | Завдання 4    
  |============================
*/
// Напишіть функцію each(array, callback)
// Функція першим параметром приймає масив довільних чисел,
// а другим - callback-функцію, яка застосовується до кожного елементу масиву.
// Функція each() повинна повернути новий масив, елементами
// якого будуть результати виклику callback-функції
// callback-функція повинна множити елементи на 2
// Реалізуйте callback-функцію двома способами:
//  - за допомогою function declaration
//  - за допомогою arrow function
//++++++++++++++++++ Рішення function declaration ++++++++++++++++++
// function each(array, multiply) {
//   const items = [];
//   array.forEach(element => {
//     const result = multiply(element);
//     items.push(result);
//   })
//   return items;
// }

// function multiply(value) {
//   return value * 2;
// }
// const array = [3, 5, 6, 34, 8, 83, 12, 34];

// console.log(each(array, multiply));
//++++++++++++++++++ Рішення arrow function ++++++++++++++++++
// function each(array, multiply) {
//   const items = [];
//   array.forEach(element => items.push(multiply(element)));
//   return items;
// }

// let multiply = ((value ) => value * 2);

// const array = [3, 5, 6, 34, 8, 83, 12, 34];

// console.log(each(array, multiply));

/**
  |============================
  | Завдання 5
  |============================
*/
// Напишіть функцію makeCounter(), яка повертає іншу функцію,
// яка підраховує та логує кількість своїх викликів
// Реалізуйте внутрішню функцію двома способами:
//  - за допомогою function declaration
//  - за допомогою arrow function
//++++++++++++++++++ Рішення function declaration ++++++++++++++++++

// let makeCounter = (function () {
//   let initValue = 0
//   return function () {
//     initValue += 1;
//     return initValue
//   }
// })();
function makeCounter() {
  let currentCount = 0;

  return function() {
    return currentCount += 1;
  };
}
let counter = makeCounter();

console.log( counter() ); 
console.log( counter() ); 
console.log( counter() ); 

//++++++++++++++++++ Рішення arrow function ++++++++++++++++++  переробить, не вірно
// function makeCounter() {
//   let currentCount = 1;

//   return function() {
//     return currentCount += 1;
//   };
// }
// let counter = makeCounter();

/**
  |============================
  | Завдання 6
  |============================
*/
// Напишіть функцію savePassword(password), яка приймає значення паролю,
// який потрібно зберегти і повертає внутрішню функцію checkPassword(),
// що приймає рядок з паролем на перевірку і повертає відповідь у вигляді рядка
// "Збережений пароль: qwerty збігається з введеним паролем qwerty",
// якщо рядок збігається зі збереженим паролем або якщо не збігається
// "Збережений пароль: qwerty не збігається з введеним паролем asdfgh",
//++++++++++++++++++ Рішення ++++++++++++++++++
// function savePassword(password) {
  
//   return checkPassword;
// }

// const checkPassword = function (str) {
//   for (const word of str) {
//     if (password === str) {
//       return console.log(`${password} збігається з введеним паролем ${str}`);
//     } return console.log(`Збережений пароль: ${password} не збігається з введеним паролем ${str}`);
//   }
// }
// const enteredPassword = savePassword("qwerty");
// console.log(enteredPassword("qwerty"));
// console.log(enteredPassword("asdfgh"));

/**
  |============================
  | Завдання 7
  |============================
*/
// Напишіть функцію для зберігання знижки saveDiscount().
// Функція saveDiscount() повертає внутрішню функцію makeDiscount(),
// яка приймає суму покупки і повертає фінальну суму
// зi збереженою знижкою.
// Проведіть рефакторинг функції saveDiscount(), використовуючи
// стрілочні callback-функції
//++++++++++++++++++ Рішення ++++++++++++++++++

// const discountPremium = saveDiscount(50);
// console.log(discountPremium(1000));

import users from "./users.js";
/**
  |============================
  | Завдання 1
  |============================
*/
// Отримати масив імен всіх користувачів (поле name).
// console.log(getUserNames(usersData))
// [ 'Moore Hensley', 'Sharlene Bush', 'Ross Vazquez', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony' ]
//++++++++++++++++++ Рішення ++++++++++++++++++

function getUserNames(users) {
  return users.map(({ name }) => name)
}

console.log(getUserNames(users));
/**
  |============================
  | Завдання 2
  |============================
*/
// Отримати масив об'єктів користувачів за кольором очей (поле eyeColor).
// console.log(getUsersWithEyeColor(users, 'blue')); // [об'єкт Moore Hensley, об'єкт Sharlene Bush, об'єкт Carey Barr]
//++++++++++++++++++ Рішення ++++++++++++++++++
function getUsersWithEyeColor(users, color) {
  return users.filter(({eyeColor}) => eyeColor === color)
}

console.log(getUsersWithEyeColor(users, 'blue'));
/**
  |============================
  | Завдання 3
  |============================
*/
// Отримати масив імен користувачів за статтю (поле gender)
// console.log(getUsersWithGender(users, 'male')); // [ 'Moore Hensley', 'Ross Vazquez', 'Carey Barr', 'Blackburn Dotson' ]
//++++++++++++++++++ Рішення ++++++++++++++++++
function getUsersWithGender(users, userGender) {
  return users.filter(({ gender }) => gender === userGender).flatMap(({name}) => name);
}

console.log(getUsersWithGender(users, 'male'));
/**
  |============================
  | Завдання 4
  |============================
*/
// Отримати масив тільки неактивних користувачів (поле є активним).
// console.log(getInactiveUsers(users)); // [об'єкт Moore Hensley, об'єкт Ross Vazquez, об'єкт Blackburn Dotson]
//++++++++++++++++++ Рішення ++++++++++++++++++

function getInactiveUsers(users) {
return users.filter(({isActive}) => isActive === false)
};

console.log(getInactiveUsers(users))
/**
  |============================
  | Завдання 5
  |============================
*/
// Отримати користувача (не масив) по email (поле email, він унікальний).
// console.log(getUserWithEmail(users, 'shereeanthony@kog.com')); // {об'єкт користувача Sheree Anthony}
// console.log(getUserWithEmail(users, 'elmahead@omatom.com')); // {об'єкт користувача Elma Head}
//++++++++++++++++++ Рішення ++++++++++++++++++

function getUserWithEmail(users, email) {
  return users.find((user) => user.email === email);
}
console.log(getUserWithEmail(users, 'shereeanthony@kog.com'));
console.log(getUserWithEmail(users, 'elmahead@omatom.com')); 
/**
  |============================
  | Завдання 6
  |============================
*/
// Отримати масив користувачів віком від min до max
// console.log (getUsersWithAge(users, 20, 30));
// [об'єкт Ross Vazquez, об'єкт Elma Head, об'єкт Carey Barr]
// console.log (getUsersWithAge(users, 30, 40));
// [об'єкт Moore Hensley, об'єкт Sharlene Bush, об'єкт Blackburn Dotson, об'єкт Sheree Anthony]
//++++++++++++++++++ Рішення ++++++++++++++++++
function getUsersWithAge(users, minAge, maxAge) {
  return users.filter(({ age }) => age >= minAge && age < maxAge);
};
console.log(getUsersWithAge(users, 20, 30));
/**
  |============================
  | Завдання 7
  |============================
*/
// Отримати загальну суму балансу (поле balance) всіх користувачів.
// console.log(calculateTotalBalance(users)); // 20916
//++++++++++++++++++ Рішення ++++++++++++++++++

function calculateTotalBalance(users) {
  return users.reduce((total, user) => {
    return total + user.balance;
  }, 0);
}

console.log(calculateTotalBalance(users));
/**
  |============================
  | Завдання 8
  |============================
*/
// Отримати масив імен всіх користувачів, які мають одиного друга із зазначеним ім'ям.
// console.log(getUsersWithFriend(users, 'Briana Decker'))); // [ 'Sharlene Bush', 'Sheree Anthony' ]
// console.log(getUsersWithFriend(users, 'Goldie Gentry')); // [ 'Elma Head', 'Sheree Anthony' ]
//++++++++++++++++++ Рішення ++++++++++++++++++
function getUsersWithFriend(users, friendName) {
return users.filter(({friends}) => friends.includes(friendName)).map(user => user.name);
};

console.log(getUsersWithFriend(users, 'Goldie Gentry'));
/**
  |============================
  | Завдання 9
  |============================
*/
// Отримати масив імен (поле name) людей, відсортованих залежно від кількості їх друзів (поле friends)
// console.log(getNamesSortedByFriendCount(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony', 'Ross Vazquez' ]
//++++++++++++++++++ Рішення ++++++++++++++++++
function getNamesSortedByFriendCount(users) {
  return [...users]
    .sort((a, b) => a.friends.length - b.friends.length)
    .map(user => user.name);
}

console.log(getNamesSortedByFriendCount(users));
/**
  |============================
  | Завдання 10
  |============================
*/
// Отримати масив всіх умінь всіх користувачів (поле skills), при цьому не повинно бути
// уміннь, що повторюються, і вони повинні бути відсортовані в алфавітному порядку.
// ['adipisicing', 'amet', 'anim', 'commodo', 'culpa', 'elit', 'ex', 'ipsum', 'irure', 'laborum',
// 'lorem', 'mollit', 'non', 'nostrud', 'nulla', 'proident', 'tempor', 'velit', 'veniam']
//++++++++++++++++++ Рішення ++++++++++++++++++
function getSkills(users) {
  return [...users]
    .flatMap(user => user.skills)
    .filter((skill, index, array) => array.indexOf(skill) === index)
    .sort((a, b) => a.localeCompare(b));
}

console.log(getSkills(users));
/**
  |============================
  | Завдання 11
  |============================
*/
// Напишіть функцію compact(), яка очищає масив від небажаних значень,
// таких як false, undefined, порожні рядки, нуль, null.
// const data = [0, 1, false, 2, undefined, "", 3, null];
// console.log(compact(data)); // [1, 2, 3]
//++++++++++++++++++ Рішення ++++++++++++++++++
function compact(arr) {
  return arr.filter((n) =>  n !== false || n !== undefined || n !== "" || n !== 0 || n !== null )};

const data = [0, 1, false, 2, undefined, "", 3, null];
console.log(compact(data)); // [1, 2, 3]

/**
  |============================
  | Завдання 12
  |============================
*/
// Напишіть функцію without(), яка повертає новий масив без наданих значень. Використовуйте примітивні типи.
// const data = [1, 2, 3, 4, 1, 2];
// console.log(without(data, 1, 2)); // [3, 4]
//++++++++++++++++++ Рішення ++++++++++++++++++

/**
  |============================
  | Завдання 13
  |============================
*/
// Необхідно написати функцію isEqualSymbols(), що приймає в аргументах два рядки
// і повертає true, якщо ці рядки складаються з ідентичних літер і false в іншому випадку.
// console.log(isEqualSymbols("GOOD", "GODO")); // результат true
// console.log(isEqualSymbols("кіт", "струм")); // результат false
// console.log(isEqualSymbols("кіт", "тік")); // результат true
//++++++++++++++++++ Рішення ++++++++++++++++++

/**
  |============================
  | Завдання 14
  |============================
*/
// Сортування примітивів.
// Виконайте сортування масиву цін за спаданням та зростанням
//++++++++++++++++++ Рішення ++++++++++++++++++
const prices = [1000, 240, 670, 360, 89, 20];

/**
  |============================
  | Завдання 15
  |============================
*/
// Сортування рядків.
// Виконайте сортування масиву назв моніторів у алфавітному та зворотньому порядку.
//++++++++++++++++++ Рішення ++++++++++++++++++
const monitors = ["SAMSUNG", "LG", "ASUS", "DELL", "BENQ", "ASER"];

/**
  |============================
  | Завдання 16
  |============================
*/
// Сортування складних типів
// Виконайте сортування масиву об'єктів:
// 1. За зростанням та зменшенням значення властивості price
// 2. За ім'ям в алфавітному та зворотному порядку
//++++++++++++++++++ Рішення ++++++++++++++++++
const items = [
  { name: "SAMSUNG", price: 15000 },
  { name: "LG", price: 9000 },
  { name: "DELL", price: 27000 },
  { name: "BENQ", price: 12000 },
  { name: "ASER", price: 7000 },
];

/**
  |============================
  | Завдання 17
  |============================
*/
// Зібрати в allTopics масив всіх предметів всіх курсів
// Виконати фільтрацію, залишивши в uniqueTopics тільки унікальні елементи
//++++++++++++++++++ Рішення ++++++++++++++++++
const courses = [
  {
    name: "Basic HTML+CSS",
    topics: ["VSCode", "HTML", "CSS", "GitHub", "GitHub Desctop"],
  },
  {
    name: "Intermediate HTML+CSS",
    topics: ["VSCode", "HTML", "CSS", "GitHub", "Git", "Terminal"],
  },
  {
    name: "Basic JavaScript",
    topics: [
      "VSCode",
      "Type system",
      "Loops",
      "Function",
      "Git",
      "Conditions",
      "Classes",
      "GitHub",
      "DOM",
    ],
  },
  {
    name: "Intermediate JavaScript",
    topics: ["VSCode", "NPM", "Bundlers", "Transpiling", "Git", "Promises", "AJAX", "GitHub"],
  },
];

/**
  |============================
  | Завдання 18
  |============================
*/
// Призначити знижку 20% на фрукти в масиві,
// Присвоїти ID для кожного продукту
//++++++++++++++++++ Рішення ++++++++++++++++++

const fruits = [
  { name: "apple", price: 200 },
  { name: "orange", price: 300 },
  { name: "grapes", price: 750 },
];

/**
  |============================
  | Завдання 19
  |============================
*/
// Повернути об'єкт у якому вказується кількість тегів
//++++++++++++++++++ Рішення ++++++++++++++++++
const tweets = [
  { id: "000", likes: 5, tags: ["js", "nodejs"] },
  { id: "001", likes: 2, tags: ["html", "css"] },
  { id: "002", likes: 17, tags: ["html", "js", "nodejs"] },
  { id: "003", likes: 8, tags: ["css", "react"] },
  { id: "004", likes: 0, tags: ["js", "nodejs", "react"] },
];

/**
  |============================
  | Завдання 20
  |============================
*/
// Дізнатись суму років практики в об'єкті workers
//++++++++++++++++++ Рішення ++++++++++++++++++
const workers = [
  { id: 10, name: "Mango", years: 14 },
  { id: 2, name: "Poly", years: 19 },
  { id: 41, name: "Ajax", years: 30 },
  { id: 99, name: "Kiwi", years: 22 },
];

/**
  |============================
  | Завдання 21
  |============================
*/
// Даний масив із числами. Залишіть у ньому лише додатні числа.
// Потім порахуйте квадратний корінь цих чисел.
//++++++++++++++++++ Рішення ++++++++++++++++++
// const array = [121, -2, 225, 0, 4, -5, 36, -11];

/**
  |============================
  | Завдання 22
  |============================
*/
// Створення масиву значень Фаренгейта із масиву значень Цельсія
// Для обрахунку використайте формулу <temperature * 1.8 + 32>
//++++++++++++++++++ Рішення ++++++++++++++++++
const celsius = [-15, -5, 0, 10, 16, 20, 24, 32];
// fahrenheit is [5, 23, 32, 50, 60.8, 68, 75.2, 89.6]

/**
  |============================
  | Завдання 23
  |============================
*/
// Знайти унікальні елементи за допомогою reduce
//++++++++++++++++++ Рішення ++++++++++++++++++
const numbers = [1, 9, 0, 1, 5, 9, 1, 6];
