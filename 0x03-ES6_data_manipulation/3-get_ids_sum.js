export default function getStudentIdsSum(students) {
  const total = students.reduce((accumulator, currentStudent) => {
    accumulator += currentStudent.id;
    return accumulator;
  }, 0);

  return total;
}
