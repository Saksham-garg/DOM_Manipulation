// GETELEMENTBYID

// var title = document.getElementById('main-title-id');
// title.textContent = "GoodBye"
// title.innerText = "Saksham"
// title.innerHTML = '<h1>Hello World</h1>';
// console.log("getElementById : ",title);
// console.log(title.textContent);
// console.log(title.innerText);


// GETELEMENTSBYCLASSNAME

// var firstli = document.getElementsByClassName('list-items-li');
// console.log("getElementsByClassName : ",firstli);



// GETELEMENTSBYTAGNAME
// var inputs = document.getElementsByTagName('input');
// console.log("getElementsByTagName : ",inputs);
// inputs[0].value = "Add new Items to bucket list"
// inputs[1].value = 'Append it'


//QUERYSELECTOR
// var li = document.querySelector('li');
// console.log("querySelector : ",li);
// li.style.color = 'red';


//QUERYSELECTORALL

// var odd = document.querySelectorAll('li:nth-child(odd)');
// console.log("querySelectorAll : ",odd);
// for(let i=0;i<odd.length;i++){
//     odd[i].style.backgroundColor = 'yellow';
// }
// var even = document.querySelectorAll('li:nth-child(even')
// for(let i=0;i<even.length;i++){
//     even[i].style.backgroundColor = 'green';
// }

// TRAVERSE THE DOM

var listItems = document.querySelector('.list-items');
console.log(listItems.parentElement)
console.log(listItems.parentNode)

// ChildNodes

console.log(listItems.childNodes)
console.log(listItems.children)

// FirstChild
console.log(listItems.firstChild)
console.log(listItems.firstElementChild)

//lastChild
console.log(listItems.lastChild)
console.log(listItems.lastElementChild)

//nextSibling
console.log(listItems.nextSibling)
console.log(listItems.nextElementSibling)

//previousSibling
console.log(listItems.previousSibling)
console.log(listItems.previousElementSibling)

// Create Element
var newDiv = document.createElement('div');
newDiv.className = 'hello';
newDiv.id = 'hello1';   
newDiv.setAttribute('title','Hello Div');
console.log(newDiv);

// Create Text Node
var newDivText = document.createTextNode('Hello World');
newDiv.appendChild(newDivText);
console.log(newDiv);

var container = document.querySelector('header .main-title');
var h1 = document.querySelector('header h1');

// Inserting into DOM
container.insertBefore(newDivText,h1);