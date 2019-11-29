alert("Welcome to this website\nwe want you to fill a form for us.");
var first_name=prompt("Please enter your First Name");
var last_name=prompt("Please enter your Last Name");
var age=prompt("Please enter your age");
var height=prompt("Please enter your height in (cm)");
var pet_name=prompt("Please enter your Pet Name");
alert("Thank You for the Information");
var len=pet_name.length

if(first_name[0]===last_name[0] && age>="20" && age<="30" 
	&& height>="170" && pet_name[len-1]=="y")
{
	console.log("Welcome commarade! You have passed the spy test");
}
else{
	console.log("nothing to see here!");
}