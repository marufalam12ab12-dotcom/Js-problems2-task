 const employees = [
        { name: "shahin", experience: 5, starting: 20000, increment: 5000 },
        { name: "shihab", experience: 3, starting: 15000, increment: 7000 },
        { name: "shikot", experience: 9, starting: 30000, increment: 1000 },
        { name: "shohel", experience: 0, starting: 29000, increment: 4000 },
];

function salary (employees){
    console.log(employees);
    let total = 0;
    for(let employee of employees){
        let sum= (employee.experience * employee.increment) + employee.starting;
        total = total + sum;
    }
    return total;
}
const result = salary (employees);
console.log(result);
