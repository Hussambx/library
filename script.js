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
  div.style.boxShadow = '1px 1px 10px red';
  let bookx = new book(formData.get('title'),formData.get('title'),formData.get('pages'),div);
  bookshelf.push(bookx);
create(bookx,div)
});

//Create function creates the actual html elements assocaited with the book menu UI 
function create(book,div){
  
  let titlex = document.createElement("h3");
  let authorx = document.createElement("h3");
  let pagesx = document.createElement("h3");
  let read  = document.createElement("button");
  let removea = document.createElement("button");
titlex.innerText = book.title;
authorx.innerText = book.author;
pagesx.innerText = book.pages;
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
