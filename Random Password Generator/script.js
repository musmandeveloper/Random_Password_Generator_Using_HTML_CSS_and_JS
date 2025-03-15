

//***********************/
// Password Copy Button
//***********************/	

document.querySelector(".pswd-copy-btn").addEventListener( 
	"click", () => { 
		const pswd = document.querySelector('.pswd-output').value; 
		navigator.clipboard.writeText(pswd).then(() => { 
			document.querySelector( 
				".pswd-copy-btn").innerHTML = "Copied!"; 
			setTimeout(() => { 
				document.querySelector( 
					".pswd-copy-btn").innerHTML = "Copy"; 
			}, 1000); 
		}); 
	}); 


//****************************************************************/
// Generate Password based on selected length range & Checkboxes
//****************************************************************/

function generate() { 
	let dictionary = ""; 
	if (document.getElementById("uppercase").checked) { 
		dictionary += "ABCDEFGHIJKLMNOPQRSTUVWXYZ"; 
	}
	if (document.getElementById("lowercase").checked) { 
		dictionary += "abcdefghijklmnopqrstuvwxyz"; 
	} 
	if (document.getElementById("digits").checked) { 
		dictionary += "0123456789"; 
	} 
	if (document.getElementById("symbols").checked) { 
		dictionary += "!@#$%^&*()_-+={}[]|\:;<'>/:?";
	} 
	const pswdlength = document.querySelector( 
		'input[type="range"]').value; 

	if (pswdlength < 1 || dictionary.length === 0) { 
		return; 
	} 

	let password = ""; 
	for (let i=0; i<pswdlength; i++) { 
		const indx = Math.floor(Math.random() * dictionary.length); 
		password += dictionary[indx];
	} 

	document.querySelector( 
		'.pswd-output').value = password; 
} 


//************************/
// Password Length Range
//************************/

document.querySelector(".pswd-length input").addEventListener( 
	"input", (e) => { 
		document.querySelector( 
			".pswd-length p").innerHTML = e.target.value + " Chars Min"; 
		generate(); 
	}); 


//******************************************************************/
// Whenever Checkbox or Generate Button Clicked, Generate new Pass
//******************************************************************/

// document.querySelectorAll("input[type='checkbox']").forEach((chkbox) => {chkbox.addEventListener("click", generate);});
// document.querySelector(".pswd-gen-btn").addEventListener("click", generate);

// Above OR Below, Suggst Below bcz DOM accessed 1 time instead many times

document.querySelectorAll(' input[type="checkbox"],.pswd-gen-btn ')
.forEach((elem) => { elem.addEventListener("click", generate); }); 

// Below is 2nd syntax of above method

// [ 
// 	...document.querySelectorAll( 
// 		'input[type="checkbox"], .pswd-gen-btn'), 
// ].forEach((elem) => { elem.addEventListener("click", generate); }); 


// generate();

