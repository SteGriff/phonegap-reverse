function reverse()
{
	var input = document.getElementById("input");
	var text = input.value;
	var reversedText = esrever.reverse(text);
	
	var output = document.getElementById("output");
	output.innerHTML = reversedText;
}