import { render, screen } from '@testing-library/react';
import DevelopersBook from '../components/DevelopersBook';
import { TestConstants, listOfBooks} from '../constants/TestConstants';
import Cart from '../components/Cart';
import { Constants } from '../constants/Constants';

describe('Developers Book works fine when', () => {
    let books;
    beforeEach(() => {
      render(<DevelopersBook/>);
      books = screen.getAllByTestId('book');
  });

  it('displays header with proper text' , () => {
    const header = screen.getByTestId('header');
    expect(header.textContent).toBe(TestConstants.HEADER);
  });

  it('displays the count of books matches the number of books', () => {
    expect(books).toHaveLength(TestConstants.COUNT_OF_BOOKS_WITH_UNIQUE_TITLES);
  });

  it('displays correct image of book', () => {
    books.forEach((book,index) => {
      const bookElementImg = books[index];
      const bookImg = bookElementImg.querySelector('img');
      expect(bookImg).toHaveAttribute('src',book.imgUrl);
    });
  });

  it('displays correct name  of button', () => {
    books.forEach((book,index) => {
      const addToCartButton = books[index].querySelector('.addToCart');
      expect(addToCartButton.textContent).toBe(TestConstants.ADD_TO_CART_BUTTON_TEXT);
    });
  });

  it('display correct name of each book', () => {
    listOfBooks.forEach((book) => {
      const bookTitle = screen.getByTestId(`bookTitle${book.id}`);
      const bookTitleValue = bookTitle.textContent;
      expect(bookTitleValue).toBe(book.title);
    });
  });

  it('display correct price of each book', () => {
    listOfBooks.forEach((book) => {
      const bookPrice = screen.getByTestId(`bookPrice${book.id}`);
      const bookPriceValue = bookPrice.textContent;
      expect(bookPriceValue).toBe(book.price);
    });
  });

  it('display correct image alt name of each book', () => {
    listOfBooks.forEach((book) => {
      const bookImage = screen.getByTestId(`bookImg${book.id}`);
      const alt = bookImage.getAttribute('alt');
      expect(alt).toBe(book.title);
    });
  });

});

describe('Cart works fine when', () => {
  
  it('displays correct cart header', () => {
    render(<Cart cartTestId='cart'/>)
    const cartHeader = screen.getByTestId('cart');
    expect(cartHeader.textContent).toBe(Constants.CART_HEADER);
  });
   
  it('displays correct image of book', () => {
    render(<Cart cartTestId='cart' cartItems={listOfBooks}/>)
    listOfBooks.forEach((book) => {
      const bookImage = screen.getByTestId(`bookImg${book.id}`);
      const srcOfBook = bookImage.getAttribute('src');
      expect(srcOfBook).toBe(book.imgUrl);
    });
  });

  it('displays correct title of book added to cart', () => {
    render(<Cart cartTestId='cart' cartItems={listOfBooks}/>)
    listOfBooks.forEach(book =>{
        const bookTitle = screen.getByTestId(`bookTitle${book.id}`);
        const bookTitleText = bookTitle.textContent
        expect(bookTitleText).toBe(`Book Title : ${book.title}`)
    });
  });
  
});

