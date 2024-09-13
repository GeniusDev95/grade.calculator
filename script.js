let studentName = prompt("Enter Student Name to get his/her Grade")
let marks = Number(prompt("Enter the marks obtained out of 100"));


if(isNaN(marks)){
    alert("Please enter a valid number")
}
else if(marks >= 90){
    alert(studentName + ", You have got A Grade")
}
else if(marks >= 80){
    alert(studentName + ", You have got B Grade")
}
else if(marks >= 70){
    alert(studentName + ", You have got C Grade")
}
else if(marks >= 60){
    alert(studentName + ", You have got D Grade")
}
else if(marks >= 0){
    alert(studentName + ", You have got F Grade")
}
