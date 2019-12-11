const housePrices = [3000000, 3500000, 1300000, 40000000, 100000000, 8000000, 2100000];
var sum = 0;

/*finding Average*/
function average(array) {
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
        
    }
    const avg = Math.floor(sum/housePrices.length);
    return avg;
}
console.log(`The Average of housePrices is ${average(housePrices)}`);

/*finding median*/

function median(numbers) {
    var median = 0;
    var arrLength = numbers.length;
    numbers.sort(); // sorting array in a particular order

    if (arrLength % 2 === 0) { //Array length is even

        median = (numbers[arrLength / 2 - 1] + numbers[arrLength / 2]) / 2;

    } else { //Array length is odd

        median = numbers[(arrLength - 1) / 2];
    }
    return median;
}
console.log(`The Median of housePrices is  ${median(housePrices)}`);

function calculateAverageAndMedian(prices){
    return {
        'Average value': average(housePrices),
        'Median value': median(housePrices)
    };
}
const averageAndMedian = calculateAverageAndMedian(housePrices);
console.log(averageAndMedian);

let ul = document.getElementById('housePrices');
for (let i = 0; i < housePrices.length; i++) {
    const li = document.createElement('li');
    li.textContent = housePrices[i];
    ul.appendChild(li);
}

const averagePrice = document.getElementById('averagePrice');
averagePrice.textContent = averageAndMedian['Average value'];
const medianPrice =document.getElementById('medianPrice');
medianPrice.textContent=averageAndMedian['Median value'];



