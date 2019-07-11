const companies = [
  { name: "Company One", category: "Finance", start: 1981, end: 2003 },
  { name: "Company Two", category: "Retail", start: 1992, end: 2008 },
  { name: "Company Three", category: "Auto", start: 1999, end: 2007 },
  { name: "Company Four", category: "Retail", start: 1989, end: 2010 },
  { name: "Company Five", category: "Technology", start: 2009, end: 2014 },
  { name: "Company Six", category: "Finance", start: 1987, end: 2010 },
  { name: "Company Seven", category: "Auto", start: 1986, end: 1996 },
  { name: "Company Eight", category: "Technology", start: 2011, end: 2016 },
  { name: "Company Nine", category: "Retail", start: 1981, end: 1989 }
];

const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

// for (let i = 0; i < companies.length; i++) {
//   const company = companies[i];
//   //   console.table(company);
// }

// Foreach
////////////////
// companies.forEach((company) => {
//   console.table(company);
// });

// filter
////////////////
// let canDrink = [];
// for (let i = 0; i < ages.length; i++) {
//   const age = ages[i];
//   if (age >= 18) {
//     canDrink.push(age);
//   }
// }

const canDrink = ages.filter(age => age >= 18);
// console.log(canDrink);

//Just for a test
// const sortedCanDrink = canDrink.sort((a, b) => a - b);
// console.log(sortedCanDrink);

// - filter RETAIL companies
// const retailCompanies = companies.filter(company => {
//     if(company.category === "Retail"){
//         return true;
//     }
// });
const retailCompanies = companies.filter(
  company => company.category === "Retail"
);
// console.table(retailCompanies);

// Get 80s companies
const eightiesCompanies = companies.filter(
  company => company.start >= 1980 && company.start < 1990
);
// console.table(eightiesCompanies);

// Lasted 10 years or longer
const lastedTenYears = companies.filter(
  company => company.end - company.start >= 10
);
// console.table(lastedTenYears);

// map
////////////////
// Create array of company names
const companyNames = companies.map(company => company.name);
// console.log(companyNames);

const agesSquare = ages.map(age => Math.sqrt(age));
// console.log(agesSquare);
const agesTimesTwo = ages.map(age => age * 2);
// console.log(agesTimesTwo);
const agesMap = ages.map(age => age * 2).sort((a, b) => a - b);
// console.log(agesMap);

// sort
////////////////
// const sortedCompanies = companies.sort((a, b) => {
//   if (a.start > b.start) {
//     return 1;
//   } else {
//     return -1;
//   }
// });
const sortedCompanies = companies.sort((a, b) => (a.start > b.start ? 1 : -1));
// console.table(sortedCompanies);

const sortAges = ages.sort((a, b) => a - b);
// console.log(sortAges);

// reduce
////////////////
// let ageSum = 0;
// for (let i = 0; i < ages.length; i++) {
//   const age = ages[i];
//   ageSum += age;
// }

// const ageSum = ages.reduce((total, age) => {
//   return total + age;
// }, 0);

const ageSum = ages.reduce((total, age) => total + age, 0);
// console.log(ageSum);

// Get total years for all companies
// const totalYears = companies.reduce((total, company) => {
//   return total + (company.end - company.start);
// },0);

const totalYears = companies.reduce(
  (total, company) => total + (company.end - company.start),
  0
);
// console.log(totalYears);

//Combine Method
const combined = ages
  .map(age => age * 2)
  .filter(age => age >= 40)
  .sort((a, b) => b - a)
  .reduce((a, b) => a + b, 0);
console.log(combined);
