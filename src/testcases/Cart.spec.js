import { getByTestId, render, screen } from '@testing-library/react';
import Cart from '../components/Cart';
import { mockCartHeader, mockCartItems } from '../constants/TestConstants';

describe('Cart works fine when', () => {

    it('displays correct header text', () => {
        render(<Cart cartTestId='cart'/>)
        const cartHeader = screen.getByTestId('cart');
        expect(cartHeader).toHaveTextContent(mockCartHeader.CART_HEADER)  
    });

    it('displays correct image of book added to cart', () => {
        render(<Cart cartTestId='cart' cartItems={mockCartItems}/>)
        mockCartItems.forEach(book =>{
            const bookImage = screen.getByTestId(`bookImg${book.id}`);
            const srcOfBook = bookImage.getAttribute('src');
            expect(srcOfBook).toBe(book.imgUrl)
        })
    });

    it('displays correct title of book added to cart', () => {
        render(<Cart cartTestId='cart' cartItems={mockCartItems}/>)
        mockCartItems.forEach(book =>{
            const bookTitle = screen.getByTestId(`bookTitle${book.id}`);
            const bookTitleText = bookTitle.textContent
            expect(bookTitleText).toBe(`Book Title : ${book.title}`)
        });
    });

});