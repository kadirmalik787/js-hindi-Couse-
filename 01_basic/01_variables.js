const accountID = 123344;
let accountEmail = "kadir123@gmail.com";
var accountPassword = "12345";
accountCity = "jaipur"

// accountID = 2 // not allowed
// { } isko hi scope bola jata ha
accountEmail = "malik@mail.com"
accountPassword="2r4444"
accountCity= "rampur"

/* prefer not to use var because of issue in block scope and function scope  

*/
 
console.table([accountEmail,accountID,accountCity])
console.log(accountID);