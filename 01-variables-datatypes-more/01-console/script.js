console.log(100);

console.log('Hello World');

console.log(20, 'hello', true);

const x = 100;

console.log(x);

console.error('alert');

console.warn('warning');

console.table({name: 'leela', email: 'leela@gmail.com'});

console.group('simple');
console.log(x);
console.error('alert');
console.warn('warning');
console.groupEnd();

const styles = 'padding: 10px; background-color: while; color: green';

console.log('%cHello World', styles);