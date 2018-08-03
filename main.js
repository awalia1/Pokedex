allPokemon = [];

trainer = {
	name: "Walia",
	all: function() {
		return allPokemon;
	}
}

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
		allPokemon.push(this);
	}
}

function ashClick() {
	
	document.body.style.backgroundImage = "url(images/pokemon-logo.jpg)";

	document.getElementById("name").innerHTML = "Walia: The Trainer";

		var b = document.getElementById("description");
		var c = document.getElementById("stats");
		var d = document.getElementById('big-pokemon');

		b.classList.add("invisible");
		c.classList.add("invisible");
		d.classList.add("invisible");
		b.classList.remove("box");
		c.classList.remove("box");
}