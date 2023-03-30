import array from './foods';
import { choice, remove } from './helpers'

let randFruit = choice(array);

console.log(`I'd like one ${randFruit}`);
console.log(`Here you go: ${randFruit}`);
console.log(`Delicious! May I have another?`);

let remainder = remove(randFruit, array);

console.log(`I'm sorry, we're all out. We have ${remainder.length} left.`);