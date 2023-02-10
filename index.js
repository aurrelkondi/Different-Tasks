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
isIsland = true;
let countryPop = 10000; */

// Basic Operators

// 1. If your country split in half,and each half would contain half the population, then how many people would live in each half?
// 2. Increase the population of your country by 1 and log the result to the console
// 3. Finland has a population of 6 million.Does your country have more people than Finland?
// 4. The average population of a country is 33 million people.Does your country
// have less people than the average country?
// 5. Based on the variables you created,create a new variable'description'
// which contains a string with this format: 'Portugal is in Europe, and its 11 million people speak portuguese'
/* 
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

/* const weightsMark = 95;
const heightsMark = 1.88;

const weightsJohn = 85;
const heightsJohn = 1.76;

const markBMI = weightsMark / (heightsMark * heightsMark);
console.log(markBMI); //27.3

const johnBMI = weightsJohn / (heightsJohn * heightsJohn);
console.log(johnBMI); //24.1

const markHigherBMI = markBMI > johnBMI;

console.log(markHigherBMI); */

// LECTURE: Strings and Template Literals
// 1. Recreatethe'description'variablefromthelastassignment,thistime using the template literal syntax

/* const description = `${country} is in ${continent} and it's ${countryPop} millions, people speaks ${language}`;
console.log(description); */

// Coding Challenge #2
// Use the BMI example from Challenge #1, and the code you already wrote, and improve it.
// Your tasks:
// 1. Print a nice output to the console,saying who has the higher BMI.The message is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
// 2. Use a template literal to include the BMI values in the outputs.Example:"Mark's BMI (28.3) is higher than John's (23.9)!"

/* const weightsMark = 95;
const heightsMark = 1.88;

const weightsJohn = 85;
const heightsJohn = 1.76;

const markBMI = weightsMark / (heightsMark * heightsMark);
console.log(markBMI); //26,8

const johnBMI = weightsJohn / (heightsJohn * heightsJohn);
console.log(johnBMI); //27,4

const markHigherBMI = markBMI > johnBMI;

console.log(markHigherBMI); */

/* if (markBMI > johnBMI) {
	console.log(`Marks BMI ${markBMI} is higher than Johns Bmi ${johnBMI}`);
} else {
	console.log(`John BMI ${johnBMI} is higher than mark Bmi ${markBMI}`);
}
 */

/* LECTURE: Type Conversion and Coercion
1. Predict the result of these 5 operations without executing them:
     '9' - '5'; //4
     '19' - '13' + '17';
     '19' - '13' + 17;
     '123' < 57;
     5 + 6 + '4' + 9 - 4 - 2;
2. Execute the operations to check if you were right */

/* LECTURE: Equality Operators: == vs. ===
1. Declareavariable'numNeighbours'basedonapromptinputlikethis: prompt('How many neighbour countries does your country have?');
2. Ifthereisonly1neighbour,logtotheconsole'Only1border!'(uselooseequality == for now)
3. Useanelse-ifblocktolog'Morethan1border'incase'numNeighbours' is greater than 1
4. Useanelseblocktolog'Noborders'(thisblockwillbeexecutedwhen 'numNeighbours' is 0 or any other value)
5. Testthecodewithdifferentvaluesof'numNeighbours',including1and0.
6. Change==to===,andtestthecodeagain,withthesamevaluesof
'numNeighbours'. Notice what happens when there is exactly 1 border! Why
is this happening?
7. Finally,convert'numNeighbours'toanumber,andwatchwhathappensnow
when you input 1
8. Reflectonwhyweshouldusethe===operatorandtypeconversioninthis
situation */
/* 
const numNeighbours = Number(
	prompt("How many neighbour countries does your country have?")
);

if (numNeighbours === 1) {
	console.log("Only 1 Border");
} else if (numNeighbours > 1) {
	console.log("More than 1 Border");
} else {
	console.log("No Borders");
} */

/* Coding Challenge #3
There are two gymnastics teams, Dolphins and Koalas. They compete against each other 3 times. The winner with the highest average score wins a trophy!
Your tasks:
1. Calculate the average score for each team,using the test data below
2. Compare the team's average scores to determine the winner of the competition,
and print it to the console. Don't forget that there can be a draw, so test for that
as well (draw means they have the same average score)

3. Bonus1:Include a requirement for a minimum score of 100.With this rule,a
team only wins if it has a higher score than the other team, and the same time a score of at least 100 points. Hint: Use a logical operator to test for minimum score, as well as multiple else-if blocks 😉

4. Bonus2:Minimum score also applies to a draw!So a draw only happens when both teams have the same score and both have a score greater or equal 100 points. Otherwise, no team wins the trophy

Test data:
§ Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110

§ Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123 § 
Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106 */

/* const averageDolphins = (97 + 112 + 101) / 3;
console.log(averageDolphins); //97.6

const averageKoalas = (109 + 95 + 106) / 3;
console.log(averageKoalas); //96.3 */

/* if (averageDolphins > averageKoalas) {
	console.log("The winner is Dolphins Team");
} else if (averageDolphins < averageKoalas) {
	console.log("The winner is Koalas Team");
} else {
	console.log("They are draw, no winners");
} */

/* //Bonus 1
if (averageDolphins > averageKoalas && averageDolphins >= 100) {
	console.log("Dolpins team wins");
} else if (averageKoalas > averageDolphins && averageDolphins >= 100) {
	console.log("Koala team wins");
} else {
	console.log("No team wins");
}
 */

/* const day = "tuesday";

if (day === "monday") {
	console.log("Today is monday");
} else if (day === "tuesday" || day === "wednesday") {
	console.log(" what are you doing");
} else {
	console.log("empty");
} */

/* LECTURE: The switch Statement
1. Useaswitchstatementtologthefollowingstringforthegiven'language': chinese or mandarin: 'MOST number of native speakers!'
spanish: '2nd place in number of native speakers'
english: '3rd place'
hindi: 'Number 4'
arabic: '5th most spoken language'
for all other simply log 'Great language too :D' */

/* const language = "spanish";

switch (language) {
	case "chinese":
	case "mandarin":
		console.log("MOST number of native speakers!");
		break;
	case "spanish":
		console.log("2nd place in number of native speakers");
		break;
	case "english":
		console.log("3rd place");
		break;
	case "hindi":
		console.log("Number 4");
		break;
	case "arabic":
		console.log("5th most spoken language");
		break;
	default:
		console.log("Great language too :D");
} */

/* Coding Challenge #4
Steven wants to build a very simple tip calculator for whenever he goes eating in a restaurant. In his country, it's usual to tip 15% if the bill value is between 50 and 300. If the value is different, the tip is 20%.

Your tasks:
1. Calculate the tip,depending on the bill value.Create a avariable called 'tip' for this. It's not allowed to use an if/else statement (If it's easier for you, you can start with an if/else statement, and then try to convert it to a ternary operator!)

2. Print a string to the console containing the bill value,the tip,and the final value (bill + tip). Example: “The bill was 275, the tip was 41.25, and the total value 316.25”

Test data:
§ Data 1: Test for bill values 275, 40 and 430 

Hints:
§ To calculate 20% of a value, simply multiply it by 20/100 = 0.2 § Value X is between 50 and 300, if it's >= 50 && <= 300 */

/*   */

/* function fruitProccesor(aaples, oranges) {
	const juice = `Juice with ${aaples} aaaple and ${oranges} orange.`;
	return juice;
}

const luc = fruitProccesor(5, 0);

console.log(luc); */

// LECTURE: Functions
/* 
1. Writeafunctioncalled'describeCountry'whichtakesthreeparameters: 'country', 'population' and 'capitalCity'. Based on this input, the function returns a string with this format: 'Finland has 6 million people and its capital city is Helsinki'
2. Callthisfunction3times,withinputdatafor3differentcountries.Storethe returned values in 3 different variables, and log them to the console */

/* function describeCountry(country, population, capitalCity) {
	const newCountry = `${country} has ${population} million people and its capital city is ${capitalCity}`;
	return newCountry;
}

const result = describeCountry("Germany", 6, "Berlin");
console.log(result);

const newResult = describeCountry("Spain", 3, "Madrid");
console.log(newResult); */

// LECTURE: Function Declarations vs. Expressions
/* 
1. Theworldpopulationis7900millionpeople.Createafunctiondeclaration called 'percentageOfWorld1' which receives a 'population' value, and returns the percentage of the world population that the given population represents. For example, China has 1441 million people, so it's about 18.2% of the world population

2. Tocalculatethepercentage,dividethegiven'population'valueby7900 and then multiply by 100

3. Call'percentageOfWorld1'for3populationsofcountriesofyourchoice, store the results into variables, and log them to the console

4. Createafunctionexpressionwhichdoestheexactsamething,called 'percentageOfWorld2', and also call it with 3 country populations (can be the same populations) */

//FUNCTION DECLARATION
/* function percentageOfWorld1(population) {
	return (population / 7900) * 100;
}

const percIndia = percentageOfWorld1(10);
const percUSA = percentageOfWorld1(1000); */

//FUNCTION EXPRESSIONS
/* const percentageOfWorld2 = function (population) {
	return (population / 7900) * 100;
};

const percItaly = percentageOfWorld2(100000);
console.log(percItaly);

console.log(percIndia, percUSA); */

//ARROW FUNCTIONS
/* const percentageOfWorld3 = (population) => (population / 7900) * 100;
 */

// LECTURE: Functions Calling Other Functions
/* 
1. Createafunctioncalled'describePopulation'.Usethefunctiontypeyou like the most. This function takes in two arguments: 'country' and 'population', and returns a string like this: 'China has 1441 million people, which is about 18.2% of the world.'
2. Tocalculatethepercentage,'describePopulation'callthe 'percentageOfWorld1' you created earlier
3. Call'describePopulation'withdatafor3countriesofyourchoice */

/* function percentageOfWorld1(population) {
	return (population / 7900) * 100;
}

const describePopulation = function (country, population) {
	const perc = percentageOfWorld1(population);
	return `${country} has ${population} million people which is about ${perc} of the world`;
};
console.log(describePopulation("Germany", 4));
 */

/* Coding Challenge #1
Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new gymnastics discipline, which works differently.
Each team competes 3 times, and then the average of the 3 scores is calculated (so one average score per team).
A team only wins if it has at least double the average score of the other team. Otherwise, no team wins!
Your tasks:
1. Createanarrowfunction'calcAverage'tocalculatetheaverageof3scores
2. Usethefunctiontocalculatetheaverageforbothteams
3. Createafunction'checkWinner'thattakestheaveragescoreofeachteam
as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner to the console, together with the victory points, according to the rule above. Example: "Koalas win (30 vs. 13)"
4. Usethe'checkWinner'functiontodeterminethewinnerforbothData1and Data 2
5. Ignoredrawsthistime
Test data:
§ Data 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49 § Data 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27
Hints:
§ To calculate average of 3 values, add them all together and divide by 3
§ To check if number A is at least double number B, check for A >= 2 * B.
Apply this to the team's average scores  */

/* const calcAverage = (a, b, c) => (a + b + c) / 3;

const scoreDolhins = calcAverage(44, 23, 71);
const scoreKoalas = calcAverage(65, 54, 49);

const checkWinner = function (avgDolhins, avgKoalas) {
	if (avgDolhins >= 2 * avgKoalas) {
		console.log(`Dolphin win the trophy (${avgDolhins} vs. ${avgKoalas})`);
	} else if (avgKoalas >= 2 * avgDolhins) {
		console.log(`Koalas win the trophy (${avgKoalas} vs. ${avgDolhins})`);
	} else {
		console.log("No ONE WINS");
	}
};

checkWinner(scoreDolhins, scoreKoalas); */

/* const years = new Array(110, 222, 111);
console.log(years); */

// LECTURE: Introduction to Arrays
/*
1. Createanarraycontaining4populationvaluesof4countriesofyourchoice. You may use the values you have been using previously. Store this array into a variable called 'populations'
2. Logtotheconsolewhetherthearrayhas4elementsornot(trueorfalse)
3. Createanarraycalled'percentages'containingthepercentagesofthe
world population for these 4 population values. Use the function 'percentageOfWorld1' that you created earlier to compute the 4 percentage values */

/* function percentageOfWorld1(population) {
	return (population / 7900) * 100;
}

const populations = [111, 222, 333, 444];

console.log(populations); // True

const percentages = [
	percentageOfWorld1(populations[0]),
	percentageOfWorld1(populations[1]),
	percentageOfWorld1(populations[2]),
	percentageOfWorld1(populations[3]),
];
console.log(percentages); */

//Coding Challenge #2

/* Steven is still building his tip calculator, using the same rules as before: Tip 15% of the bill if the bill value is between 50 and 300, and if the value is different, the tip is 20%.
Your tasks:
1. Writeafunction'calcTip'thattakesanybillvalueasaninputandreturns the corresponding tip, calculated based on the rules above (you can check out the code from first tip calculator challenge if you need to). Use the function type you like the most. Test the function using a bill value of 100
2. Andnowlet'susearrays!Socreateanarray'bills'containingthetestdata below
3. Createanarray'tips'containingthetipvalueforeachbill,calculatedfrom the function you created before
4. Bonus:Createanarray'total'containingthetotalvalues,sothebill+tip Test data: 125, 555 and 44
Hint: Remember that an array needs a value in each position, and that value can actually be the returned value of a function! So you can just call a function as array values (so don't store the tip values in separate variables first, but right in the new array) */

/* const calcTip = function (bill) {
	return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};

console.log(calcTip(100));

const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];

console.log(bills, tips);

const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
console.log(total); */
