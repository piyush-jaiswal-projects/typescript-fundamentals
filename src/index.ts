let sales = 123_456_789;
let course = 'Typescript';
let is_published = true;
let level;
level = 1;
level = 'a';
//avoid using any type

function render(document: any) {
    console.log(document);
}
//OR
// in tsconfig.json file under typecheck set noImplicitAny to false
// but this is not advisable at all

// <-----------------ARRAYS------------------>
let num = [1, 2, '3'];
//issue if above arr passed to function expecting numbers, therefore
let numbersTs: number[] = [1, 2, 3];
let numberTs2 = [1, 2, 3];

//explicitly apply type if you want to use empty array
let numbers: number[] = [];
numbers[0] = 1;


//<----------------TUPLES----------------->
let user: [number, string] = [1, 'Mosh']
user.push(1); // gap in TS
// tuples are useful only in case of key value pairs

//<----------------ENUMS-------------------->
//represents lists of related constants
const small = 1;
const medium = 2;
const large = 3;

//PascalCase
// enum Size { Small = 'a', Medium, Large };
// enum Size { Small = 1, Medium, Large };
enum Size { Small = 0, Medium, Large };
let mySize: Size = Size.Medium;
console.log(mySize);

//more optimised js code
const enum SizeList { Small = 0, Medium, Large };
let mySize2: SizeList = SizeList.Large;

// <-------------------FUNCTIONC---------------->
// if dont want to return anything
// function calculateTaxVoid(income: number): void {
//     return;
// }

// put ? in front of a parameter to make it optional

// but if want to define some default value of optional parameter do it in this way
function calculateTax(income: number, taxYear = 2022): number {
    // let x; //warning for unused variables
    if (taxYear < 50_000)
        return income * 1.2;
    // js return undefined
    return income * 1.3;
}

calculateTax(10_000, 2022);

// <--------------Objects-------------->

let employee: {
    readonly id: number,
    name: string,
    retire: (date: Date) => void
} = {
    id: 1,
    name: 'Piyush',
    retire: (date: Date) => {
        console.log(date);
    }
};
// employee.id = 3; - error as id is declared read only

//<------------Advanced Types----------->

// <----------Type Aliases----------->

type Employee = {
    readonly id: number,
    name: string,
    retire: (date: Date) => void
}

let employee1: Employee = {
    id: 1,
    name: 'Piyush',
    retire: (date: Date) => {
        console.log(date);
    } 
}

let employee2: Employee = {
    id: 2,
    name: 'Elon',
    retire: (date: Date) => {
        console.log(date);
    } 
}

// <----------Union Types------------>

function kgToLbs(weight: number | string): number {
    //Narrowing
    if (typeof weight === 'number') {
        return weight * 2.2
    }
    else 
        return parseInt(weight) * 2.2
}
 
kgToLbs(10)
kgToLbs('10')

// <---------Intersection types----------->
let weight: number & string; // technically not possible

type Draggable = {
    drag: () => void
}

type Resizeable = {
    resize: () => void
}

type UIWidget = Draggable & Resizeable

let textBox: UIWidget = {
    drag: () => { },
    resize: () => { }
}


// <-------------Literal Types---------->
// Literal (exact, specific)
type Quantity = 50 | 100;
let quantity: Quantity = 100;
type Metric = 'cm' | 'inch';


// <------------Null Values-------------->
function greet(name: string | null | undefined) {
    if (name)
        console.log(name.toUpperCase()); 
    else
        console.log('Hola!');
        
}
greet(null)


// <--------------Optional Chaining------------->

type Customer = {
    birthday?: Date
}

function getCustomer(id: number): Customer | null | undefined
{
    return id === 0 ? null : { birthday: new Date() };
}

let customer = getCustomer(0);
// Optional property access operator ->  ?.
console.log(customer?.birthday?.getFullYear()); // logs undefined

// Optional element access operator
// if(customers !== null && customer !== undefined)
// sol: customers?.[0]

// Optional call 
let log: any = null;
log?.('a')

