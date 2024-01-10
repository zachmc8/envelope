let envelopes = {};
let currEnv = null;

class Envelope {
	constructor(name, amount) {
		this.name = name;
		this.amt = Number(amount);
	}

	addFunds(amount) {
		this.amt += Number(amount);
	}

	subFunds(amount) {
		this.amt -= Number(amount);
	}

	showFunds() {
		return this.amt;
	}

}

function openForm(id) {
	document.getElementById(id).style.display = "block";
}

function closeForm(id) {
	document.getElementById(id).style.display = "none";
}

function useForm() {
	//send form answers to a new Envelope method, then clear and hide the form
	const name = document.getElementById("name").value;
	const amt = document.getElementById("amt").value;
	makeEnvelope(name, amt);
	document.getElementById("name").value = "";
	document.getElementById("amt").value = "";
	closeForm("makeEnvelope");
	
	//prevent page from reloading upon form submission
	return false;
}

function makeEnvelope(name, amount) {
	//ensure envelopes have unique names
	if (!(name in envelopes)) {
		//make div containing envelopes visible once there are envelopes in it
		if (Object.keys(envelopes).length === 0) {
			document.getElementById("envelope-container").style.display = "inline-block";
		}
		//create new envelope object
		const this_env = new Envelope(name, amount);
		envelopes[name] = this_env;

		//make a new button for the new env with the name
		let div = document.getElementById("envelope-container");
		let button = document.createElement("button");
		const text = document.createTextNode(name);
		button.classList.add("envelopes");
		button.appendChild(text);
		div.appendChild(button);
	} else {
		alert("Envelopes must have unique names!");
	}
}

function editEnvelope() {
	if (document.getElementById("editAmt").value === "") {
		alert("Please enter an amount.");
		return false;
	}
	if (document.getElementById("addVal").checked) {
		amt = document.getElementById("editAmt").value;
		envelopes[currEnv].addFunds(amt);
		document.getElementById("addVal").checked = false;
	} else if (document.getElementById("subVal").checked) {
		amt = document.getElementById("editAmt").value;
		envelopes[currEnv].subFunds(amt);
		document.getElementById("subVal").checked = false;
	} else {
		alert("Please select an action.");
		return false;
	}

	document.getElementById("editAmt").value = "";

	closeForm("editEnv");
	return false;
}

const container = document.querySelector('#envelope-container');

container.addEventListener('click', function(e) {
	if (e.target.classList.contains('envelopes')) {
		openForm("editEnv");
		currEnv = e.target.childNodes[0].nodeValue;
		let p = document.getElementById("statement");
		if (p.childNodes.length === 0) {
			let text = document.createTextNode("The envelope " + currEnv + " contains $" + String(envelopes[currEnv].showFunds()) + ".");
			p.appendChild(text);
		} else {
			p.removeChild(p.firstChild);
			let text = document.createTextNode("The envelope " + currEnv + " contains $" + String(envelopes[currEnv].showFunds()) + ".");
			p.appendChild(text);
		}
		
		document.getElementById("editEnv").prepend(p);
		//alert("This envelope contains $" + envelopes[e.target.childNodes[0].nodeValue].showFunds() + ".");
	}
});