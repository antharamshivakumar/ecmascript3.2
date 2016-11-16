/* Map and Set:

● Create map instance object using new Map() and set value using set().
Add values here(Key can be string, object and function.)
● Create Set() instance and then add values using add() method

Note: Check new property before adding, if it’s there or not using has() method.
● Add multiple values using Set(), then iterate them using for loop.
● Create an array(stringArray) of strings then set this array to Set instance using:

var mySet = new Set(stringArray);
Now check if all values are there or not using set’s has() method.
Print all values of array in one time(using spread operator) */



let movies = new Map([ [1, 'Star Wars'],[2,'The Matrix'],[3, 'Forest Gump'] ]);

for (let entry of movies) {
    console.log(entry[0], entry[1]);
}

/*output
Star Wars
The Matrix
Forest Gump
*/


let pictures = new Set(['singham', 'rockstar', 'haider']);

for(let picture of pictures) {
    console.log(picture);
}

/* output
singham
rockstar
haider
*/

//print all the values using spread opeartor 

let merge = [...movies, ...pictures];

console.log(merge);



