let bookshelf = [];
const ui =   document.querySelector(".popup");
function popup(){
  ui.style.display = "flex"; 
}


document.querySelector('form').addEventListener('submit', (e) => {
  const formData = new FormData(e.target);
 

  let bookx = new book(formData.get('title'),formData.get('title'),formData.get('pages'));
  bookshelf.push(bookx);
create(bookx)
alert(bookx.title);
});


function create(book){






}







function book(title,author,pages){

  this.title = title;
  this.author = author;
  this.pages = pages;
  

  this.saytitle= function(){
    return this.title;
  }
  }
