import React from 'react';

export default function App() {

    let grades = [53, 98, 38, 33, 74, 20];
  
    function roundGrades(grades) {
        let roundedGrades = [];
        for (let i = 0; i < grades.length; i++) {
            let grade = grades[i];
            if (grade < 38) {
                roundedGrades.push(grade);
            } else {
                let nextMultipleOf5 = Math.ceil(grade / 5) * 5;
                if (nextMultipleOf5 - grade < 3) {
                    roundedGrades.push(nextMultipleOf5);
                } else {
                    roundedGrades.push(grade);
                }
            }
        }
        return roundedGrades;
    }
    
    let rounded = roundGrades(grades);
    
    console.log(rounded)
  
    return (
        <div>App</div>
    );
}