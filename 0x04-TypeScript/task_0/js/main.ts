interface Student {
    firstName: string,
    lastName: string,
    age: number,
    location: string
}

const studentOne: Student = {
    firstName: 'Hosea',
    lastName: 'Favour',
    age: 19,
    location: 'Nigeria'
};

const studentTwo: Student = {
    firstName: 'Kim',
    lastName: 'Mulan',
    age: 17,
    location: 'Korea'
};

const studentsList = [studentOne, studentTwo];
let table = '';

studentsList.forEach((val) => {
    table += `${val.firstName} ${val.location}\n`
});