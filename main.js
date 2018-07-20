// class Pokemon {
// 	constructor(){
// 		this.name = name;
// 		this.defense = stats[3].base_stat;
// 		this.attack = stats[4].base_stat;
// 		this.hp = stats[5].base_stat;
// 		this.ability1 = abilities[0].ability.name;
// 		this.ability2 = abilities[1].ability.name;
// 	}
// }

// class Squirtle extends Pokemon {
// 	constructor(){
// 		super();
// 		this.id = "7";
// 		this.imgSrc = "images/squirtle-big.jpg";
// 		this.bgImg = "images/water.jpg";
// 		this.description = "Squirtle's shell is not merely used for protection. The shell's rounded shape and the grooves on its surface help minimize resistance in water, enabling this Pokemon to swim at high speeds.";
// 	}
// }

// class Venasaur extends Pokemon {
// 	constructor(){
// 		super();
// 		this.id = "3";
// 		this.imgSrc = "images/venasaur-big.jpg";
// 		this.bgImg = "images/grass.jpg";
// 		this.description = "There is a large flower on Venusaur's back. The flower is said to take on vivid colors if it gets plenty of nutrition and sunlight. The flower's aroma soothes the emotions of people.";
// 	}
// }

// class Pikachu extends Pokemon {
// 	constructor(){
// 		super();
// 		this.id = "25";
// 		this.imgSrc = "images/pikachu-big.jpg";
// 		this.bgImg = "images/electric.jpg";
// 		this.description = "Whenever Pikachu comes across something new, it blasts it with a jolt of electricity. If you come across a blackened berry, it's evidence that this Pokémon mistook the intensity of its charge."
// 	}
// }

// class Nidoking extends Pokemon {
// 	constructor(){
// 		super();
// 		this.id = "34";
// 		this.imgSrc = "images/nidoking-big.jpg";
// 		this.bgImg = "images/poison.jpg";
// 		this.description = "Nidoking's thick tail packs enormously destructive power. With one swing, it can topple a metal transmission tower. Once this Pokémon goes on a rampage, there is no stopping it."
// 	}
// }

// class Charizard extends Pokemon {
// 	constructor(){
// 		super();
// 		this.id = "6";
// 		this.imgSrc = "images/charizard-big.jpg";
// 		this.bgImg = "images/fire.jpg";
// 		this.description = "Charizard flies around the sky in search of powerful opponents. It breathes fire of such great heat that it melts anything. However, it never turns its fiery breath on any opponent weaker than itself."
// 		update(this);
// 	}
// }

class Pokemon {
	constructor(name, def, atk, hp, ability1, ability2, id, imgSrc, bgImg, description){
		this.name = name;
		this.defense = def;
		this.attack = atk;
		this.hp = hp;
		this.ability1 = ability1;
		this.ability2 = ability2;
		this.imgSrc = imgSrc;
		this.bgImg = bgImg;
		this.description = description
	}
}