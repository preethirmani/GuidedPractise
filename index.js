/*Create an array named myInstruments that contains the following instruments: flute, clarinet, saxophone, trumpet, and trombone.
 */

let myInstruments = ['flute','clarinet','saxophone','trumpet','trombone'];
console.log('myInstruments created!!')
console.log(myInstruments);


/* Write code to transform it into ["saxophone", "flute", "clarinet", "trumpet", "trombone", "tuba", "bassoon"]. */

//To bring saxophone as first element
let instrument = myInstruments.splice(2,1);
console.log(instrument);
myInstruments.unshift('saxophone');
console.log(myInstruments);

myInstruments.push("tuba", "bassoon");
console.log(myInstruments)


/* write a function getFirstInstruments(instruments: string[]) returns the first instrument
*/

var getFirstInstruments = (instruments) => {
  return instruments.shift();
}

console.log('First Instrument',getFirstInstruments(myInstruments));


/* getLastInstrument(instruments: string[]) returns the last instrument */

var getLastInstrument = (instruments) => {
  return instruments.pop();
}

console.log('Last instrument::', getLastInstrument(myInstruments))


/* getFirstAndLastInstruments(instruments: string[]) returns a new array containing the first and last instruments without modifying the original array.
Example: getFirstAndLastInstruments(myInstruments) >>> ["saxophone", "bassoon"] */
myInstruments = ["saxophone", "flute", "clarinet", "trumpet", "trombone", "tuba", "bassoon"];

var getFirstAndLastInstruments = (instruments) => {
  return [ instruments[0], instruments[instruments.length-1]];
}

console.log('First and Last Element::', getFirstAndLastInstruments(myInstruments));


/* getFirstThreeInstruments(instruments: string[]) returns the first three instruments without modifying the original array */

function getFirstThreeInstruments(instruments) {
  let arr = [];
  for(var i = 0 ; i <= 2; i++) {
    arr.push(instruments[i]);
  }
  return arr;
}

console.log("First three elements of the array::", getFirstThreeInstruments(myInstruments));

/* getTInstruments(instruments: string[]) returns all instruments that start with the letter "t" without modifying the original array.
Example: getTInstruments(myInstruments) >>> ["trumpet", "trombone", "tuba"] */

function getTInstruments(instruments) {
  let arr = [];
  for(var i = 0; i < instruments.length; i++) {
    if(instruments[i].startsWith('t')) {
      arr.push(instruments[i]);
    }
  }
  return arr;
}

console.log("Instruments starts with t::", getTInstruments(myInstruments));


/** (Challenge) getLongestNamedInstrument(instruments: string[]) returns the instrument with the longest name.
Example: getLongestNamedInstrument(myInstruments) >>> "saxophone" */

function getLongestNamedInstrument(instruments) {
  
  let longestInstrument = instruments [0];
  for(let i = 1; i < instruments.length; i++ ) {
    if(instruments[i].length > longestInstrument.length) {
      longestInstrument = instruments[i];
    }
  }
  return longestInstrument;
}

console.log('LongestNamedInstrument::',getLongestNamedInstrument(myInstruments));