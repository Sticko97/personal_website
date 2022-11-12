const courseList = [
    {code:"ACIT 1630", name:"Math"},
    {code:"ACIT 1420", name:"Systems Admin"},
    {code:"ACIT 1630", name:"Database Administration"},
    
]

let getInput = prompt("Enter a BCIT course code (4-digit number): ?")

if(isNaN(getInput) || getInput.length !== 4){
    getInput = prompt("Invalid input. Please enter again")
}

let hasName = false;
for(course of courseList){
    // console.log(course);
    if(course.code.includes(getInput)){
        console.log('Yes I am taking the course: ', course.code, " - ", course.name)
        hasName = true;
    }
}

if(!hasName){
    courseList.push({code:getInput, name: null})
}
console.log(courseList)

