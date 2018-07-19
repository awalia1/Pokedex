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
	var c1 = document.getElementById("hp");
	var c2 = document.getElementById("atk");
	var c3 = document.getElementById("def");

	document.body.style.backgroundImage = 'url(images/water.jpg)';

	document.getElementById("name").innerHTML = "Squirtle";

	var img = document.createElement('img');
    img.src = "https://pre00.deviantart.net/391f/th/pre/i/2015/331/1/d/squirtle_with_a_default_happy_face_by_kol98-d9ia5zu.png";
    a.appendChild(img);

    b.innerHTML = "Squirtle's shell is not merely used for protection. The shell's rounded shape and the grooves on its surface help minimize resistance in water, enabling this Pokemon to swim at high speeds.";
    var ability = document.createElement('p');
    ability.innerHTML = "This Pokemon's abiltiies include water and not."
    b.appendChild(ability);

    var hp = document.createElement('p');
    var atk = document.createElement('p');
    var def = document.createElement('p');
    var stat = document.createElement('h2');

    hp.innerHTML= "HP: 90";
    atk.innerHTML= "ATK: 90";
    def.innerHTML= "DEF: 90";

    c.appendChild(hp);
    c.appendChild(atk);
    c.appendChild(def);
    
}

function venusaurClick() {
	document.body.style.backgroundImage = 'url(images/grass.jpg)';
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
		this.name = myobj.name;
		this.defense = myObj.stats[3].base_stat;
		this.attack = myObj.stats[4].base_stat;
		this.hp = myObj.stats[5].base_stat;
		this.abilities = myObj.abilities[i].ability.name;
	}
}

class Squirtle extends Pokemon {
	constructor(){
		super();
		this.id = "7";
		update(this);
	}
}

class Venasaur extends Pokemon {
	constructor(){
		super();
		this.id = "6";
		update(this);
	}
}

class Pikachu extends Pokemon {
	constructor(){
		super();
		this.id = "6";
		update(this);
	}
}

class Nidoking extends Pokemon {
	constructor(){
		super();
		this.id = "6";
		update(this);
	}
}

class Charizard extends Pokemon {
	constructor(){
		super();
		this.id = "6";
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
