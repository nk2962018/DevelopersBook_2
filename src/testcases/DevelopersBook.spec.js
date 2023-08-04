import { render, screen } from '@testing-library/react';
import DevelopersBook from '../components/DevelopersBook';
import { TestConstants } from '../constants/TestConstants';
import cleanCode from '../Images/cleanCode.jpg';

describe('Developers Book works fine when', () => {

  it('displays header with proper text' , () => {
    render(<DevelopersBook />);
    const header = screen.getByTestId('header');
    expect(header.textContent).toBe(TestConstants.HEADER);
  });

  it('displays img with correct alt text ' , () => {
    render(<DevelopersBook />);
    const bookAlt = screen.getByRole('img');
    expect(bookAlt).toHaveAttribute('alt','clean code');
  });

  it('displays img with correct path ' , () => {
    render(<DevelopersBook />);
    const bookImg = screen.getByRole('img');
    expect(bookImg).toHaveAttribute('src',cleanCode);
  });

  it('displays img with correct name of book ' , () => {
    render(<DevelopersBook />);
    const bookName = screen.getByText('Clean Code');
    expect(bookName).toBeDefined();
  });
 
});
