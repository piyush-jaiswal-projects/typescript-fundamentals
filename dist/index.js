"use strict";
let sales = 123456789;
let course = 'Typescript';
let is_published = true;
let level;
level = 1;
level = 'a';
function render(document) {
    console.log(document);
}
let num = [1, 2, '3'];
let numbersTs = [1, 2, 3];
let numberTs2 = [1, 2, 3];
let numbers = [];
numbers[0] = 1;
let user = [1, 'Mosh'];
user.push(1);
const small = 1;
const medium = 2;
const large = 3;
var Size;
(function (Size) {
    Size[Size["Small"] = 0] = "Small";
    Size[Size["Medium"] = 1] = "Medium";
    Size[Size["Large"] = 2] = "Large";
})(Size || (Size = {}));
;
let mySize = Size.Medium;
console.log(mySize);
;
let mySize2 = 2;
function calculateTax(income, taxYear = 2022) {
    if (taxYear < 50000)
        return income * 1.2;
    return income * 1.3;
}
calculateTax(10000, 2022);
let employee = {
    id: 1,
    name: 'Piyush',
    retire: (date) => {
        console.log(date);
    }
};
let employee1 = {
    id: 1,
    name: 'Piyush',
    retire: (date) => {
        console.log(date);
    }
};
let employee2 = {
    id: 2,
    name: 'Elon',
    retire: (date) => {
        console.log(date);
    }
};
function kgToLbs(weight) {
    if (typeof weight === 'number') {
        return weight * 2.2;
    }
    else
        return parseInt(weight) * 2.2;
}
kgToLbs(10);
kgToLbs('10');
//# sourceMappingURL=index.js.map