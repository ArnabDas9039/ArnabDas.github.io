function btnno(value){
	form.txt2.value = form.txt2.value + value;
	display4(form.txt2.value);
}
function btndecif(value){
	string=form.txt2.value;
	const array=string.split("+").join(",").split("-").join(",").split("*100/").join(",").split("×").join(",").split("÷").join(",").split(",").reverse()[0];
	check=array.includes(".")
	if (check==true) {}
	else{
		form.txt2.value = form.txt2.value + value;
	}
	display4(form.txt2.value);
}
function btnaddsubtractf(value){
	string=form.txt2.value;
	lastchar=string.slice(string.length - 1, string.length);
	check=lastchar.includes("+")||lastchar.includes("-")||lastchar.includes("×")||lastchar.includes("÷")||lastchar.includes(".")||lastchar.includes("%")
	if (check==true) {
		form.txt2.value = form.txt2.value.slice(0,form.txt2.value.length - 1) + value;
	}
	else{
		form.txt2.value = form.txt2.value + value;
	}
	display4(form.txt2.value);
}
function btnmultiplydivisionf(value){
	string=form.txt2.value;
	lastchar=string.slice(string.length - 1, string.length);
	check=lastchar.includes("+")||lastchar.includes("-")||lastchar.includes("×")||lastchar.includes("÷")||lastchar.includes(".")||lastchar.includes("%");
	if (check==true) {
		form.txt2.value = form.txt2.value.slice(0,form.txt2.value.length - 1) + value;
	}
	else{
		form.txt2.value = form.txt2.value + value;
	}
	display4(form.txt2.value);
}
function btnclearf(value){
	form.txt1.value = ' ';
	form.txt2.value = ' ';
	form.txt3.value = ' ';
	form.txt4.value = ' ';
}
function btndeletef(){
	value=form.txt2.value;
	deletvalue=value.slice(0, value.length - 1);
	form.txt2.value=deletvalue;
	display4(deletvalue);
}
function btnparanf(){}
function display4(value){
	lastchar=value.slice(value.length - 1, value.length);
	check=lastchar.includes("+")||lastchar.includes("-")||lastchar.includes("×")||lastchar.includes("÷")||lastchar.includes(".")||lastchar.includes("%");
	if (check==true) {
		value=value.slice(0, value.length - 1)
	}
	evaluate=value.replace("×","*").replace("÷","/").replace("%","*100/");
	form.txt1.value=evaluate;
	form.txt4.value=eval(evaluate);
}
function btnequalf(){
	value=form.txt2.value;
	evaluate=value.replace("×","*").replace("÷","/").replace("%","*100/");
	form.txt3.value=evaluate;
	form.txt2.value=eval(evaluate);
	form.txt4.value=" ";
}