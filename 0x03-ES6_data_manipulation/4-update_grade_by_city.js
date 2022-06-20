export default function updateStudentGradeByCity(students, city, newGrades) {
  return students.filter((student) => student.location === city).map((student) => ({ ...student, grade: newGrades.filter((g) => g.studentId === student.id).map((g) => g.grade)[0] || 'N/A' }));
}
