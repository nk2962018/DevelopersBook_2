import { getByTestId, render, screen } from '@testing-library/react';
import Cart from '../components/Cart';
import { mockCartHeader } from '../constants/TestConstants';

describe('Cart works fine when', () => {

    it('displays correct header text', () => {
        render(<Cart cartTestId='cart'/>)
        const cartHeader = screen.getByTestId('cart');
        expect(cartHeader).toHaveTextContent(mockCartHeader.CART_HEADER)  
    });

});