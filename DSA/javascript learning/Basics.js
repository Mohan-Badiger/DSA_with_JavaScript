const students = [
    {
        sname : "Mohan B",
        class : "BCA",
        age : 20
    },
    {
        sname : "Chetan B",
        class : "BCA",
        age : 18
    },
    {
        sname : "Sachin B",
        class : "Science",
        age : 15
    },
]

const names = students.map(student => student.sname);
console.log('Names:', names);

const bcaStudents = students.filter(student => student.class === "BCA");
console.log('BCA Students:', bcaStudents);

const hasMinor = students.some(student => student.age < 18);
console.log('Has minor:', hasMinor);

const allAdults = students.every(student => student.age >= 18);
console.log('All adults:', allAdults);

const totalAge = students.reduce((sum, student) => sum + student.age, 0);
console.log('Total age:', totalAge);

const BS = students.filter(student => student.class === 'BCA');
console.log(BS);



