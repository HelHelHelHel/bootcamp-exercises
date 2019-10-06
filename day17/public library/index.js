
document.addEventListener('DOMContentLoaded', () => {
    const bookList = document.querySelector('#bookList');
    const book1 = new Book('Babicka', 'B.Nemcova', 150, 1867, 4, 15);
    book1.mount(bookList);
    const book2 = new Book ('3 Musketeers', "A. Dumas", 450, 1754, 9, 12);
    book2.mount(bookList);
    const book3 = new Book('Into the Wild', 'J. Krakauer', 237, 2003, 2, 5);
    book3.mount(bookList);


  // adding books from the website

  const addBook = document.querySelector('#addBook');
  addBook.addEventListener ('click', () => {
    const titleB = document.querySelector('#title').value;
    const authorB = document.querySelector('#author').value;
    const numberOfPagesB = document.querySelector('#numberOfPages').value;
    const yearPublishB = document.querySelector('#yearPublish').value;
    const availableBooksB = document.querySelector('#availableBooks').value;
    const maxBooksB = document.querySelector('#maxBooks').value;
    const book4 = new Book(
      titleB, authorB, numberOfPagesB, yearPublishB, availableBooksB, maxBooksB
    );  
    book4.mount(bookList);
  });
    

}); 