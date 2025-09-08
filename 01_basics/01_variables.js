const accountId = 14453
var accountEmail = "anurag@gmail.com"
const accountPassword = "12345"
accountCity = "Indore"
let accountState;

accountEmail = "raganu@gmail.com"
//accountPassword = "54321"//
accountCity = "Bengaluru"

/*prefer not to use var
because of block scope and functional scope*/

console.log(accountCity)

console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);