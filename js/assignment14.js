
//  ------------------------- Problem #1 -------------------------
const employees = [
    {
        name: 'Sam',
        department: 'Tech',
        designation: 'Manager',
        salary: 40000,
        raiseEligible: true,
    },
    {
        name: 'Mary',
        department: 'Finance',
        designation: 'Trainee',
        salary: 18500,
        raiseEligible: true,
    },
    {
        name: 'Bill',
        department: 'HR',
        designation: 'Executive',
        salary: 21200,
        raiseEligible: false,
    },
];

console.log("Problem 1:", employees)

//   ------------------------- Problem #2 -------------------------
const company = {
    companyName: 'Tech Stars', 
    website: 'www.techstars.site',
    employees: employees,
};

console.log("Problem 2:", company)

//   ------------------------- Problem #3 -------------------------

function addEmployee(name, department, designation, salary, raiseEligible) {
    const newEmployee = {
        name: name, 
        department: department, 
        designation: designation, 
        salary: salary, 
        raiseEligible: raiseEligible,
    };

    employees.push(newEmployee);
}

addEmployee('Anna', 'Tech', 'Executive', 25600, false);
console.log("Problem 3:", company);

//   ------------------------- Problem #4 -------------------------

// let totalSalary = employees[0].salary + employees[1].salary + employees[2].salary + employees[3].salary;
// console.log('Problem 4:', totalSalary);

let totalSalaryBetter = 0;
for(let i = 0; i < employees.length; i++) {
    totalSalaryBetter += employees[i].salary;
}

console.log('Problem 4:', totalSalaryBetter);

//   ------------------------- Problem #5 -------------------------

function doRaises() {
    for(let i = 0; i < employees.length; i++) {
        if (employees[i].raiseEligible) {
            employees[i].salary *= 1.1
            employees[i].raiseEligible = false
        }
    }
}

doRaises();
console.log('Problem 5:', employees);

//   ------------------------- Problem #6 -------------------------

const workFromHomePpl = ['Anna', 'Sam'];

function setWFH() {
    for(let i = 0; i < employees.length; i++) {
        // console.log(employees[i].name, workFromHomePpl.includes(employees[i].name));
        employees[i].wfh = workFromHomePpl.includes(employees[i].name);
    }
}

setWFH();
console.log("Problem 6:", employees);




