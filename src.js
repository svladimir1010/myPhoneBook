var ok = document.getElementById("ok");       //  получ кнопку 'ок'
ok.addEventListener("click", (e) => {          // навеш событие на кнопку
	for(let i = document.querySelectorAll('.numbersItem').length; i--;) {  // удаление бокса дополнительных номеров
	document.querySelectorAll('.numbersItem')[i].remove();
}
	        // ===   получ знач   value   ========
	var name = document.getElementById("name").value,
	number = document.getElementById("number").value,
	email = document.getElementById("email").value,
	birthday = document.getElementById("birthday").value;
    
    //          ============        вызываем конструктор контакта
    //          и передаем ему значения value                        ===========
	var task = new Task(name, number, email, birthday);
	arrey !== '' ? task.numbersArr = arrey : '';
	
	
console.log(task.numbersArr);

    //          ========    очищаем поля input
	document.getElementById("name").value = ''; 
	document.getElementById("number").value = '';
	document.getElementById("email").value = '';
	document.getElementById("birthday").value = '';

	// ======================================================

	document.querySelector(".list").appendChild(task.el());
	arrey.length = '';
//document.getElementById('numbers').removeChild(numbers);
//document.getElementsByClassName('numbersItem').remove();

//parentElem.removeChild(elem)



	return task;
	console.log("task", task);
});

                 //      ========       конструктор нового контакта  =======
function Task(name, number, email, birthday) {  
	this.name = name;
	this.number = number;
	this.email = email;
	this.birthday = birthday;
	this.numbersArr = [10];
}                //      ========       конструктор нового контакта  =======


// метод добавления дополнительных номеров
//  получ кнопку addNum  которой буде добавл запасные номера
var addNum = document.getElementById('addNum');
// создаем массив
var arrey = new Array;

	addNum.addEventListener('click', function(e) {
		e.stopPropagation();
//document.getElementById("addNumbers").value = '';
var number = document.getElementById("addNumbers").value; 

var numbers = document.createElement('li');
numbers.classList.add('numbersItem');
numbers.innerHTML = '<label>next number: </label> ' + number;
document.getElementById('numbers').appendChild(numbers);
document.getElementById("addNumbers").value = '';

arrey.push(number)
return numbers;

	})                    // метод добавления дополнительных номеров
console.log(arrey)


//  =============         ==============            ===============

// метод конструктора - создание элем и добавл в ДОМ

Task.prototype.el = function() {


	var list = document.createElement("ul");
	list.classList.add("item");

    var items = document.createElement('span');
    items.innerText = 'Новый Контакт';

	var name = document.createElement("li");

	name.innerHTML = '<label>name: </label> ' + " &#160; &#160; " +  this.name;

	var number = document.createElement("li");
	number.innerHTML = '<label>number: </label> ' + this.number;

	var email = document.createElement("li");
	email.innerHTML = '<label>email: </label> ' + this.email;

	var birthday = document.createElement("li");
	birthday.innerHTML = '<label>birthday: </label> ' + this.birthday;

	// var numbers = document.createElement('ul');
	// numbers.id = 'next-phone';
    list.appendChild(items);
	list.appendChild(name);
	list.appendChild(number);
	list.appendChild(email);
	list.appendChild(birthday);


	for (let i = arrey.length; i--;) {
 	var nextNumber = document.createElement("li");
 	nextNumber.classList.add('nextNum')
 	nextNumber.innerHTML = '<label>next number: </label> ' + arrey[i];
 	list.appendChild(nextNumber);
}

	

return list;
};                   // метод конструктора - создание элем и добавл в ДОМ

