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
  let bookx = new book(formData.get('title'),formData.get('title'),formData.get('pages'));
  bookshelf.push(bookx);
create(bookx)
alert(bookx.title);
});


function create(book){
  let div = document.createElement("div");
  let titlex = document.createElement("h3");
  let authorx = document.createElement("h3");
  let pagesx = document.createElement("h3");
  let read  = document.createElement("button");
  let remove = document.createElement("button");

titlex.innerText = book.title;
authorx.innerText = book.author;
pagesx.innerText = book.pages;
read.innerText = "Read";
remove.innerText = "Remove";
remove.id = book.title;
document.getElementById('main').appendChild(div);

div.appendChild(titlex);
div.appendChild(authorx);
div.appendChild(pagesx);
div.appendChild(read);
div.appendChild(remove);

}







function book(title,author,pages){

  this.title = title;
  this.author = author;
  this.pages = pages;
  

  this.saytitle= function(){
    return this.title;
  }
  }
