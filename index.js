// Add your functions and code here
var kittens = ['Milo', 'Otis', 'Garfield']



function destructivelyAppendKitten(cats){
  kittens.push(cats);
}
function destructivelyPrependKitten(cats){
  kittens.unshift(cats);
}

function destructivelyRemoveLastKitten(){
  kittens.pop();
}

function destructivelyRemoveFirstKitten(){
  kittens.shift()
}

function appendKitten(name){
  return [...kittens, name];
}
function prependKitten(name){
  return [name, ...kittens];
}

function removeLastKitten(){
  return kittens.slice(0, 2);
}

function removeFirstKitten(){
  return kittens.slice(1)
}