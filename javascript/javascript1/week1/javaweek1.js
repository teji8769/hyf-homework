
// Age-ify (A future age calculator)

const yearOfBirth = 1987;
let yearFuture = 2045;
let age = yearFuture - yearOfBirth;
console.log("you will be " + age + " in the year " + yearFuture);

// Goodboy-Oldboy (A dog age calculator)

const dogYearOfBirth = 2015;
let dogYearFuture = 2027;
let dogYear = dogYearFuture - dogYearOfBirth;
const humanYears = 7 * dogYear;
let shouldShowResultInDogYears =true;  //Boolean

if(shouldShowResultInDogYears)
{
    console.log("Your dog will be " +  dogYear + " dog years old in " + dogYearFuture);
}
else{
    console.log("Your dog will be " + humanYears + "human years old in " + dogYearFuture);  
}

//Housey pricey (A house price estimator)

let houseWidth;
let houseDepth;
let houseHeight;
let gardenSizeInM2;
let volumeInMeters;
let housePrice;
let actualCost;
let priceDifference;


//Peter-----
houseWidth = 8;
houseDepth = 10;
houseHeight = 10;
gardenSizeInM2 = 100;
actualCost = 2500000;
volumeInMeters = houseDepth * houseHeight * houseWidth;
housePrice = volumeInMeters * 2.5 * 1000 + gardenSizeInM2 * 300;
priceDifference = actualCost - housePrice;
if (housePrice < actualCost) {
    console.log("Peter paid more");
    console.log("Peter paid " + priceDifference + " Extra");
}
else if (housePrice == actualCost) {
    console.log("Peter paid correct amount");
    console.log("Peter paid Same Amount");
}
else {
    console.log("peter paid less");
    console.log("Peter paid " + priceDifference + " Less");
}



// Julia-------
houseWidth = 5;
houseDepth = 11;
houseHeight = 8;
gardenSizeInM2 = 70;
actualCost = 1000000;
volumeInMeters = houseDepth * houseHeight * houseWidth;
housePrice = volumeInMeters * 2.5 * 1000 + gardenSizeInM2 * 300;
priceDifference = actualCost - housePrice;
if (housePrice < actualCost) {
    console.log("Julia paid more");
    console.log("Julia paid " + priceDifference + " Extra");
}
else if (housePrice == actualCost) {
    console.log("Julia paid correct amount");
    console.log("Julia paid Same Amount");
}
else {
    console.log("Julia paid less");
    console.log("Julia paid " + priceDifference + " Less");
}