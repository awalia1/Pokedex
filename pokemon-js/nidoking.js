function nidokingClick(){
var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var myObj = JSON.parse(this.responseText);

        let Nidoking = new Pokemon(
		  	this.name = myObj.name,
		  	this.hp = myObj.stats[5].base_stat,
		  	this.atk = myObj.stats[4].base_stat,
		  	this.def = myObj.stats[3].base_stat,
		  	this.ability1 = myObj.abilities[0].ability.name,
		  	this.ability2 = myObj.abilities[1].ability.name,
		  	this.id = "34",
			this.imgSrc = "images/nidoking-big.jpg",
			this.bgImg = "url(images/poison.jpg)",
			this.description = "Nidoking's thick tail packs enormously destructive power. With one swing, it can topple a metal transmission tower. Once this Pokemon goes on a rampage, there is no stopping it."
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
	xmlhttp.open("GET", "https://pokeapi.co/api/v2/pokemon/34/", true);
	// xmlhttp.open("GET", "https://raw.githubusercontent.com/awalia1/Pokedex/master/txt-files/nidoking.txt", true);
	xmlhttp.send();
	}
