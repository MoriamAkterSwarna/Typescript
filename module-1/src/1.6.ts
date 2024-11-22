// ? Function  

// Normal Function 

// function add(a : number, b : number =10) : number {
function add(a : number, b : number) : number {
    return a + b;
}

add(10, 20); // 30
// add(10, '20'); // error

// Arrow Function

const multiply = (a : number, b : number) : number => {
    return a * b;
}

// Method => function inside object 

const poorUser = {
    name: 'swarna', 
    balance: 0,
    addBalance(amount : number) : string {
        return ` My new balance is ${this.balance += amount}`;
    }
}


const arr : number[] = [1, 2, 3, 4, 5]; 

const newArr : number[] = arr.map((val : number) : number => val * 2); // [2, 4, 6, 8, 10]