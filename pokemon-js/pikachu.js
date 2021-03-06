function pikachuClick(){
var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var myObj = JSON.parse(this.responseText);

        let Pikachu = new Pokemon(
		  	this.name = myObj.name,
		  	this.hp = myObj.stats[5].base_stat,
		  	this.atk = myObj.stats[4].base_stat,
		  	this.def = myObj.stats[3].base_stat,
		  	this.ability1 = myObj.abilities[0].ability.name,
		  	this.ability2 = myObj.abilities[1].ability.name,
		  	this.id = "25",
			this.imgSrc = "images/pikachu-big.jpg",
			this.bgImg = "url(images/electric.jpg)",
			this.description = "Whenever Pikachu comes across something new, it blasts it with a jolt of electricity. If you come across a blackened berry, it's evidence that this Pokemon mistook the intensity of its charge."
		  	)
     
        var a = document.getElementById('pokemon');
		var b = document.getElementById("description");
		var c = document.getElementById("stats");
		var d = document.getElementById('big-pokemon');

		b.classList.remove("invisible");
		c.classList.remove("invisible");
		d.classList.remove("invisible");
		b.classList.add("box");
		c.classList.add("box");

		document.body.style.backgroundImage = this.bgImg;

		document.getElementById("name").innerHTML = this.name;

	   	document.getElementById("big-pokemon").src = this.imgSrc;

	    b.innerHTML = this.description;
	    var ability = document.createElement('p');
	    ability.innerHTML = "This Pokemon's abilties include " + this.ability1 + " and " + this.ability2 + "."
	    b.appendChild(ability);

	    var def = document.getElementById('def');
	    var atk = document.getElementById('atk');
	    var hp = document.getElementById('hp');

	    def.innerHTML= "DEF: " + this.def;
	    atk.innerHTML= "ATK: " + this.atk;
	    hp.innerHTML= "HP: " + this.hp;
	    }
	};
	xmlhttp.open("GET", "https://pokeapi.co/api/v2/pokemon/25/", true);
	// xmlhttp.open("GET", "https://raw.githubusercontent.com/awalia1/Pokedex/master/txt-files/pikachu.txt", true);
	xmlhttp.send();
	}
