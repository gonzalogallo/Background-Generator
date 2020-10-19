
var button1 = document.getElementsByTagName("button")[0];
button1.addEventListener("click", function() {
	document.querySelector("h1").classList.toggle("coolTitle");
});

var button2 = document.getElementsByTagName("button")[1];
button2.addEventListener("click", function() {
	for (i=0; i<sel.length; i++)  {
 	document.querySelectorAll("li")[i].style.background = colorRandom();
	}
});

var button3 = document.getElementById("enter");
var input1 = document.getElementById("userinput");
var ul = document.querySelector("ul");

button3.addEventListener("click", function() {
	if (input1.value.length > 0) {
		var li = document.createElement("li");  // Aquí NO SE SELECCIONA "li" sino que se CREA un "li" llamado li. no dice ni como se llama ese li (que TextNode tiene) ni donde se crea
		li.appendChild(document.createTextNode(input1.value));  // crea un objeto que se llama "testing" y lo crea como una propiedad de li que es un objeto "li", pero no dice dónde lo crea
		ul.appendChild(li); // el objeto creado en la línea anterior, se agrega como hijo propiedad de ul, que a su vez es haber seleccionado "ul"
		input1.value = "";
	}
});
input1.addEventListener("keypress", function(evento) {
	if (input1.value.length > 0 && evento.keyCode === 13) {
		var li = document.createElement("li");  // Aquí NO SE SELECCIONA "li" sino que se CREA un "li" llamado li. no dice ni como se llama ese li (que TextNode tiene) ni donde se crea
		li.appendChild(document.createTextNode(input1.value));  // crea un objeto que se llama "testing" y lo crea como una propiedad de li que es un objeto "li", pero no dice dónde lo crea
		ul.appendChild(li); // el objeto creado en la línea anterior, se agrega como hijo propiedad de ul, que a su vez es haber seleccionado "ul"
		input1.value = "";
	}
});

var sel = document.querySelectorAll("li");
var a = 0;
var b = 0;
var c = 0;
var abc = 0;
testo = "#";

var colorRandom = function() {
	a = parseInt(Math.random() * 255).toString(16);
		if (a.length < 2) { a="00"+a; a=a.slice(a.length-2,a.lenght);}
	b = parseInt(Math.random() * 255).toString(16);
		if (b.length < 2) { b="00"+b; b=b.slice(b.length-2,b.lenght);}
	c = parseInt(Math.random() * 255).toString(16);
		if (c.length < 2) { c="00"+c; c=c.slice(c.length-2,c.lenght);}
	abc = String(a + b + c);
 return testo.concat(abc);
} 

// document.querySelector("h1").style.color = colorRandom();

// document.querySelector("h1").style.background = colorRandom();

for (i=0; i<sel.length; i++)  {
 	sel[i].style.background = colorRandom();
}