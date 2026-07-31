// Create a student-grade analyzer that calculates averages, passing students, and the highest scorer.

// Arrays using map, filter, and reduce methods.

function analyzeStudents(students) {

    const scores = students.map(student => student.score);

    const totalScore = scores.reduce((total, score) => total + score, 0);

    const averageScore = Number ((totalScore / students.length).toFixed(2));

    const passingStudents = students.filter((student) => student.score >= 75)

    //bonus
    .sort((a, b) => a.score - b.score); //   sort in ASCENDING order. If the result is negative, a comes before b; if positive, b comes before a; if zero, they are considered equal.
    
    // const passingStudents = Bonus.sort((a, b) => b.score - a.score); //   sort in ASCENDING order. If the result is negative, a comes before b; if positive, b comes before a; if zero, they are considered equal.

    // const passed = passingStudents.map((student) => student.name);

    const highestScorer = students.reduce((highest, currentStudent) => {
        return currentStudent.score > highest.score ? currentStudent : highest; // "?" ":" is a ternary operator. A shorter word for If else statement.
    });
     return { 
        averageScore, 
        passingStudents,
        // passed,
        highestScorer
     }
    };

    // test cases
    const students = [
        { name: "Lauris", score: 80},
        { name: "Francis", score: 93},
        { name: "Prince", score: 83},
        { name: "Richard", score: 94},
        { name: "Moriel", score: 98},
        { name: "Malupiton", score: 75},
        { name: "Le-bron", score: 50},
    ];
    console.log(analyzeStudents(students));
