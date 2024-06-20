const menu= document.querySelector('#mobile-menu')
const MenuLinks = document.querySelector('.navbar__menu')
menu.addEventListener('click', function (){
    menu.classList.toggle('is-active')
    MenuLinks.classList.toggle('active')
});
fetch("/books.json")
.then(function(response){
   return response.json();
})
.then(function(books){
   let placeholder = document.querySelector("#data-output");
   let out = "";
   for(let book of books){
      out += `
         <tr>
                    <td><a href="DataForBooks.html?id=${book.id}">${book.title}</a></td>
                    <td>${book.author}</td> 
                    <td>${book.return_date ? "Available on " + book.return_date : "Available"}</td> 
         </tr>
      `;
   }
 
   placeholder.innerHTML = out;
});

function darkMode() {
    var activation = document.body;
    activation.classList.toggle("dark-mode");
}