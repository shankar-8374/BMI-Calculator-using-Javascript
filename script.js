function BMI()
{
	var weight=Number(document.getElementById("weight").value);
	var height=Number(document.getElementById("height").value);
	var BMI=weight/height**2;
	document.getElementById("result").value =BMI;
	if(BMI<18.5)
	{
		window.alert("you seems to be Underweight.");
	}
	else if(18.5<BMI<25)
	{
		window.alert("Congrats!You are Perfect.");
	}
	else if(25<BMI<30)
	{
		window.alert("OOPS! you are overweight.")
	}
}