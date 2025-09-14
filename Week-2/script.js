//  empty student object
let student = {
    name: "",
    scores: {},
    grade: "Not calculated",
    status: "Not determined"
}

// list of subjects to collect scores for
const subjects = ["Math", "English", "Science", "History", "Geography"]

// keep asking for student name until user enters something
while (student.name.trim() === "") {
    student.name = prompt("enter student's name:")
}

// loop through each subject and collect scores
for (let i = 0; i < subjects.length; i++) {
    let input = ""

    // keep asking until input is valid (not empty, is a number, between 0-100)
    while (input.trim() === "" || isNaN(input) || Number(input) < 0 || Number(input) > 100) {
        input = prompt(`enter ${student.name}'s score for ${subjects[i]}:`)
    }

    // save the score for this subject
    student.scores[subjects[i]] = Number(input)
}

// function to calculate the average of all scores
function calculateAverage(scores) {
    let values = Object.values(scores)

    return values.reduce((a, b) => a + b, 0) / values.length
}

// function expression to assign grade based on average
const getGrade = function(avg) {
    if (avg >= 70) return "A"
    else if (avg >= 60) return "B"
    else if (avg >= 50) return "C"
    else if (avg >= 40) return "D"
    return "F"
}

// function to assign status based on grade
function getStatus(grade) {
    if (grade === "A" || grade === "B") return "Passed"
    if (grade === "C") return "Average"
    return "Failed"
}

// calculate average, grade and status for the student
let avg = calculateAverage(student.scores)
student.grade = getGrade(avg)
student.status = getStatus(student.grade)

// print a report card
console.log(`===== ${student.name}'s report card =====`)
console.log(`student: ${student.name}`)
console.log("scores:")
for (let subject in student.scores) {
    console.log(`  ${subject}: ${student.scores[subject]}`)
}
console.log(`average score: ${avg.toFixed(2)}`)
console.log(`grade: ${student.grade}`)
console.log(`status: ${student.status}`)
