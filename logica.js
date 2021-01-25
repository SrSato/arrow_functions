class Persona{
	constructor(nom){
		this.nom=nom;
	}
	decirNombre(){
		console.log(this.nom);
	}
}

let pepe = new Persona("Pepe");
pepe.decirNombre();