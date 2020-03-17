// JS 6
// Book Constructor

function Book(title, author, isbn){
    this.title = title;
    this.author = author;
    this.isbn = isbn;
}


// UI Constructor
function UI() {

    UI.prototype.addBookToList = function(book){
        const list = document.querySelector('#book-list');
        // Create TR element
        const row = document.createElement('tr');
        // Insert collumn 
        row.innerHTML =  `
            <td>${book.title}</td>
            <td>${book.author}</td>
            <td>${book.isbn}</td>
            <td><a href='#' class='delete'>X<a></td>
            `;

        list.appendChild(row);
    }

    // Show the alert
    UI.prototype.showAlert = function(message, className){

        // Create div
        const div = document.createElement('div');
        // Add classes
        div.className = `alert ${className}`;
        // Add text
        div.appendChild(document.createTextNode(message));
        // Get Parent
        const container = document.querySelector('.container');
        const form = document.querySelector('#book-form');
        // Insert Alert
        container.insertBefore(div, form);

        // Timeout after 3 sec
        setTimeout(function(){
            document.querySelector('.alert').remove();
        }, 2000);

    }

    // Delete Book
    UI.prototype.deleteBook = function(target){
        if(target.className === 'delete' ) {
            target.parentElement.parentElement.remove();

        } else {


        }


    }


    // Clear fields
    UI.prototype.clearFields = function(){
        document.querySelector('#title').value = '';
        document.querySelector('#author').value = '';
        document.querySelector('#ISBN').value = '';

    }
}


// Event Listener for add book
document.querySelector("#book-form").addEventListener('submit', function(e){
    // Get the values from the form
    const title = document.querySelector('#title').value,
          author = document.querySelector('#author').value,
          isbn = document.querySelector('#ISBN').value;

    // Instantiate book from the field on the above
    const book = new Book(title, author, isbn);


    // Instantiate UI
    const ui = new UI();

    //Validate
    if(title === '' || author === '' || isbn === ''){

        ui.showAlert('Please fill in all fields', 'error');

    } else {
        
        // Add book to list
         ui.addBookToList(book)

         // Show success
         ui.showAlert('Book Added.', 'success');

         // Clear UI Fields
         ui.clearFields();

    }

    e.preventDefault();
});

// Event Listener for delete
document.getElementById('book-list').addEventListener('click', function(e){

    // Instantiate UI because all the prototype class has all the methods you needed.
    const ui = new UI();
    ui.deleteBook(e.target);

    // Show message
    ui.showAlert('Book removed', 'success');



    e.preventDefault();
})