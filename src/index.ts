// Write your TypeScript code here
// Implement the Person class as a base class
class Person {
  protected firstName: string
  protected lastName: string

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName
    this.lastName = lastName
  }

  getFullName(): string {
    return this.firstName + ' ' + this.lastName
  }
}

// Implement the Student class that extends the Person class
class Student extends Person {
  studentId: number
  private _grades: Array<number>

  constructor(studentId: number, firstName: string, lastName: string) {
    super(firstName, lastName)
    this.studentId = studentId
    this._grades = []
  }

  addGrade(grade: number): void {
    if (0 <= grade && grade <= 100) {
      this._grades.push(grade)
    }
  }

  getAverageGrade(): number {
    const lengthOfArray = this._grades.length

    if (lengthOfArray === 0) {
      return 0
    }

    let average = 0
    let total = 0

    for (let number of this._grades) {
      total += number
    }

    average = total / lengthOfArray

    return average
  }
}

// Test your implementation with these examples
const student = new Student(101, 'Jane', 'Doe')
console.log(`Full Name: ${student.getFullName()}`)

// Add grades
student.addGrade(85)
student.addGrade(90)
student.addGrade(95)

// Calculate average grade
console.log(`Average Grade: ${student.getAverageGrade()}`)

// Uncomment the line below to test private property
// console.log(student._grades); // Should cause a compilation error
