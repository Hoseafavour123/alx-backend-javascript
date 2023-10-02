export default function updateStudentGradeByCity(students, city, newGrades) {
  return students.filter((student) => student.location === city).map((student) => {
    let found = 0;

    for (const value of newGrades) {
      if (student.id === value.studentId) {
        student.grade = value.grade;
        found = 1;
        break;
      }
    }
    if (found === 0) {
      student.grade = 'N/A';
    }

    return { ...student };
  });
}
