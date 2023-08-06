import { render, screen } from '@testing-library/react';
import DevelopersBook from '../components/DevelopersBook';
import { TestConstants, listOfBooks} from '../constants/TestConstants';

describe('Developers Book works fine when', () => {

  beforeEach(() => {
    render(<DevelopersBook/>)
  });

  it('displays header with proper text' , () => {
    const header = screen.getByTestId('header');
    expect(header.textContent).toBe(TestConstants.HEADER);
  });

  it('displays the count of books matches the number of books', () => {
    const books = screen.getAllByTestId('book');
    expect(books).toHaveLength(TestConstants.COUNT_OF_BOOKS_WITH_UNIQUE_TITLES);
  });

  it('displays correct image of book', () => {
    const books = screen.getAllByTestId('book');
    books.forEach((book,index) => {
      const bookElementImg = books[index];
      const bookImg = bookElementImg.querySelector('img');
      expect(bookImg).toHaveAttribute('src',book.imgUrl);
    });
  });

  it('displays correct name  of button', () => {
    const books = screen.getAllByTestId('book');
    books.forEach((book,index) => {
      const addToCartButton = books[index].querySelector('.addToCart');
      expect(addToCartButton.textContent).toBe(TestConstants.ADD_TO_CART_BUTTON_TEXT);
    });
  });

  it("display correct name of each book", () => {
    listOfBooks.forEach((book) => {
      const bookTitle = screen.getByTestId(`bookTitle${book.id}`);
      const bookTitleValue = bookTitle.textContent;
      expect(bookTitleValue).toBe(book.title);
    });
  });

  it("display correct price of each book", () => {
    listOfBooks.forEach((book) => {
      const bookPrice = screen.getByTestId(`bookPrice${book.id}`);
      const bookPriceValue = bookPrice.textContent;
      expect(bookPriceValue).toBe(book.price);
    });
  });

});
