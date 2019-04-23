/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Implicit: When the function is invoked, the this keyword will look to the left of it's dot and invoke that way.
* 2. Explicit: This one lets us tell this what it is going to be in a sense, by calling, appling, or binding.
* 3. New: Used to make a new object. 
* 4. Window: This one is useless so far. Targets the window, bad.
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
let bad = function(){
    console.log(this.goodorbad);
}

let window = {
    goodorbad: bad;
}

bad();

// Principle 2

// code example for Implicit Binding
let me = {
    name: 'Justin',
    yellName: function(){
        console.log(`Heya, I'm ${this.name}`);
    }
}

me.yellName();
// Principle 3

// code example for New Binding
function Cookpot(food, seasoning) {
    this.food = food;
    this.seasoning = seasoning;
    this.cook = function(){
        console.log(`Lets cook a ${food} with a pinch of ${seasoning}!`)
    }
    }
    
    const bakedPotato = new Cookpot('potato','pepper');
    
    bakedPotato.cook();

// Principle 4

// code example for Explicit Binding

let cookit = function(food1, food2){
    console.log(`${this.name} wants to eat a ${food1} and a ${food2}`)
};

let me = {
name: 'Justin'
};

let pantry = ['potato', 'sandwitch'];

let wannaEat = cookit.bind(me, pantry[0], pantry[1]);
wannaEat();