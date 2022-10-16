var array=[];
function submit(){
var display_student=[];
for(var j=1;j=4;j++){var nameofstudent=document.getElementById("name_of_the_student_"+j).value;
console.log(nameofstudent);
array.push(nameofstudent);

}
for(var k=0;k<4;k++) {
    display_student.push(nameofstudent[k])
}
document.getElementById("display_name_with_commas").innerHTML=display_student;
}
function sorting(){
   display_student.sort();
   document.getElementById("display_name_without_commas").innerHTML=display_student;
}