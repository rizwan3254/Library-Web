const urlP = new URLSearchParams(window.location.search);
const Title = urlP.get('id');

fetch("/books.json")
    .then(response => response.json())
    .then(books => {
        const book = books.find(b => b.id === Title);
        if (book) {
            const bookDesc = `
                <h1>${book.title}</h1>
                <img src="${book.image_url}" alt="${book.title} cover" />
                <p><strong>Author:</strong> ${book.author}</p>
                <p><strong>Published Date:</strong> ${book.published_date}</p>
                <p><strong>Availability:</strong> ${book.return_date ? "Available on " + book.return_date : "Available"}</p>
                <p><strong>Categories:</strong> ${book.categories.join(', ')}</p>
                <p><strong>Description:</strong> ${book.blurb}</p>
                <p><strong>Loaned by:</strong> ${book.loaned_by_id}</p>
            `;
            document.getElementById('book-details').innerHTML = bookDesc;
        } else {
            document.getElementById('book-details').innerHTML = '<p>Book not found.</p>';
        }
    });
