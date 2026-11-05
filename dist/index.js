"use strict";
class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    getFullName() {
        return this.firstName + ' ' + this.lastName;
    }
}
class Student extends Person {
    constructor(studentId, firstName, lastName) {
        super(firstName, lastName);
        this.studentId = studentId;
        this._grades = [];
    }
    addGrade(grade) {
        if (0 <= grade && grade <= 100) {
            this._grades.push(grade);
        }
    }
    getAverageGrade() {
        const lengthOfArray = this._grades.length;
        if (lengthOfArray === 0) {
            return 0;
        }
        let average = 0;
        let total = 0;
        for (let number of this._grades) {
            total += number;
        }
        average = total / lengthOfArray;
        return average;
    }
}
const student = new Student(101, 'Jane', 'Doe');
console.log(`Full Name: ${student.getFullName()}`);
student.addGrade(85);
student.addGrade(90);
student.addGrade(95);
console.log(`Average Grade: ${student.getAverageGrade()}`);
