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

