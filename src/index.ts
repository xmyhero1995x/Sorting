import { Sorter } from "./Sorter";
import { NumberCollection } from "./NumbersCollection";

const numbersCollection = new NumberCollection([4, -39, 11, -34])

const sorter = new Sorter(numbersCollection);
sorter.sort();
// console.log(sorter.collection);
console.log(numbersCollection.data);
