import { render, screen } from '@testing-library/react';
import DevelopersBook from '../components/DevelopersBook';
import { TestConstants, listOfBooks} from '../constants/TestConstants';

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
