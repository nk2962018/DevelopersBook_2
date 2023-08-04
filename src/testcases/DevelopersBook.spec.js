import { render, screen } from '@testing-library/react';
import DevelopersBook from '../components/DevelopersBook';
import { TestConstants } from '../constants/TestConstants';

describe('Developers Book works fine when', () => {

  it('displays header with proper text' , () => {
    render(<DevelopersBook />);
    const header = screen.getByTestId('header');
    expect(header.textContent).toBe(TestConstants.HEADER);
  });
 
});
