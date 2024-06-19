// Define the function to add a subject to the student's list of subjects
function addSubject(student, subject) {
  // Check if the subject already exists in the student's subjects list
  if (!student.subjects.includes(subject)) {
    // Add the subject if it doesn't exist
    student.subjects.push(subject);
  }
}

// Example usage:

// Create a student object
let student = {
  name: "John Doe",
  age: 16,
  grade: 10,
  subjects: ["Math", "Science"],
};

// Add a new subject
addSubject(student, "History");

console.log(student.subjects); // Output: ["Math", "Science", "History"]

// Attempt to add an existing subject
addSubject(student, "Math");

console.log(student.subjects); // Output: ["Math", "Science", "History"]

/** Case sensitivity */
// function addSubject(student, subject) {
//     // Convert subject to lowercase
//     let lowerCaseSubject = subject.toLowerCase();

//     // Check if any subject in the array matches case-insensitively
//     if (!student.subjects.some(sub => sub.toLowerCase() === lowerCaseSubject)) {
//         student.subjects.push(subject);
//     }
// }

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
