// Exemple 01: Ecriture d'Objet 
// var person=new Object();

// person.firstname="Ahmad",
// person.name="Idriss",
// person.age= 20,
// person.gender="male"

// console.log(person);

// Exemple 02: 
// var person = {
//     firstName:"Ahmad",
//     lastName : "Idriss",
//     age : 25,
//     gender : "Male",
//     jobTitle : "Software Developer",
// }
// console.log(person);

/////////////////// LES FONCTIONS////////////////////
// Exemple 01: Fonctions avec les variables
// var a=2 ,b=3 , result;

// function addNumbers () {
//     result=a+b ;
//     console.log(result)   
// }
// addNumbers();
// addNumbers();
// addNumbers();
// addNumbers();

// Exemple02: 
// function addNumbers (num1,num2) {
//   var   result=num1+num2 ;
//     return result;
// }
// var addedNumbers= addNumbers(0,1);
// var addedNumbers= addNumbers(2,1);
// console.log(addedNumbers);


// Chapitre Executer immediatement des foncions ()(); //Premiere ( definit la foncion) , la deuxieme (Marque l'execution de la fonction)
// Exemple 01:
// (function addition (num1,num2) {
//   var result=num1 + num2
//   console.log(result)
  
// })(10,20);

// CHAPITRE 06: REVISITER LES OBJETS JS 
// Exemple 01: Les méthodes string  (A retrouver sur W3Schools )
// let firstName= "idriss Drisstein"

// console.log(firstName.length);
// console.log(firstName.normalize());
// console.log(firstName.repeat());
// console.log(firstName.toUpperCase());
// console.log(firstName.trim());

// ____________________________________________________________
// Exemple 02: Les méthodes Numbers  (A retrouver sur W3Schools )

// let  myNumber;
// myNumber=88
// // myNumber= Number.NEGATIVE_INFINITY //+infini
// // myNumber= Number.POSITIVE_INFINITY//-infini
// // myNumber= Number.EPSILON
// // myNumber= Number.MAX_VALUE  //valeur maximale que JS prend en compte 


// console.log(Number.isInteger(myNumber)) //permet de verifier si un nombre est integer ou pas.
// console.log(myNumber.toPrecision(5)) //permet d'afficher le nombre de chiffre voulu à préciser dans en paramétres ,arrondi aussi selon les paramétres cependant renvoit des chaines de caractéres 


// // Exemple 03: Aborder le Browser Object MANAGER 
// //WINDOW 
// console.log(window.location) //permet de donner les informations sur l'URL 

// // console.log(window.navigator) //Donne des informations à propos du Navigateur