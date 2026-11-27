
/* =====================================
   1. STUDENT DATASET
===================================== */

const students = [
    { id: 1, name: "Rahul", subject: "JavaScript", marks: 85 },
    { id: 2, name: "Priya", subject: "HTML", marks: 92 },
    { id: 3, name: "Aman", subject: "CSS", marks: 45 },
    { id: 4, name: "Sneha", subject: "React", marks: 78 },
    { id: 5, name: "Karan", subject: "JavaScript", marks: 35 },
    { id: 6, name: "Riya", subject: "HTML", marks: 88 }
];


/* =====================================
   2. ES5 TO ES6+ REFACTORING
===================================== */

// ES5 example:
// var message = function(name) {
//     return "Welcome " + name;
// };

// ES6 arrow function + template literal
const welcomeMessage = (name) => `Welcome, ${name}!`;

console.log(welcomeMessage("Student"));


/* =====================================
   3. OBJECT DESTRUCTURING
===================================== */

const student = {
    name: "Rimjhim",
    course: "BCA",
    college: "Computer Science"
};

const { name, course, college } = student;

console.log(name);
console.log(course);
console.log(college);


/* =====================================
   4. ARRAY DESTRUCTURING
===================================== */

const subjects = ["HTML", "CSS", "JavaScript"];

const [first, second, third] = subjects;

console.log(first);
console.log(second);
console.log(third);


/* =====================================
   5. FILTER METHOD
===================================== */

// Find students who passed (marks >= 40)

const passedStudents = students.filter(
    student => student.marks >= 40
);

console.log("Passed Students:", passedStudents);


/* =====================================
   6. MAP METHOD
===================================== */

// Extract student names

const studentNames = students.map(
    student => student.name
);

console.log("Student Names:", studentNames);


/* =====================================
   7. REDUCE METHOD
===================================== */

// Calculate total marks

const totalMarks = students.reduce(
    (total, student) => total + student.marks,
    0
);

console.log("Total Marks:", totalMarks);


/* =====================================
   8. CALCULATE AVERAGE
===================================== */

const averageMarks = totalMarks / students.length;

console.log("Average Marks:", averageMarks.toFixed(2));


/* =====================================
   9. DOM ELEMENTS
===================================== */

const studentList = document.getElementById("studentList");
const totalStudents = document.getElementById("totalStudents");
const averageMarksElement = document.getElementById("averageMarks");
const topStudent = document.getElementById("topStudent");

const searchInput = document.getElementById("searchInput");

const showAllButton = document.getElementById("showAll");
const showPassedButton = document.getElementById("showPassed");
const showFailedButton = document.getElementById("showFailed");


/* =====================================
   10. DISPLAY STUDENTS
===================================== */

const displayStudents = (studentData) => {

    studentList.innerHTML = "";

    if (studentData.length === 0) {
        studentList.innerHTML = "<p>No students found.</p>";
        return;
    }

    studentData.forEach(({ name, subject, marks }) => {

        const status = marks >= 40 ? "Passed" : "Failed";

        const statusClass = marks >= 40 ? "passed" : "failed";

        const studentCard = document.createElement("div");

        studentCard.className = "student";

        studentCard.innerHTML = `
            <h3>${name}</h3>
            <p>Subject: ${subject}</p>
            <p>Marks: ${marks}</p>
            <p>Status:
                <span class="${statusClass}">${status}</span>
            </p>
        `;

        studentList.appendChild(studentCard);
    });
};


/* =====================================
   11. UPDATE DASHBOARD
===================================== */

const updateDashboard = () => {

    totalStudents.textContent = students.length;

    averageMarksElement.textContent = averageMarks.toFixed(2);

    const highestScorer = students.reduce(
        (top, current) =>
            current.marks > top.marks ? current : top
    );

    topStudent.textContent = highestScorer.name;
};


/* =====================================
   12. FILTER PASSED STUDENTS
===================================== */

showPassedButton.addEventListener("click", () => {

    const result = students.filter(
        student => student.marks >= 40
    );

    displayStudents(result);
});


/* =====================================
   13. FILTER FAILED STUDENTS
===================================== */

showFailedButton.addEventListener("click", () => {

    const result = students.filter(
        student => student.marks < 40
    );

    displayStudents(result);
});


/* =====================================
   14. SHOW ALL STUDENTS
===================================== */

showAllButton.addEventListener("click", () => {

    searchInput.value = "";

    displayStudents(students);
});


/* =====================================
   15. SEARCH STUDENTS
===================================== */

searchInput.addEventListener("input", (event) => {

    const searchValue = event.target.value.toLowerCase();

    const result = students.filter(
        student =>
            student.name.toLowerCase().includes(searchValue)
    );

    displayStudents(result);
});


/* =====================================
   16. INITIALIZE DASHBOARD
===================================== */

updateDashboard();

displayStudents(students);

console.log("Student Dashboard Loaded Successfully!");
