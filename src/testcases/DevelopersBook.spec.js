import { render, screen } from '@testing-library/react';
import DevelopersBook from '../components/DevelopersBook';
import { TestConstants } from '../constants/TestConstants';

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

});
