/* const js = "JS is amazing";

let = 20 + 30 + 2;
console.log(let);

console.log(typeof null); */

// 1) Values and Variables
// 1. Declarevariablescalled'country','continent'and'population'and assign their values according to your own country (population in millions)
// 2. Logtheirvaluestotheconsole

/* 
let coutry = "Germany";
let continent = "Europe";
let population = 830000;

console.log(coutry);
console.log(continent);
console.log(population); */

// 2) Data Types
// 1. Declareavariablecalled'isIsland'andsetitsvalueaccordingtoyour country. The variable should hold a Boolean value. Also declare a variable 'language', but don't assign it any value yet
// 2. Logthetypesof'isIsland','population','country'and'language' to the console

/*  
let isIsland = true;
let language;

console.log(typeof isIsland);
console.log(typeof population);
console.log(typeof coutry);
console.log(typeof language);
 */

// let, const and var
// 1. Set the value of'language'to the language spoken where youlive(some countries have multiple languages, but just choose one)
// 2. Think about which variables should be const variables(which values will never change, and which might change?). Then, change these variables to const.
// 3. Try to change one of the changed variables now,and observe what happens

/* language = "Albanian";

const country = "Germany";
const continent = "Europe";
let isIsland = true;
isIsland = true; */

// Basic Operators

// 1. If your country split in half,and each half would contain half the population, then how many people would live in each half?
// 2. Increase the population of your country by 1 and log the result to the console
// 3. Finland has a population of 6 million.Does your country have more people than Finland?
// 4. The average population of a country is 33 million people.Does your country
// have less people than the average country?
// 5. Based on the variables you created,create a new variable'description'
// which contains a string with this format: 'Portugal is in Europe, and its 11 million people speak portuguese'
/* 
let countryPop = 10000;
countryPop++;
console.log(countryPop);

const finlandPop = 600000;
console.log(countryPop > finlandPop);

const averagePop = 3300000;
console.log(countryPop < averagePop);

const description =
	country +
	" is in " +
	continent +
	" and its " +
	countryPop +
	" people speak " +
	language;

console.log(description); */

/* Coding Challenge #1
Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula:
BMI = mass / height ** 2 = mass / (height * height) (mass in kg and height in meter).
Your tasks:
1. Store Mark's and John's mass and height in variables
2. Calculate both their BMI susing the formula(you can even implement both
versions)
3. Create a Boolean variable'markHigherBMI'containing information about
whether Mark has a higher BMI than John.
Test data:
§ Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.
§ Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 m tall.
GOOD LUCK 😀 */

const weightsMark = 95;
const heightsMark = 1.88;

const weightsJohn = 85;
const heightsJohn = 1.76;

const markBMI = weightsMark / (heightsMark * heightsMark);
console.log(markBMI); //27.3

const johnBMI = weightsJohn / (heightsJohn * heightsJohn);
console.log(johnBMI); //24.1

const markHigherBMI = markBMI > johnBMI;

console.log(markHigherBMI);
