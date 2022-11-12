const courseList = [
    {code:"ACIT 1630", name:"Math"},
    {code:"ACIT 1420", name:"Systems Admin"},
    {code:"ACIT 1630", name:"Database Administration"},

]

let input = ""
do{
    input = prompt("Enter a BCIT course code (4-digit number): ");
}
while(input.length !=4 || isNaN(Number(input)))

let input = courseList.find(code => courseList.code === "1630", "1420", "1630");

// for(code in courseList){
//     console.log(code)
// }