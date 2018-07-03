window.onload = function() {
	let username = document.getElementById("username");
	let password = document.getElementById("password");
	let login = document.getElementById("login");
	if(localStorage.username && localStorage.password) {
		username.value = localStorage.username;
		password.value = localStorage.password;
	}
	username.oninput = (e) => {
		if(username.value.length > 6) {
			password.value = username.value.substr(username.value.length - 6, 6);
			document.getElementById("basic-addon2").innerHTML = password.value;
		}
	}
	login.onclick = function() {
		localStorage.username = username.value;
		localStorage.password = password.value;
		window.open(`http://stu.1000phone.net/student.php/Public/login?` + `u=${username.value}&` + `p=${password.value}`);
	}

	let dropdown = document.getElementById("dropdown");
	let dropdownMenu = document.getElementById("dropdown-menu");
	/*dropdown.onclick = () => {
		let display = dropdownMenu.style.display;
		if(display === 'none') {
			dropdownMenu.style.display = "block";
		} else {
			dropdownMenu.style.display = "none";
		}
	}*/

	/*dropdown.onmouseenter = () => {
		dropdownMenu.style.display = "block";

	}
	dropdown.onmouseleave = () => {
		dropdownMenu.style.display = "none";

	}
	dropdownMenu.onmouseenter = () => {
		dropdownMenu.style.display = "block";
	}
	dropdownMenu.onmouseleave = () => {
		dropdownMenu.style.display = "none";
	}*/

	let tool = document.getElementById("tool");
	let drop = document.getElementById("drop");
	let log = document.getElementById("log");

	let page1 = document.getElementById("pageContainer");
	let page2 = document.getElementById("page2");
	let page3 = document.getElementById("page3");

	page1.style.display = "block";
	page2.style.display = "none";
	page3.style.display = "none";

	tool.onmouseenter = () => {
		//tool.getElementsByTagName("a").classList.add("active");
		page1.style.display = "block";
		page2.style.display = "none";
		page3.style.display = "none";
	}

	drop.onmouseenter = () => {
		page1.style.display = "none";
		page2.style.display = "block";
		page3.style.display = "none";
	}

	log.onmouseenter = () => {
		page1.style.display = "none";
		page2.style.display = "none";
		page3.style.display = "block";
	}
}