// var isRunning = true ;
// !while
// while(isRunning) {
//     var number = prompt("Write ur favorit number : " , "0")

//     if (number != 10) continue;

//     isRunning = false;
// }

// i++ =                            i = i + 1
// !for
// var string = "Hi , geys! ;)"

// for(var i = 0; i < string.length; i++){
//     console.log(string[i])
// }
// var i = 0;
// // !while
// do {
//     i++;
//     console.log(i)
// } while(false)

// var i = 0;

// while(false) {
//     i++;
//     console.log(i)
// }

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!HW!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// 1) Get user : name , email , password , age +
// 2) name must has at least 2 symbols +
// 3) if name is valid -> check user email +
// 4) email should include into it -> "@" symbol +
// 5) password should be longer than 7 and * might
// include : numbers and strings +
// 6) This case migth be acceed only if all conditions above
// is TRUE...age must be bigger than 18
// 7) If all above is true -> console -> Welcome!
// Otherwise -> Go out of here!

// Worst , Best , Average

// var validation = {
//     isValidName : false,
//     isValidEmail : false,
//     isValidPassword : false,
//     isValidAge : false,
// }

// while(!validation.isValidName) {
//     var userName = prompt("What's ur name ?");

//     if(userName.length > 2){
//         validation.isValidName = true;
//         break;
//     }

// }

// if (validation.isValidName) {
//     console.log("HEre");
//     while(!validation.isValidEmail) {
//         var userEmail = prompt("What's ur email adress ?");

//         for (var i = 0 ; i < userEmail.length ;i++) {
//             var char = userEmail[i];

//             if(char === "@"){
//                 validation.isValidEmail = true;
//                 break;
//             }
//         }
//     }
// }

// if(validation.isValidEmail) {
//     while(!validation.isValidPassword) {
//         var userPassword = prompt("Enter ur password");

//         var isNumberInPassword = false;
//         var isStrInPassword = false;

//         for(var i = 0 ; i < userPassword.length ;i++) {
//             var char = parseInt(userPassword[i]);

//             if (!isFinite(char)) {
//                 console.log("Here");
//                 isNumberInPassword = true;
//             } else {
//                 console.log("There");
//                 isStrInPassword = true;
//             }
//         }

//         if(userPassword.length > 7 && isNumberInPassword && isStrInPassword) {
//             validation.isValidPassword = false

//             break;
//         }
//     }

// }
// var userAge = prompt("What's ur name ?");

// Task
// 1) Validation for : name and age
// name - should contain : . as a first character in the string
// name - should contain : !  as a last character in the string

// if name is correct
// 2) age - user age should divide on 4 without part after divide operation

<<<<<<< HEAD
// var validation = {
//   isValidName: false,
//   isValidAge: false,
// };

// while (!validation.isValidName) {
//   var userName = prompt("What's ur name ?");

//   if (userName.startsWith('.') && userName.endsWith('!')) {
//     validation.isValidName = true;

//     break;
//   }
//   while (!validation.isValidAge) {
//     var userAge = prompt("What's ur age ?");

//     if (userAge % 4 !== 0) {
//       validation.isValidAge = true;
//       break;
//     }
//   }

//   for (var i = 0; i < userName.length; i++) {
//     var firstChar = userName[0];

//     if (firstChar === '.') {
//       validation.isValidName = true;

//       break;
//     }
//   }
//   for (var i = 0; i < userName.length; i++) {
//     var lastChar = userName[i];

//     if (lastChar === '!') {
//       validation.isValidName = true;

//       break;
//     }
//   }
// }
=======

// Homework
// ИМТ 
// Get height and weight
// Formula : weight / _,__ * _,__ 
// Example : 77(вес Кирилла) / 1,85 * 1,85 (Рост Кирилла в квадрате) (Кирилл - это 185 cм 77 кг)
//  16 – 18,5      ►  Недостаточная масса тела (дефицит);
//  18,5 – 25     ►  Норма;
//  25 – 30       ►  Избыточная масса тела (состояние, предшествующее ожирению);
//  30 – 35       ►  Ожирение 1-й степени;
//  35 – 40       ►  Ожирение 2-й степени;
//  40 и более ►  Ожирение 3-й степени.

>>>>>>> 1f1faff43acf1da060e0e89876ef9ee1e7df88ab
