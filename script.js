function BMI()
{
	var weight=Number(document.getElementById("weight").value);
	var height=Number(document.getElementById("height").value);
	var BMI=weight/height**2;
	document.getElementById("result").value =BMI;
}