// Write your solution here!
let cats = [
    "Milo",
    "Otis",
    "Garfield",
]

function destructivelyAppendCat(name) {
    cats.push(name);
}

function destructivelyPrependCat(name) {
    cats.unshift(name);
}

function destructivelyRemoveLastCat() {
    cats.pop();
}

function destructivelyRemoveFirstCat() {
    cats.shift();
}


function appendCat(name) {
    let copyOfCats = [...cats, name];
    return copyOfCats;
}

function prependCat(name) {
    let copyOfPrependCats = [name, ...cats];
    return copyOfPrependCats;
}

function removeLastCat() {
    let removeLastCat = cats.slice(0,-1);
    return removeLastCat;
}

function removeFirstCat() {
    let removeFirstCat = cats.slice(1);
    return removeFirstCat;
    
}