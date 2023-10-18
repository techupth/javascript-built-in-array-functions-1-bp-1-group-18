const students = [
	{ name: "John", score: 80 },
	{ name: "Jane", score: 90 },
	{ name: "Jim", score: 85 },
	{ name: "Joan", score: 95 }
];


function getAverageStudentScore(students) {

    const total = students.reduce(function (accumulator, currentValue) {
        return accumulator + currentValue.score;
    },0 )
	console.log(total)

    return total / students.length
}


console.log(getAverageStudentScore(students)) 