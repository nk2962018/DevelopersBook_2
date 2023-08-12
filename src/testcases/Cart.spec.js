import { fireEvent, render, screen } from '@testing-library/react';
import Cart from '../components/Cart';
import { TestConstants, mockCartHeader, mockCartItems } from '../constants/TestConstants';

describe('carts works fine when' , () => {
    beforeEach(()  => {
        render(<Cart cartTestId='cart' cartItems={mockCartItems} decreaseQuantity={() =>{}} increaseQuantity={() =>{}}/>);
    })

    it('displays correct header text', () => {
        const cartHeader = screen.getByTestId('cart');
        expect(cartHeader).toHaveTextContent(mockCartHeader.CART_HEADER)  
    });

    const testBookDetails = (book, detailType) => {
       
        const detailElement = screen.getByTestId(`book${detailType}${book.id}`);
      
        if (detailType === 'Img') {
          const srcOfImage = detailElement.getAttribute('src');
          expect(srcOfImage).toBe(book.imgUrl);
        } 
        else if (detailType == 'Title'){
          const detailValue = detailElement.textContent;
          expect(detailValue).toBe(`Book Title : ${book[detailType.toLowerCase()]}`);
        }
        else if (detailType == 'Price'){
            const detailValue = detailElement.textContent;
            expect(detailValue).toBe(`Price : ${book[detailType.toLowerCase()]}`);
        }
    };

    it('displays correct details of books', () => {
        mockCartItems.forEach((book) => {
            testBookDetails(book, 'Img');
            testBookDetails(book, 'Title');
            testBookDetails(book, 'Price');          
        });
    });
    
    it('displays correct symbol of increment button', () => {
        mockCartItems.forEach((book) => {
            const increaseQuantityButton = screen.getByTestId(`incrementQuantity${book.id}`);
            expect(increaseQuantityButton.textContent).toBe(TestConstants.INCREMENT_QUANTITY_BUTTON_SYMBOL);            
        });
    }); 

    it('displays correct symbol of decrement button', () => {
        mockCartItems.forEach((book) => {
            const decrementQuantityButton = screen.getByTestId(`decrementQuantity${book.id}`);
            expect(decrementQuantityButton.textContent).toBe(TestConstants.DECREMENT_QUANTITY_BUTTON_SYMBOL);            
        });
    });
    
    it('displays correct quantity of item on clicking  decrement button', () => {
        mockCartItems.forEach((book) => {
            const decrementQuantityButton = screen.getByTestId(`decrementQuantity${book.id}`);
           // expect(decrementQuantityButton.textContent).toBe(TestConstants.DECREMENT_QUANTITY_BUTTON_SYMBOL); 
           fireEvent.click(decrementQuantityButton);
           const quantityOfEachItem = screen.getByTestId(`quantityOfEachItem${book.id}`);
          
           const quantity = quantityOfEachItem.textContent;
          
           expect(quantity).toBe("0")

        });
    }); 

    it('displays correct quantity of item on clicking  increment button', () => {
        mockCartItems.forEach((book) => {
            const incrementQuantityButton = screen.getByTestId(`incrementQuantity${book.id}`);
           // expect(decrementQuantityButton.textContent).toBe(TestConstants.DECREMENT_QUANTITY_BUTTON_SYMBOL); 
           fireEvent.click(incrementQuantityButton);
           const quantityOfEachItem = screen.getByTestId(`quantityOfEachItem${book.id}`);
           
           const quantity = quantityOfEachItem.textContent;
          
          expect(quantity).toBe("2")

        });
    });
});
    