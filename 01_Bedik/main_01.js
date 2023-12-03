//1) Типы данных:
// I) Примитивы:
//     const string = '123';
//     const number = 123;
//     const bigInt = 10n;
//     const nullType = null;
//     const undefinedType = undefined;
//     const boolean = true;
//     // const symbol = symbol;
// // II) Объекты
//     const obj = {}
//
// // 2)typeof - возвращает тип данных в строком виде
// console.log(typeof nullType) // "object"
// console.log(typeof (typeof nullType)) // string

// 3) Операнды и операторы
// // a) Унарные операторы (операнды- цифры)
// console.log(+3)
// console.log(-9)
// console.log(+7)
// console.log(-17)

// b) Бинарые операторы
// console.log(2+3)
// console.log(124-9)
// console.log(12+7)
// console.log(556-17)
// c) Тернарый оператор
// let a = 12;
// console.log(a > 17 ? true: false);

// 4) Инкремент и Декремент
// let index = 1;
// console.log(index++) // 1
// console.log(++index) // 3
// console.log(++index) // 4
// console.log(index++) // 4
// console.log(index) // 5
// console.log(index--) // 5
// console.log(--index) // 3
// console.log(index--) // 3
// console.log(index--) // 2
// console.log(index) // 1

// 5) Операторы сравнения == и ===

// console.log(1 == "1")  //сравниваются данные и идёт преобразование
// console.log(1 === "1") // учитывает тип данных при сравнении

// 6) falsy значения : 0 "" undefined null false

// Задачи на сравнение:

// console.log(5 == 5)
// console.log(5 == "5")
// console.log(5 === 5)
// console.log(5 === "5")
//
// console.log(5 > 5)
// console.log(5 < 5) // false
// console.log(5 >= 5)
// console.log(5 <= 5)
// console.log("5px" > 3) // false - Строку "5px" - пробразует в число - NaN
// console.log(Number("5px"))// NaN
// console.log("5px" < 10) // false
// console.log("A" > "a")
// console.log("B" < "b")

// 7) Логические операторы
// ! -  не (наивысший приоритет)
// && - и (ниже)
// || - или (низкий)

// console.log(10 && 2)
// console.log(0 && 1)
// console.log(23 || 7)
// console.log(0 || 9)
// console.log(0 || 1 && 4)
// console.log(0 && 2 || 8)

// let a = true;
// let b = true;
// console.log(a && b)
// console.log(!a && b)
// console.log(a && !b)
// console.log(!a && !b)
// console.log(!(a && b))
// console.log(!(!a && !b))

// let a = true;
// let b = true;
// console.log(a || b)
// console.log(!a || b)
// console.log(a || !b)
// console.log(!a || !b)
// console.log(!(a || b))
// console.log(!(a || !b))
// console.log(!(!a || !b))

// Задачи с переменными:
// let a = ""; // false !! - для быстрой конвертации примитива в boolean
// let b = 9; // true
// let c = null; // false
//
// console.log(!!(!a || !b && true)) // true
// console.log(!!(a || !b && !c)) // false
// console.log(!!(a || !b || c)) // false
// console.log(!!(!a && !b && !c)) // false
// console.log(!!(!a || !b && !c)) // true

// Условные операторы

/*
1. Выведи в консоль, если погода хорошая, то 'Идём гулять', если нет - 'Идём в кино'.
Решить с помощью if else и тернарного оператора
 */
// let weather = 'хорошая';
// console.log(weather === "хорошая" ? "Идём гулять" : "Идём в кино" )
// weather = "плохая";
// console.log(weather === "хорошая" ? "Идём гулять" : "Идём в кино" )

/*
2. Напишите условие для функции salutation, которая возвращает приветствие с именем пользователя,
если имя пользователя задано, иначе возвращает общее приветствие:
Если параметр name задан, то вернуть строку, содержащую Рад видеть, и значение параметра name !
В противном случае вернуть строку, содержащую Привет, друг!.
 */

// const salutation = (name) => {
//     return name ? `Рад видеть, ${name}!` : "Привет, друг!"
// }
// console.log(salutation("Рома")) // Рад видеть, Рома!
// console.log(salutation("")) // Привет, друг!
// console.log(salutation()) //Привет, друг!
// console.log(salutation(123)) // Рад видеть, 123!
// console.log(salutation('Всех')) // Рад видеть, Всех!

/*
3. Если переменная a равна 10, то выведите 'равно 10', иначе выведите 'не равно 10'.
Проверьте работу скрипта при a, равном 10, 5, -10.

 */
// const checkValue = (a) => {
//     return a === 10 ? "равно 10" : "не равно 10";
// }
//
// console.log(checkValue(10))
// console.log(checkValue(5))
// console.log(checkValue(-10))

/*
4. Если переменная a больше или равна 0, а переменная b меньше или равна 100,
то выведите 'переменная a больше или равна 0, и переменная b меньше или равна 100',
иначе выведите 'одно или оба условия не выполняются'.
Проверьте работу скрипта при a и b, равном 50 и 150, -10 и 50.
*/

// const checkValues = (a,b) => {
//     return (a >= 0 && b <= 100) ? "переменная a больше или равна 0, и переменная b меньше или равна 100"
//         : "одно или оба условия не выполняются" ;
// }
// console.log(checkValues(50,150))
// console.log(checkValues(-10,50))
// console.log(checkValues(20,70))

/*
5. Если переменная a является четным числом, то выведите 'a - четное число', иначе выведите 'a - нечетное число'.
Проверьте работу скрипта при a, равном 10, 5, -10.
*/
// const checkEvenValue = (a) => {
//     return a % 2 === 0 ? "a - четное число" : "a - нечетное число"
// }
// console.log(checkEvenValue(10))
// console.log(checkEvenValue(5))
// console.log(checkEvenValue(-10))



/*
6. Сделать проверку через двойной тернарник.
 Если переменная a больше нуля, то выведите 'a - положительное число', если переменная a меньше нуля, то выведите 'a - отрицательное число', иначе выведите 'a - равно 0' .
Проверьте работу скрипта при a, равном 10, -5, 0.
*/

// const checkPositiveValue = (a) => {
//     return a > 0 ? "a - положительное число" : a < 0 ? "a - отрицательное число" : "a равно 0"
// }
// console.log(checkPositiveValue(5))
// console.log(checkPositiveValue(0))
// console.log(checkPositiveValue(-5))


// Оператор нулевого слияния ?? ("Nullish coalescing operator")
/*
    Проверяет на наличие null или undefined, если одно из нох есть, то использует то что значение, которое стоит
     после ??, а если их нет, то в таком случае использует именно то значение, которое стоит до ??
 */

//
// let username = null;
// const greeting = `Привет, ${username ?? 'Гость'}!`;
// console.log(greeting); // Привет, Гость!
//
//
// let username2 = undefined;
// const greeting2 = `Привет, ${username2 ?? 'Гость2'}!`;
// console.log(greeting2); // Привет, Гость2!
//
// let username3 = "Валера";
// const greeting3 = `Привет, ${username3 ?? 'Гость3'}!`;
// console.log(greeting3); // Привет, Валера!
//
// let username4 = 123;
// const greeting4 = `Привет, ${username4 ?? 'Гость4'}!`;
// console.log(greeting4); // Привет, 123!


// Switch
/*
1.Напишите функцию getDiscount, принимающую параметр userStatus,
которая присваивает скидку в зависимости от статуса пользователя:
Если статус пользователя равен 'VIP', то скидка равна 25%.
Если статус пользователя равен 'privileged', то скидка равна 15%.
Если статус пользователя равен 'clubMember', то скидка равна 5%.
В остальных случаях скидка равна 0%.
Решить двумя способами, с помощью else if и switch
 */
//
// const getDiscount = (userStatus) => {
//     switch (userStatus) {
//         case('VIP') :
//             return 25
//         case('privileged') :
//             return 15
//         case('clubMember') :
//             return 5
//         default:
//             return 0
//     }
// }
//
// const getDiscount2 = (userStatus) => {
//     if (userStatus === 'VIP') {
//         return 25
//     } else if (userStatus === 'privileged') {
//         return 15
//     } else if (userStatus === 'clubMember') {
//         return 5
//     } else {
//         return 0
//     }
// }
//
// console.log(getDiscount('other'))
// console.log(getDiscount('privileged'))
// console.log(getDiscount('clubMember'))
// console.log(getDiscount('VIP'))
//
// console.log(getDiscount2('privileged'))
// console.log(getDiscount2('Privileged'))
// console.log(getDiscount2('VIP'))
// console.log(getDiscount2('vip'))
// console.log(getDiscount2('clubMember'))
// console.log(getDiscount2('other'))




