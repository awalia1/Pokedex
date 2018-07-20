// function loadDoc() {
//   var xhttp = new XMLHttpRequest();
//   xhttp.onreadystatechange = function() {
//     if (this.readyState == 4 && this.status == 200) {
//       document.getElementById("info").innerHTML = this.responseText;
//     }
//   };
//   xhttp.open("GET", "https://raw.githubusercontent.com/mlaw-nycda/data/master/data", true);
//   xhttp.send();
// }


//possible graph that doesnt work
// google.load('visualization', '1', {packages: ['corechart']});
// google.setOnLoadCallback(drawMaterial);

// function drawMaterial() {
//         var data = google.visualization.arrayToDataTable([
//          ['Stats', ''],
//          ['HP', 10],  
//          ['Attack', 20],
//          ['Defense', 50 ], // CSS-style declaration
//       ]);

//       var options = {
      
//       };
// 	var formatter = new google.visualization.NumberFormat(
//                 {prefix: ''}
//             );
//             formatter.format(data, 1);

//       var chart = new google.visualization.ColumnChart(document.getElementById('chart_div'));
//       chart.draw(data, options);
//     }

function squirtleClick() {
	var a = document.getElementById('pokemon');
	var b = document.getElementById("description");
	var c = document.getElementById("stats");

	b.classList.add("box");
	c.classList.add("box");

	document.body.style.backgroundImage = 'url(images/water.jpg)';

	document.getElementById("name").innerHTML = "Squirtle";

   	document.getElementById("big-pokemon").src = 'images/squirtle-big.jpg';

    b.innerHTML = "Squirtle's shell is not merely used for protection. The shell's rounded shape and the grooves on its surface help minimize resistance in water, enabling this Pokemon to swim at high speeds.";
    var ability = document.createElement('p');
    ability.innerHTML = "This Pokemon's abilties include water and not."
    b.appendChild(ability);

    var hp = document.getElementById('hp');
    var atk = document.getElementById('atk');
    var def = document.getElementById('def');

    hp.innerHTML= "HP: 90";
    atk.innerHTML= "ATK: 90";
    def.innerHTML= "DEF: 90";
 
}

function venusaurClick() {
	var a = document.getElementById('pokemon');
	var b = document.getElementById("description");
	var c = document.getElementById("stats");

	b.classList.add("box");
	c.classList.add("box");

	document.body.style.backgroundImage = 'url(images/grass.jpg)';

	document.getElementById("name").innerHTML = "Venusaur";

    document.getElementById("big-pokemon").src = 'images/venusaur-big.jpg';

    b.innerHTML = "Squirtle's shell is not merely used for protection. The shell's rounded shape and the grooves on its surface help minimize resistance in water, enabling this Pokemon to swim at high speeds.";
    var ability = document.createElement('p');
    ability.innerHTML = "This Pokemon's abilties include nine and ten."
    b.appendChild(ability);

    var hp = document.getElementById('hp');
    var atk = document.getElementById('atk');
    var def = document.getElementById('def');

    hp.innerHTML= "HP: 90";
    atk.innerHTML= "ATK: 90";
    def.innerHTML= "DEF: 90";

}

function pikachuClick() {
	document.body.style.backgroundImage = 'url(images/electric.jpg)';
}

function nidokingClick() {
	document.body.style.backgroundImage = 'url(images/poison.jpg)';
}

function charizardClick() {
	document.body.style.backgroundImage = 'url(images/fire.jpg)';
}

class Pokemon {
	constructor(){
		this.name = "myobj.name";
		this.defense = "myObj.stats[3].base_stat";
		this.attack = "myObj.stats[4].base_stat";
		// this.hp = myObj.stats[5].base_stat;
		// this.ability1 = myObj.abilities[0].ability.name;
		// this.ability2 = myObj.abilities[1].ability.name;
	}
}

class Squirtle extends Pokemon {
	constructor(){
		super();
		this.id = "7";
		this.imgSrc = "images/squirtle-big.jpg";
		this.bgImg = "images/water.jpg";
		this.description = "Squirtle's shell is not merely used for protection. The shell's rounded shape and the grooves on its surface help minimize resistance in water, enabling this Pokemon to swim at high speeds.";
		update(this);
	}
}

class Venasaur extends Pokemon {
	constructor(){
		super();
		this.id = "3";
		this.imgSrc = "images/venasaur-big.jpg";
		this.bgImg = "images/grass.jpg";
		this.description = "There is a large flower on Venusaur's back. The flower is said to take on vivid colors if it gets plenty of nutrition and sunlight. The flower's aroma soothes the emotions of people.";
		update(this);
	}
}

class Pikachu extends Pokemon {
	constructor(){
		super();
		this.id = "25";
		this.imgSrc = "images/pikachu-big.jpg";
		this.bgImg = "images/electric.jpg";
		this.description = "Whenever Pikachu comes across something new, it blasts it with a jolt of electricity. If you come across a blackened berry, it's evidence that this Pokémon mistook the intensity of its charge."
		update(this);
	}
}

class Nidoking extends Pokemon {
	constructor(){
		super();
		this.id = "34";
		this.imgSrc = "images/nidoking-big.jpg";
		this.bgImg = "images/poison.jpg";
		this.description = "Nidoking's thick tail packs enormously destructive power. With one swing, it can topple a metal transmission tower. Once this Pokémon goes on a rampage, there is no stopping it."
		update(this);
	}
}

class Charizard extends Pokemon {
	constructor(){
		super();
		this.id = "6";
		this.imgSrc = "images/charizard-big.jpg";
		this.bgImg = "images/fire.jpg";
		this.description = "Charizard flies around the sky in search of powerful opponents. It breathes fire of such great heat that it melts anything. However, it never turns its fiery breath on any opponent weaker than itself."
		update(this);
	}
}

function update(char) {

	var title = document.createElement('h1');
	var punch = document.createElement('p');
	var kick = document.createElement ('p');

	var charname = document.createTextNode(char.name);
	var charpunch = document.createTextNode(char.id);
	var charkick = document.createTextNode(char.defense);

	title.appendChild(charname);
	punch.appendChild(charpunch);
	kick.appendChild(charkick);

	var x = document.getElementById('char');
	x.appendChild(title);
	x.appendChild(punch);
	x.appendChild(kick);
}

// var xmlhttp = new XMLHttpRequest();
// xmlhttp.onreadystatechange = function() {
//     if (this.readyState == 4 && this.status == 200) {
//         var myObj = JSON.parse(this.responseText);
//         console.log(Pokemon.defense);
//         for(i=0;i<myObj.abilities.length;i++){
//         	var h = document.createElement("H1");
//     var t = document.createTextNode(myObj.abilities[i].ability.name);
//     h.appendChild(t);
//     document.body.appendChild(h);
//         	// console.log(myObj.abilities[i].ability.name);
//         // document.getElementById("demo").innerHTML = myObj.abilities[i].ability.name;
        
//     }
//     }
// };
// xmlhttp.open("GET", "https://raw.githubusercontent.com/awalia1/Pokedex/master/squirtle.txt", true);
// xmlhttp.send();
