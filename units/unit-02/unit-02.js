// Task 1.
// Створіть дві змінні a = 7 та b = 9. Виведіть у консоль результат множення a на b.

// Task 2.
// Створіть дві змінні c = 7 та d = 9. Виведіть на сторінку в .out-2 результат ділення c на d.

// Task 3.
//  Створіть дві змінні e = 3 та f = 5. Виведіть на сторінку в .out-3 результат додавання e + f.

// Task 4.
//  Створіть дві змінні e1 = '3' і f1 = 5. Виведіть на сторінку в .out-4 результат додавання e1 + f1. Поясніть відмінність від попереднього результату.

// Task 5.
//  Створіть дві змінні e2 = 3 і f2 = 0. Виведіть на сторінку в .out-5 результат ділення e2 на f2.

// Task 6.
//  Створіть дві змінні e3 = 3 та f3 = 'Hello'. Виведіть на сторінку в .out-6 результат додавання двох змінних.

// Task 7.
//  Створіть дві змінні e4 = 3 та f4 = 'Hello'. Виведіть на сторінку в .out-7 результат множення двох змінних.

// Task 8.
// Після натискання кнопки .b-8 виконується функція, яка виводить в div.out-8 те, що користувач ввів в input.i-8. Розгляньте код і розберіть роботу скрипта

function t8() {
  // значення value завжди отримуємо всередині функції
  const data = document.querySelector(".i-8").value; // отримали значення
  // нижче виводимо значення на сторінку
  document.querySelector(".out-8").innerHTML = data;
}

document.querySelector(".b-8").onclick = t8;

// Task 9.
// Після натискання кнопки .b-9 виконується функція t9, яка виводить в div.out-9 те, що користувач ввів в input.i-9. Додайте очищення input після натискання кнопки.

function t9() {}

document.querySelector(".b-9").onclick = t9;

// Task 10.
// Після натискання на кнопку .b-10 виконується функція t10, яка виводить у div.out-10 те, що користувач ввів в input.i-10 помножене на 20.

function t10() {}

document.querySelector(".b-10").onclick = t10;

// Task 11.
// За натисканням на кнопку .b-11 виконується функція t11, яка виводить на сторінку в .out-11 число, яке ввів користувач в i-11 і до нього додане число 55. У цій задачі ми не приводимо до числа значення отримане з input.

function t11() {}

document.querySelector(".b-11").onclick = t11;

// Task 12.
// Після натискання на кнопку виконується функція t12. Функція повинна отримати дані з input i.12-1 та i.12-2 (користувач вводить в них прізвище та ім'я). Після чого вивести в .out-12 рядок 'Hello ім'я прізвище', де ім'я - це ім'я користувача, а прізвище - це введене прізвище.
// Звертаємо увагу на те, що ми працюємо у відповідності до завданням.Hello - з великої літери. Між Hello ім'я один пробіл

function t12() {}

document.querySelector(".b-12").onclick = t12;

// Task 13.
// При натисканні кнопки .b-13 виконується t13. Функція отримує з input.i-13-1 і .i-13-2 числа змінні a, b. Після чого в .out-13 виводить їхню суму. Потрібно перетворити змінні a, b у числа!

function t13() {}

document.querySelector(".b-13").onclick = t13;

// Task 14.
// Після натискання кнопки .b-14 виконується функція t14. Вона замінює значення value input.i-14 на рядок 'Go'

function t14() {}

document.querySelector(".b-14").onclick = t14;

// Task 15.
//  Після натискання кнопки .b-15 виконується функція t15. Вона встановлює .i-15 властивість style.border = "4px solid red".

function t15() {}

document.querySelector(".b-15").onclick = t15;

// Task 16.
// Після натискання кнопки .b-16 виконується функція t16. Функція отримує з .i-16-1 та i-16-2 числа. Виведіть у .out-16 суму даних чисел по натисканню кнопки b-16. Не переводимо отримані значення з input у число!

function t16() {}

document.querySelector(".b-16").onclick = t16;

// Task 17.
// Після натискання кнопки .b-17 виконується функція t17. Функція отримує з .i-17 число. Вивчіть роботу коду та запам'ятайте відмінності. Спробуйте ввести цифри 5, 4zz, zz4, -200, 33.05

function t17() {
  let a = document.querySelector(".i-17").value;
  document.querySelector(".out-17-1").innerHTML = +a;
  document.querySelector(".out-17-2").innerHTML = parseInt(a, 10);
  document.querySelector(".out-17-3").innerHTML = Number(a);
}

document.querySelector(".b-17").onclick = t17;

// Task 18.
// Після натискання кнопки .b-18 виконується функція t18. Функція отримує з .i-18 число, яку потірбно присвоїти у змінну a. Виводить в out-18 результат операції parseFloat(a). Спробуйте ввести значення 5, 33.02, 33.9a, -20.01

function t18() {}

document.querySelector(".b-18").onclick = t18;

// Task 19.
// Після натискання кнопки .b19 функція t19 повинна в out-19 вивести суму двох відʼємних чисел із input .i-19-1 та .i-19-2.

function t19() {}

document.querySelector(".b-19").onclick = t19;

// Task 20
//  При натисканні на кнопку .b-20 у out-20 виводиться число - скільки разів була натиснута кнопка .b-20.

let count = 0;

function t20() {
  // порахувати нове значення для count
  // нижче додати вівід в out-20
}

document.querySelector(".b-20").onclick = t20;
