"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Sorter_1 = require("./Sorter");
const NumbersCollection_1 = require("./NumbersCollection");
const numbersCollection = new NumbersCollection_1.NumberCollection([4, -39, 11, -34]);
const sorter = new Sorter_1.Sorter(numbersCollection);
sorter.sort();
// console.log(sorter.collection);
console.log(numbersCollection.data);
