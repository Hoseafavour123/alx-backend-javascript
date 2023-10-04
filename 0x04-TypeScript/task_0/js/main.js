var studentOne = {
    firstName: 'Hosea',
    lastName: 'Favour',
    age: 19,
    location: 'Nigeria'
};
var studentTwo = {
    firstName: 'Kim',
    lastName: 'Mulan',
    age: 17,
    location: 'Korea'
};
var studentsList = [studentOne, studentTwo];
var table = '';
studentsList.forEach(function (val) {
    table += "".concat(val.firstName, " ").concat(val.location, "\n");
});
