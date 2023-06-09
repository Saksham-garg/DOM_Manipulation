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

// var listItems = document.querySelector('.list-items');
// console.log(listItems.parentElement)
// console.log(listItems.parentNode)


// ChildNodes

// console.log(listItems.childNodes)
// console.log(listItems.children)


// FirstChild
// console.log(listItems.firstChild)
// console.log(listItems.firstElementChild)


//lastChild
// console.log(listItems.lastChild)
// console.log(listItems.lastElementChild)


//nextSibling
// console.log(listItems.nextSibling)
// console.log(listItems.nextElementSibling)


//previousSibling
// console.log(listItems.previousSibling)
// console.log(listItems.previousElementSibling)


// Create Element
// var newDiv = document.createElement('div');
// newDiv.className = 'hello';
// newDiv.id = 'hello1';   
// newDiv.setAttribute('title','Hello Div');
// console.log(newDiv);


// Create Text Node

// var newDivText = document.createTextNode('Hello World');
// newDiv.appendChild(newDivText);
// console.log(newDiv);

// var container = document.querySelector('header .main-title');
// var h1 = document.querySelector('header h1');


// Inserting into DOM
// container.insertBefore(newDivText,h1);

//EVENTS

// document.getElementById('btn-id').addEventListener('click',buttonclick)

// function buttonclick(e){
//     console.log("Hello");
//     console.log(e.target);
//     console.log(e.clientX);
//     console.log(e.clientY);
//     console.log(e.offsetX);
//     console.log(e.offsetY);
//    console.log(e.altKey)
//    console.log(e.ctrlKey)
//    console.log(e.shiftKey)
// }

const inputField = document.querySelector("#add-list-input")
console.log(inputField.value)

const submitItem = document.querySelector("input[type='submit']")
submitItem.addEventListener('click',addItem)

const selectImage = document.querySelectorAll('.list-items-li button')

const searchInput = document.getElementById('search-input')
searchInput.addEventListener('keyup',searchItems)

for(let i=0;i<selectImage.length;i++){
    selectImage[i].addEventListener('click',deleteItem)
}

function addItem(e){
    e.preventDefault();
    if(inputField.value != ''){
        const newListItem = document.createElement('li')
        newListItem.className = 'list-items-li'
        const newListItemText = document.createTextNode(inputField.value)
        newListItem.appendChild(newListItemText);
        const createButton = document.createElement('button')
        const imageTag = document.createElement('img')
        imageTag.setAttribute('src','./close.png')
        createButton.appendChild(imageTag)
        const listItems = document.getElementById('list')
        listItems.appendChild(newListItem)
        newListItem.appendChild(createButton)
        inputField.value = ''
        }
    else{
            alert("Please enter some text to add to  list");
        }
}

function deleteItem(e){
    e.target.parentNode.parentNode.remove()
}

function searchItems(e){
    const listItem = document.getElementsByClassName('list-items-li')
    console.log(listItem)
    const text = e.target.value.toLowerCase();

    Array.from(listItem).forEach(function(item){
        if(item.textContent.toLowerCase().indexOf(text) != -1){
            item.style.display = 'block'
        }else{
            item.style.display = 'none';
        }
    })
}