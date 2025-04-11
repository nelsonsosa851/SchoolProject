// StudentProject.ts

class Student {
    private name: string;
    constructor(name: string) {
        this.name = name;
    }

    get fullName(): string {
        return `Hello, my name is ${this.name}.`;
    }
}

const student1: Student = new Student("John");
console.log(student1.fullName); // Hello, my name is John.
