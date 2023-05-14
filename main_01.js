//1) Типы данных:
// I) Примитивы:
    const string = '123';
    const number = 123;
    const bigInt = 10n;
    const nullType = null;
    const undefinedType = undefined;
    const boolean = true;
    // const symbol = symbol;
// II) Объекты
    const obj = {}

// 2)typeof - возвращает тип данных в строком виде
console.log(typeof nullType) // "object"
console.log(typeof (typeof nullType)) // string

// 3) Операнды и операторы
// a) Унарные операторы (операнды- цифры)
console.log(+3)
console.log(-9)
console.log(+7)
console.log(-17)

// b) Бинарые операторы
console.log(2+3)
console.log(124-9)
console.log(12+7)
console.log(556-17)
// c) Тернарый оператор
let a = 12;
console.log(a > 17 ? true: false);