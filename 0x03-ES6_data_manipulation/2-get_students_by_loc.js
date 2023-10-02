export default function getStudentsByLocation(students, location) {
  const filteredStudents = students.filter((value, index) => value.location === 'San Francisco');

  return filteredStudents;
}
