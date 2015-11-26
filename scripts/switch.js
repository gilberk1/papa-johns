function swapSheet() {
	if(document.getElementById("contrast-switch").checked == true && document.getElementById("text-switch").checked == true)
		document.getElementById('pagestyle').setAttribute('href', 'styles/both.css');
	if(document.getElementById("contrast-switch").checked == true && document.getElementById("text-switch").checked == false)
		document.getElementById('pagestyle').setAttribute('href', 'styles/contrast-switch.css');
	if(document.getElementById("contrast-switch").checked == false && document.getElementById("text-switch").checked == true)
		document.getElementById('pagestyle').setAttribute('href', 'styles/text-switch.css');
	if(document.getElementById("contrast-switch").checked == false && document.getElementById("text-switch").checked == false)
		document.getElementById('pagestyle').setAttribute('href', 'styles/style.css');
}