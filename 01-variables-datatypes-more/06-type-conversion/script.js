let amount = '100';
console.log(amount, typeof amount);

// amount = parseInt(amount);
console.log(parseInt(amount), typeof parseInt(amount));

// amount = +amount;
console.log(+amount, typeof +amount);

// amount = number(amount)
console.log(Number(amount), typeof Number(amount));

// Convert number to string
// amount = amount.toString();
console.log(amount.toString() , typeof amount.toString());

// Convert string to decimal
let decimal_amount = '99.5';
decimal_amount = parseFloat(decimal_amount);

console.log(parseFloat(decimal_amount), typeof parseFloat(decimal_amount));

// Convert number to boolean 
boolean_amount = Boolean(amount)
console.log(boolean_amount, typeof boolean_amount);

// trying to parse number into string
str_amount = 'hundred';
console.log(str_amount, typeof str_amount);

int_amount = parseInt(str_amount);

console.log("NaN is a property of global writeable property, non-written able property, math operations like (-1)**(1/2)");

console.log(int_amount, typeof int_amount);
console.log(Math.sqrt(-1));
console.log(1 + NaN);
console.log(undefined + undefined);

