let bookshelf = [];
let unique = true;
const ui =   document.querySelector(".popup");
function popup(){
  ui.style.display = "flex"; 
}

function closex(){
  ui.style.display = "none"; 
  }

document.querySelector('form').addEventListener('submit', (e) => {
  const formData = new FormData(e.target);
  e.preventDefault() 
  //Checks if the title if it isnt alert user to set a new title 
for(booka of bookshelf){
  if(booka.title==formData.get('title')){
    alert("Please use a new Title:");
    unique = false;
  }
}

if(unique==true){
  ui.style.display = "none";
  ui.reset();
  let div = document.createElement("div");
  div.style.boxShadow = '1px 1px 10px darkgreen';
  let bookx = new book(formData.get('title'),formData.get('author'),formData.get('pages'),div);
  bookshelf.push(bookx);
create(bookx,div)
}
unique = true;
});

//Create function creates the actual html elements assocaited with the book menu UI 
function create(book,div){
  
  let titlex = document.createElement("h3");
  let authorx = document.createElement("h3");
  let pagesx = document.createElement("h3");
  let read  = document.createElement("button");
  let removea = document.createElement("button");
titlex.innerText = "'"+book.title+"'";
titlex.style.fontWeight = "bold";
authorx.innerText = book.author;
pagesx.innerText = book.pages+" pages";
read.innerText = "Read";
read.onclick ="finished()";
read.id = book.title;
read.style.backgroundColor = "darkgreen";
removea.innerText = "Remove";
removea.id = book.title;
removea.class = "removal";
document.getElementById('main').appendChild(div);
div.appendChild(titlex);
div.appendChild(authorx);
div.appendChild(pagesx);
div.appendChild(read);
div.appendChild(removea);
removex(removea,div);
finished (read);
}

//Remove functions adds an event listener as well as removing the book from the array + removing html elements when needed 
function removex(tar){
tar.addEventListener("mousedown",function(e){
  for(let i =0; i<bookshelf.length; i++){
    if(bookshelf[i].title==e.target.id){
   document.getElementById('main').removeChild(bookshelf[i].div);
   bookshelf.splice(i,1);
    }
  }
});
}

//Book function defines book 
function book(title,author,pages,div){
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.div = div;
  }


  function finished(read){
   read.addEventListener("mousedown",function(e){
    for(let i =0; i<bookshelf.length; i++){
      if(bookshelf[i].title==e.target.id){
        if(e.target.innerText=="Not Read"){
          bookshelf[i].div.style.boxShadow  = '1px 1px 10px green';
          e.target.innerText = "Read"
          e.target.style.backgroundColor="darkgreen";
        }else{
          bookshelf[i].div.style.boxShadow  = '1px 1px 10px darkred';
          e.target.innerText = "Not Read"
          e.target.style.backgroundColor ="darkred";
        }
      }
    }
   });
  }

