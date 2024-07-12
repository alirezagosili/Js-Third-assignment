const students = [
    {
        name: "Davina J Eskew",
        gender: "female",
        age: 61,
        courses: ["math", "bio"],
    },
    {
        name: "Jordan M Johnson",
        gender: "male",
        age: 67,
        courses: ["math", "chemistry"],
    },
    {
        name: "James G Carmona",
        gender: "male",
        age: 25,
        courses: ["bio", "computer"],
    },
    {
        name: "Orville S Schuyler",
        gender: "male",
        age: 59,
        courses: ["computer", "bio"],
    },
    {
        name: "Monica H Hill",
        gender: "female",
        age: 37,
        courses: ["computer", "math", "chemistry"],
    },
    {
        name: "Zachary J Hawkins",
        gender: "male",
        age: 34,
        courses: ["bio"],
    },
    {
        name: "Elizabeth J Mercer",
        gender: "female",
        age: 12,
        courses: [],
    },
];

// دانش‌آموزانی که سنشون کمتر از ۵۰ ساله و شیمی خوندن

const youngChemistryStudents = students.filter(
    (person) => person.age < 50 && person.courses.includes("chemistry")
);
console.log(youngChemistryStudents);

// دانش آموزانی که مرد هستن و ریاضی خوندن

const maleMathStudents = students.filter(
    (person) => person.gender === "male" && person.courses.includes("math")
);
console.log(maleMathStudents);

// دانش‌آموزانی که سنشون بیشتر از ۴۰ ساله، کامپیوتر خوندن ولی ریاضی نخوندن

const computerNoMathStudents = students.filter(
    (person) =>
        person.age > 40 &&
        person.courses.includes("computer") &&
        !person.courses.includes("math")
);
console.log(computerNoMathStudents);

// دانش آموزانی که هیچی نخوندن
const noCoursesStudents = students.filter(
    (person) => person.courses.length === 0
);
console.log(noCoursesStudents);

// آیا توی لیست دانش‌آموزان، دانش‌آموزی داریم که اسمش الیزابت باشه؟
const hasElizabeth = students.some((person) =>
    person.name.includes("Elizabeth")
);

console.log(
    'Do we have a student whose name is "Elizabeth" in the list of students?',
    hasElizabeth
);

// آیا توی لیست دانش‌آموزان، دانش‌آموزی رو داریم که سنش بیشتر از ۶۰ باشه و مرد باشه؟

const isElderlyMale = students.some(
    (student) => student.age > 60 && student.gender === "male"
);

console.log("Is there any male student older than 60?", isElderlyMale);

// درس‌هایی رو که تمام دانش‌آموزان خانوم دارن میخونن رو لیست کنین

const femaleStudents = students.filter(
    (student) => student.gender === "female"
);

let commonCourses = [];
if (femaleStudents.length > 0) {
    const firstFemaleStudent = femaleStudents[0];

    commonCourses = firstFemaleStudent.courses.filter((course) =>
        femaleStudents.every((student) => student.courses.includes(course))
    );
}

console.log("Courses that all female students study:", commonCourses);


// دانش‌آموزان رو بر اساس سنشون از کم به زیاد مرتب کنید

const findMinAge = (students) => {
    let minAgeStudent = students[0];
    students.forEach(student => {
        if (student.age < minAgeStudent.age) {
            minAgeStudent = student;
        }
    });
    return minAgeStudent.age; 
};
const sortStudentsByAge = (students) => {
    const sortedStudents = [];
    let remainingStudents = [...students]; 

    remainingStudents.forEach(() => {
        const minAge = findMinAge(remainingStudents); 
        const minAgeStudents = remainingStudents.filter(student => student.age === minAge);
        sortedStudents.push(...minAgeStudents);
        remainingStudents = remainingStudents.filter(student => student.age !== minAge); 
    });

    return sortedStudents;
};
const sortedStudents = sortStudentsByAge(students);
console.log(sortedStudents);
