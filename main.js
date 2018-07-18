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

function DoSomething() {
	document.body.style.backgroundImage = 'url(https://hdqwalls.com/wallpapers/pokeball-ad.jpg)';
}

class Pokemon {
	constructor(){
		this.name = "myobj.name";
		this.defense = "myObj.stats[3].base_stat";
		// this.attack = myObj.stats[4].base_stat;
		// this.hp = myObj.stats[5].base_stat;
		// this.abilities = myObj.abilities[i].ability.name;
	}
}

class Squirtle extends Pokemon {
	constructor(){
		super();
		this.id = "7";
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
