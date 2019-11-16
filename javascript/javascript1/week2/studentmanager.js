

const class07Students = [];
function addStudentToClass(studentName) {
    
    if (studentName === "queen" && class07Students.length >= 6) {
        class07Students.push(studentName);
    }
     else if(class07Students >= 6){
        console.log("Cannot add more students to class");
    }
    else if(studentName ===""){
        console.log("Cannot add empty string"); 
    }
    else if(class07Students.indexOf(studentName) !== -1){
        console.log(`${studentName} is already in the class`);
    }
    else{
        class07Students.push(studentName);
        console.log(class07Students);
    }
}


addStudentToClass("teja");
addStudentToClass("damu");
addStudentToClass("ravi");
addStudentToClass("sithara");
addStudentToClass("dcr");
addStudentToClass("teja");
addStudentToClass("queen");
addStudentToClass("vijaya");



function getNumberOfStudents() {
    const totalStudents = class07Students.length;
    console.log(totalStudents);

}


getNumberOfStudents();

