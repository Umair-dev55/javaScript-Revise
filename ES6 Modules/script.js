//----Named Import-----
import { b } from "./app.js";
console.log(b);
import { arr } from "./app.js";
console.log(arr);
//Default Import-------
import user, { user2, user3 } from "./app.js";

// Print
console.log(user); // { name: "John", age: 20, city: "Lahore" }
console.log(user2); // { name: "Ali", age: 20, city: "Lahore" }
console.log(user3); // { name: "Ahmed", age: 20, city: "Lahore" }

//Output
// 20
// (10) [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// {name: 'John', age: 20, city: 'lahore'}
// {name: 'Ali', age: 20, city: 'lahore'}
// {name: 'Ahmed', age: 20, city: 'lahore'}•
