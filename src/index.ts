import { Sorter } from "./Sorter";
import { NumberCollection } from "./NumbersCollection";
import { CharacterCollection } from "./CharactersCollection";


const characterCollection = new CharacterCollection('dAWDfwadfWA')
const numbersCollection = new NumberCollection([4, -39, 11, -34])

const sorter = new Sorter(numbersCollection);
const sorter1 = new Sorter(characterCollection);

sorter.sort();
sorter1.sort();

// console.log(sorter.collection);
console.log(sorter1.collection);
console.log(characterCollection.data);
