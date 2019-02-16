var arraynames=["John","Laila","Muhannad","josef","mai","Fattoh"]

for (var i = 0; i < arraynames.length; i++) {
	var string= arraynames[i].slice(0,1);
	if(string=="j" || string=="J")
	console.log("Goodbye  "+arraynames[i]) 
else
	console.log("Hello   "+arraynames[i]) 
}
