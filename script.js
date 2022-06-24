let bookshelf = [];
const ui =   document.querySelector(".popup");
function popup(){
  ui.style.display = "flex"; 
}


document.querySelector('form').addEventListener('submit', (e) => {
  const formData = new FormData(e.target);
  e.preventDefault() 
  ui.style.display = "none";
  ui.reset();
  let div = document.createElement("div");
  let bookx = new book(formData.get('title'),formData.get('title'),formData.get('pages'),div);
  bookshelf.push(bookx);
create(bookx,div)
});


function create(book,div){
  
  let titlex = document.createElement("h3");
  let authorx = document.createElement("h3");
  let pagesx = document.createElement("h3");
  let read  = document.createElement("button");
  let removea = document.createElement("button");
titlex.innerText = book.title;
authorx.innerText = book.author;
pagesx.innerText = book.pages;
div.class = book.title;
read.innerText = "Read";
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
}


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

function book(title,author,pages,div){
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.div = div;
  }
