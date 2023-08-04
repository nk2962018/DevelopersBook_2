import { render, screen } from '@testing-library/react';
import DevelopersBook from '../components/DevelopersBook';
import { TestConstants } from '../constants/TestConstants';
import cleanCode from '../Images/cleanCode.jpg';

describe('Developers Book works fine when', () => {

  beforeEach(() => {
    render(<DevelopersBook/>)
  });

  it('displays header with proper text' , () => {
    const header = screen.getByTestId('header');
    expect(header.textContent).toBe(TestConstants.HEADER);
  });

  it('displays img with correct alt text ' , () => {
    const bookAlt = screen.getByRole('img');
    expect(bookAlt).toHaveAttribute('alt','clean code');
  });

  it('displays img with correct path ' , () => {
    const bookImg = screen.getByRole('img');
    expect(bookImg).toHaveAttribute('src',cleanCode);
  });

  it('displays img with correct name of book ' , () => {
    const bookName = screen.getByText('Clean Code');
    expect(bookName).toBeDefined();
  });
 
});
