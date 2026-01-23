const students = [
    {id :1, name: "Tom", age: 17, score: "A"},
    {id :2, name: "Jeck", age: 18, score: "B"},
    {id :3, name: "Mike", age: 20, score: "C"}, 
    {id :4, name: "Dune", age : 23, score: "A"}
];

const names = students.map(s => s.name);
console.log(names);

const adults = students.filter(s => s.age >= 18);
console.log(adults);

const student = students.find(s => s.id === 3);
console.log(student);

const students2 = students.filter(s => s.score === "A").map(s => s.name);
console.log(students2);