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




/*
1.Напишите функцию checkActionType, принимающую в качестве параметра определенное действие (actionType),
которая выполняет какую-либо логику (действие) в зависимости от полученного actionType:
Если actionType равен 'FETCH_DATA', то выведи в консоль - 'Производится отправка запроса на сервер'.
Если actionType равен 'LOADING_DATA', то выведи в консоль - 'Производится загрузка данных - покажи Preloader'.
Если actionType равен 'ERROR_DATA', то выведи в консоль - 'Произошла ошибка при получении данных - выведи сообщение с предупреждением'.
Если actionType равен 'GET_CURRENT_LOCATION', то выведи в консоль - 'Производится получение текущих координат'.
Если actionType равен 'ADD_NOTE', то выведи в консоль - 'Создаем заметку'.
В остальных случаях выведи в консоль - 'Дефолтное состояние - ничего не делаем'.
Решить с помощью switch
 */


// const checkActionType = (actionType) => {
//     switch (actionType) {
//         case ('FETCH_DATA'):
//             return('Производится отправка запроса на сервер')
//         case ('LOADING_DATA'):
//             return ('Производится загрузка данных - покажи Preloader')
//         case ('ERROR_DATA'):
//             return ('Произошла ошибка при получении данных - выведи сообщение с предупреждением')
//         case ('GET_CURRENT_LOCATION'):
//             return ('Производится получение текущих координат')
//         case ('ADD_NOTE'):
//             return ('Создаем заметку')
//         default:
//             return ('Дефолтное состояние - ничего не делаем')
//     }
// }
//
// console.log(checkActionType('SOMETHING'))
// console.log(checkActionType('ADD_NOTE'))
// console.log(checkActionType('GET_CURRENT_LOCATION'))
// console.log(checkActionType('ERROR_DATA'))
// console.log(checkActionType('LOADING_DATA'))
// console.log(checkActionType('FETCH_DATA'))



// циклы

// 1. Вывести в консоль числа от 1 до 10.
// for (let i = 1; i <=10 ; i++) {
//     console.log(i)
// }

// 2. Вывести в консоль таблицу умножения на 5 в виде: "5 x 1 = 5", "5 x 2 = 10", ..., "5 x 10 = 50".
// for (let i = 1; i <=10 ; i++) {
//     console.log(`5 х ${i} = ${5*i}`)
// }
// 3. Вычислить и вывести в консоль сумму чисел от 1 до 100.
// let sum = 0
// for (let i = 1; i <=100 ; i++) {
//     sum = sum + i
// }
// console.log(sum)
// 4. Вычислить и вывести в консоль среднее арифметическое чисел от 1 до 10.
// let sum2 = 0
// for (let i = 1; i <=10 ; i++) {
//     sum2 = sum2 + i
// }
// console.log(sum2 / 10)

// 5. Вычислить и вывести в консоль произведение чисел от 1 до 5.

// let product = 1
// for (let i = 1; i <=5 ; i++) {
//     product = product * i
// }
// console.log(product)

// 6. Вывести в консоль все нечетные числа от 1 до 20.
// for (let i = 1; i <=20 ; i++) {
//     if(i % 2 === 0){
//         continue
//     } else {
//         console.log(i)
//     }
// }


// map
const arr = [1, 2, 3, 4, 5]
const res = arr.map((element, index, array) => {
    console.log('element:', `${element}`)
    console.log('index:', index)
    console.log('array:', array)
    console.log('===================')
})
console.log(res)

// filter
const res1 = arr.filter(el => el > 3)
console.log(res1)






