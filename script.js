let array = ["a", "b", "c", "d", "c", "e", "f", "a", "g"];
elementsSupprimes = array.splice(0, 3);
// console.log(elementsSupprimes, array);

for (let elemSup of elementsSupprimes) {
  for (let elemArr of array) {
    if (elemSup !== elemArr) {
      console.log(elemSup);
    }
  }
}
