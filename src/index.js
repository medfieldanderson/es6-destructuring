// CHALLENGE: uncomment the code below and see the car stats rendered
import React from "react";
import ReactDOM from "react-dom";
// import animals, { useAnimals } from "./data";
import cars from "./practice";

console.log(cars);

const [honda, tesla] = cars;

const {
  coloursByPopularity: [teslaTopColour],
  speedStats: { topSpeed: teslaTopSpeed },
} = tesla;
const {
  coloursByPopularity: [hondaTopColour],
  speedStats: { topSpeed: hondaTopSpeed },
} = honda;

ReactDOM.render(
  <table>
    <tbody>
      <tr>
        <th>Model</th>
        <th>Top Speed</th>
        <th>Top Color</th>
      </tr>
      <tr>
        <td>{tesla.model}</td>
        <td>{teslaTopSpeed}</td>
        <td>{teslaTopColour}</td>
      </tr>
      <tr>
        <td>{honda.model}</td>
        <td>{hondaTopSpeed}</td>
        <td>{hondaTopColour}</td>
      </tr>
    </tbody>
  </table>,
  document.getElementById("root")
);

// console.table(animals);

// let [cat, dog] = animals;

// console.log(useAnimals(cat));

// const [animal, makeSound] = useAnimals(cat);

// console.log(animal);
// makeSound();

// console.log(cat);

// let {name: animalName, sound: animalSound} = cat;
// console.log(animalSound);
// console.log(animalName);

// let {properName="Kitty", sound="Purr"} = cat;
// console.log(`${animalName} ${properName}`);

// const { name, sound, feedingRequirements: {food, water} } = cat;
// const {
//   feedingRequirements: { food, water },
// } = cat;

// console.log(food);
// console.log(water);

// console.log(dog);
