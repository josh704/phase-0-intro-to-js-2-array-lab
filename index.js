const cats = ["Milo", "Otis", "Garfield"]
const destructivelyAppendCat = (name) => {
    cats.push("Ralph");
}
const destructivelyPrependCat = (name) => {
    cats.unshift("Bob");
}
const destructivelyRemoveLastCat = () => {
    cats.pop("Garfield");
}
const destructivelyRemoveFirstCat = () => {
    cats.shift("Milo");
}
const appendCat = (name) => {
    return [...cats, "Broom"];
}
const prependCat = (name) => {
    return ["Arnold", ...cats];
}
const removeLastCat = () => {
    return cats.slice(0, cats.length - 1);
}
const removeFirstCat = () => {
    return cats.slice(1);
}





