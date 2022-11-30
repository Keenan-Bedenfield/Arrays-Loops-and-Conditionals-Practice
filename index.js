console.log("Arrays, Loops, and Conditionals");

// Easy Going
let count = 0;
for (let i = 0; i < 20; i += 1) {
  count++;
}
console.log("The count is:", count);
console.log("---------------------");
console.log("Easy going answered");
console.log("---------------------");

// Get Even
for (let i = 0; i <= 200; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}
console.log("---------------------");
console.log("Get Even answered");
console.log("---------------------");

let fb = [];

for (let i = 1; i < 100; i++) {
  if (i % 15 === 0) {
    fb.push("FizzBuzz");
  } else if (i % 3 === 0) {
    fb.push("Fizz");
  } else if (i % 5 === 0) {
    fb.push("Buzz");
  } else {
    fb.push([i]);
  }
}
console.log(fb);
console.log("---------------------");
console.log("Fizz Buzz answered");
console.log("---------------------");

const wolfy = ["Wolfy", "wolf", 16, "Yukon Territory"];
const sharky = ["Sharky", "shark", 20, "Left Coast"];
const plantee = ["Plantee", "plant", 5000, "Mordor"];
const porgee = ["Porgee", "Porg", 186, "Ahch-To"];
const dart = ["D'Art", "Demogorgan Dog", 2, "Upside Down"];

let planteeAge = plantee.splice(2, 1, "5001");
let wolfTown = wolfy.pop();
wolfy.push("Gotham City");
dart.push("Hawkins");
wolfy.splice(0, 1, "Gameboy");
console.log(plantee);
console.log(wolfy);
console.log(dart);

console.log("---------------------");
console.log("Wild Wild Life answered");
console.log("---------------------");

const tmnt = ["Leonardo", "Raphiel", "Donetello", "Micheangelo"];

for (const element of tmnt) {
  console.log(element);
}

console.log(tmnt);
console.log("---------------------");
console.log("Yell at the Ninja Turtles answered");
console.log("---------------------");

const favMovies = [
  "Jaws",
  "The Fellowship of the Ring",
  "Howl's Moving Castle",
  "Django Unchained",
  "Cloud Atlas",
  "The Usual Suspects",
  "Toy Story",
  "Conan the Barbarian",
  "Titanic",
  "Harry Potter",
  "Fried Green Tomatoes",
  "Volver",
  "Oculus",
  "Seven",
  "Black Panther",
  "Harry Potter",
  "Imitation of Life",
  "Snatch",
  "Fast and Furious",
];

favMovies.sort(); //sorted the array by alpahbetical order; No.
favMovies.pop();
favMovies.push("Guardians of the Galaxy");
favMovies.reverse();
favMovies.shift(); //Removed "Gaurdians of The Galaxy" from the beginning of the list.
favMovies.unshift(); //Returned nothing to the list.
let removeFilm = favMovies.splice(14, 1, "Avatar"); //Removing "Django Unchained"
console.log(favMovies);

let sliceValue = favMovies[14];
console.log(sliceValue);

console.log(favMovies.indexOf("Django Unchained")); //Returned -1 in the array because it was removed earlier.

// We didn't have to delaire "let" instead of "const" for the array, as we are not changing the declairation so, we can change the elements in the array with no problem.
console.log("---------------------");
console.log("Methods Revisited answered");
console.log("---------------------");

const whereIsWaldo = [
  ["Timmy", "Frank"],
  "Eggbert",
  ["Lucinda", "Jacc", "Neff", "Snoop"],
  ["Petunia", ["Baked Goods", "Waldo"]],
];

whereIsWaldo.splice(1, 1);
whereIsWaldo[1][2] = "No One";
console.log(whereIsWaldo);
console.log("---------------------");
console.log("Where is Waldo answered");
console.log("---------------------");

const phrases = [
  "...human...why you taking pictures of me?...",
  "...the catnip made me do it...",
  "...why does the red dot always get away...",
];

for (let i = 0; i <= 20; i++) {
  if (i % 2 === 0) {
    const randomPhrase = Math.floor(Math.random() * phrases.length);
    console.log(phrases[randomPhrase]);
  } else {
    console.log("Love me, pet me! HSSSSSS!");
  }
}
console.log("---------------------");
console.log("Excited Kittens answered");
console.log("---------------------");

// const lastHalf = nums.slice(Math.floor(nums.length / 2));

const nums = [
  14, 11, 16, 15, 13, 16, 15, 17, 19, 11, 12, 14, 19, 11, 15, 17, 11, 18, 12,
  17, 12, 71, 18, 15, 12,
];

function findMedian(arr) {
  const newArr = arr.slice().sort((a, b) => a - b);
  const median = Math.floor(newArr.length / 2);

  if (newArr.length % 2 === 0) {
    return (newArr[median - 1] + newArr[median]) / 2;
  } else {
    return newArr[median];
  }
}

console.log("---------------------");
console.log("Find the Median answered");
console.log("---------------------");
console.log("Median is:", findMedian(nums));
