Let's practice implementing class hierarchies in TypeScript by creating a simple student management system.

### Set Up Instructions

<details>
<summary>Click to view</summary>

- Download dependencies by running `npm install`
- Compile the TypeScript code using `npx tsc`
- Run the compiled code using `node dist/index.js`
</details>

### Functionality

<details>
<summary>Core Functionality</summary>
<br/>

- Create a `Person` base class with:

  - Protected properties for `firstName` and `lastName`
  - A constructor that initializes these properties
  - A public method `getFullName():` string that returns the full name

- Create a Student class that extends Person with:

  - A public `studentId `property (number)
  - A private `_grades` property (an array of numbers)
  - A constructor that initializes all properties
  - A method `addGrade(grade: number): void` that:
    - Validates that the grade is between 0 and 100
    - Only adds valid grades to the grades array

- A method `getAverageGrade(): number` that:

  - Returns 0 if no grades exist
  - Calculates and returns the average of all grades otherwise

  </details>

<details>

<summary>Example</summary>

```
// Create a new student
const student = new Student(101, "Jane", "Doe");
console.log(student.getFullName()); 
// Output: "Jane Doe"

// Add grades
student.addGrade(85);
student.addGrade(90);
student.addGrade(95);

// Calculate average grade
console.log(student.getAverageGrade()); 
// Output: 90

// This would cause a compilation error:
// student._grades = []; 
// Error: Property '_grades' is private and only accessible within class 'Student'


```

</details>

> ### _Things to Keep in Mind_
>
> - All components you implement should go in the `src/index.js` directory.
> - Don't change the component folder names as those are the files being imported into the tests.
> - **Do not remove the pre-filled code**
> - Make sure you add appropriate TypeScript type annotations.
> - Ensure type safety by explicitly typing all parameters and return values
> - Use appropriate access modifiers (public, private, readonly) for class properties
> - Use the super keyword to call the parent class constructor
> - Follow the principle of data encapsulation by making properties private when appropriate
> - Want to quickly review some of the concepts you’ve been learning? Take a look at the Cheat Sheets.
