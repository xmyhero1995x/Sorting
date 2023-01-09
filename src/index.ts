import { Sorter } from "./Sorter";
import { NumberCollection } from "./NumbersCollection";
import { CharacterCollection } from "./CharactersCollection";
import { LinkedList } from "./LinkedList";


const characterCollection = new CharacterCollection('dAWDfwadfWA')
const numbersCollection = new NumberCollection([4, -39, 11, -34])
const linkedListCollection = new LinkedList()

characterCollection.sort()
console.log(characterCollection.data);

numbersCollection.sort()
console.log(numbersCollection.data);

linkedListCollection.add(100);
linkedListCollection.add(-100);
linkedListCollection.add(50);
linkedListCollection.add(-230);

linkedListCollection.sort();
linkedListCollection.print();