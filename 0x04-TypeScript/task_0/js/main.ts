interface Student{
    firstName: string,
    lastName: string,
    age: number,
    location: string
}

const student1: Student = {
    firstName: "Ahmed",
    lastName: "Benjelloun",
    age: 20,
    location: "NYC"
}
const student2: Student = {
    firstName: "Ben",
    lastName: "Doe",
    age: 55,
    location: "Chicago"
}

const studentList: Student[] = [student1, student2];
const root2 = document.getElementById("root");
