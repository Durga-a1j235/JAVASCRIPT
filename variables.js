const accountId = 15555
let accountEmail="durga@gmail.com"
var accountPassword="12345"
accountCity="puri"
let accountState

/* not use var coz it makes issue in block scope and functional scope*/

accountEmail="durga@gmail.com"
accountPassword="2342"
accountCity="gunu"
//accountId=2
console.log(accountId);
console.table([accountId, accountEmail, accountPassword, accountCity, accountState])
