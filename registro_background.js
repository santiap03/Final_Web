window.onload = start;

var elements;
function start(){
	if(sessionStorage.getItem('logged')!= null ){
		console.log("hola")
		var myobj = document.getElementById("log");
		myobj.remove();
		var tempDiv = document.createElement('div');
		var d1 = document.getElementById('reg');
		d1.insertAdjacentHTML('afterend', '<a class="btn btn-primary bg-white text-dark" href="index_MiCuenta.html">Mi cuenta</a>');
	}
    elements= document.forms[0].elements;
    elements[1].onkeypress= restriction;
    elements[3].onkeypress= restriction2;
    elements[11].onkeypress= restriction1;
    
}

function restriction(event) {
	var letra = String.fromCharCode(event.charCode);
    console.log(letra);
	if (letra>='a' && letra<'z'){
        console.log(letra);
	    return true;
	}
    else{
        return false;
    }
	
}
function restriction1(event) {
	var letra = String.fromCharCode(event.charCode);


	var caractersPermitidos = "abcdefghijklmnopqrstuvwxyz123456789@.";
	// console.log(caractersPermitidos.indexOf(letra));
	return caractersPermitidos.indexOf(letra) != -1;
}
function restriction2(event) {
	var letra = String.fromCharCode(event.charCode);
	var caractersPermitidos = "1234567890";
	// console.log(caractersPermitidos.indexOf(letra));
	return caractersPermitidos.indexOf(letra) != -1;
}