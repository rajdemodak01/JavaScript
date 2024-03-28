const accountId=144553
let accountEmail="rajgobindadham@gmail.com"
var accountPassword="12345"
accountCity="Kolkata"

// accountId=2
//this is not allowed(as we can't change a const)
console.log(accountId);

accountEmail="rakk@gmail.com"
accountPassword="2154"
accountCity="Bankura"//this method to declare variable is not preferred
let accountState;
/*
    Prefer not to use var because of the issue in block  scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity,accountState])
