const pi = 3.14;
var a = ['a', 'b', 'c'];
for(let i = 1; i <= a.length; i++) {
	console.log(i)
}

var b = (a, b) => {
	return a + b
}

a.map((item, index) => {
	return `<li>${item}</li>`
})

class Person {
	constructor(name, age) {
		this.name = name;
		this.age = age;
	}
	say() {
		console.log(this.name + this.age)
	}
}

class Child extends Person {
	constructor(props) {
		super(props)
	}
}

new Person("laoxie", 18)

new Child("laoxie", 18)
