"use strict";
//index.htmlda scriptda index.js ulangan buni sababi index.tsda yozilgan kodlar index.jsda compilatsa bo'ladi va index.js htmlga ulangani sababli bu tsda yozilgan kodlarni jsda yani browserda ko'rish mumkun
/////////////////////////////////////////////
// console.log("Hello TypeScript");
// console.log("Salom Dunyo");//qayta qayta compilatsa uchun tsc yoki tsc index.ts commandlarini bosib yurish shartmas terminalda tsc --watch buyrug'i berib qo'yilsa bo'ldi autocmpliteni o'zi bajaraveradi va buni 3 4 hil yo'li bor ekan hullas muammomas
class Person {
    constructor(name, age) {
        this._name = "";
        this._age = 0;
        this._name = name;
        this._age = age;
    }
    seyHello() {
        return `Assalomu aleykum mening ismim ${this._name}!`;
    }
}
class Student extends Person {
    constructor(name, age, group, course) {
        super(name, age);
        this._group = "";
        this._course = 0;
        this._group = group;
        this._course = course;
    }
    info() {
        return `
        Ism: ${this._name}
        Yosh: ${this._age}
        Gruh: ${this._group}
        Kurs: ${this._course}`;
    }
}
const nur2 = new Student("Nur-2, bu Person classidan vorislangan Student classi student classi IStudent interfacedan vorislangan IStudent interface esa IPersonn interfacedan vorislangan ", 36, "123-gruh", 4);
console.log(nur2);
console.log(nur2.seyHello());
console.log(nur2.info());
// tsc --watch
//# sourceMappingURL=index.js.map