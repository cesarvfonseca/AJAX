document.querySelector('#boton').addEventListener('click', evento);

function evento(){
	// console.log('Evento generado bro');
	const xhttp = new XMLHttpRequest();
	xhttp.open('GET', 'archivo.txt', true);
	xhttp.send();
	xhttp.onreadystatechange = function() {
    	if ( this.readyState == 4 && this.status == 200 ) {
    		// document.getElementById("demo").innerHTML = this.responseText;
    		// console.log(this.responseText);
    		document.querySelector('#respuesta').innerHTML = this.responseText;
    	}
  	};
}