// Create a student object
let student = {
  name: "John Doe",
  age: 16,
  grade: 10,
  subjects: ["History", "Math"],
};

/** -------- Adding Subject ------- */
function addSubject(student, subject) {
  if (!student.subjects.includes(subject)) {
    // Add the subject if it doesn't exist
    student.subjects.push(subject);
  }
}
// addSubject(student, "History");
// console.log(student.subjects);

/* ------ Removing Subject ------- */
function removesubject(student, subject) {
  student.subjects = student.subjects.filter((sub) => {
    return sub !== subject;
  }); // ["History"]
}
removesubject(student, "Math");
console.log(student.subjects);

/*

Checking Extra Validation

*/
/** Case sensitivity */
// function addSubject(student, subject) {
//   // Convert subject to lowercase
//   let lowerCaseSubject = subject.toLowerCase();

//   // Check if any subject in the array matches case-insensitively
//   // First way of checking Lowercase with (((Filter)))
//   // student.subjects = student.subjects.filter((sub) => sub.toLowerCase() === lowerCaseSubject )
//   // Second way of checking Lowercase with (((Some)))
//   // if (!student.subjects.some((sub) => sub.toLowerCase() === lowerCaseSubject)) {
//   //   student.subjects.push(subject);
//   // }
// }
// addSubject(student, "hitstory");
// addSubject(student, "Math");
// console.log(student);

/** Empty or Invalid Inputs */
// function addSubject(student, subject) {
//   if (typeof subject !== "string" || subject.trim() === "") {
//     console.log("Invalid subject");
//     return;
//   }

//   if (!student.subjects.includes(subject)) {
//     student.subjects.push(subject);
//   }
// }
