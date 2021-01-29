/* Definimos una arrow function que abstrae dos definiciones de clases en su interior
-nos deja usarlas sin preocuparnos de los constructores ni de quimbambas al llamarla-
y es capaz de crear objetos de distintas clases. */
let abstraida=(clase,nombre)=>{

	class Person{
		constructor(name){
			this.name=name;
			this.size="humano";
			this.speed="30Km/h"
		}
		decirNombre(){
			console.log(`Esta persona se llama ${this.name}`);
		}
	}

	class Animal{
		constructor(name){
			this.name=name;
			this.size="Variadito";
			this.speed="De 0 a 120Km/h (Un Jaguar por la autopista) ;P"
		}
		decirNombre(){
			console.log(`Este animal se llama ${this.name}`);
		}
	}

	if(clase="Person"){
		return new Person(nombre);
	}
	if(clase="Animal"){
		return new Animal(nombre);
	}
	return false;
}

/* La usamos para instanciar un par de objetos de clases distintas y comprobamos el
resultado*/
let bicho1=abstraida("Person","Pepe");
let bicho2=abstraida("Animal","Michino");

bicho1.decirNombre();
bicho2.decirNombre();