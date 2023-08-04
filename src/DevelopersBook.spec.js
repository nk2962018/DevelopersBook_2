import { render, screen } from '@testing-library/react';
import DevelopersBook from './DevelopersBook';


describe('Developers Book works fine when', () => {

  it('displays header with proper text' , () => {
    render(<DevelopersBook />);
    const header = screen.getByTestId('header');
    expect(header.textContent).toBe('Developers Book');
  });
 
});
