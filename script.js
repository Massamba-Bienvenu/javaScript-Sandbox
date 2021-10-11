// let numbers = [5, 7, 9, 3, 6, 2];
// numbers.forEach(function(nombre, nombre_index) {
//     console.log(`${nombre}: a pour index ${nombre_index}`);
// })

const courses = [
  { id: 1, name: "a" },
  { id: 2, name: "b" },
];
courses.forEach((object, object_index) =>
  console.log(`${object.name}: a pour index ${object_index}`)
);
