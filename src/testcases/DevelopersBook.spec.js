import { fireEvent, render, screen } from '@testing-library/react';
import DevelopersBook from '../components/DevelopersBook';
import { TestConstants, listOfBooks, mockCartItems} from '../constants/TestConstants';
import Cart from '../components/Cart';

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

  it("display correct book count upon clicking add to cart button", () => {
    listOfBooks.forEach((book) => {
      const addToCart = screen.getByTestId(`addToCart${book.id}`);
      fireEvent.click(addToCart);
      const bookCount = screen.getByTestId(`quantityOfEachItem${book.id}`);
      expect(bookCount.textContent).toBe("1");
    });
  });

  it("displays correct quantity of item on clicking  increment button from development books for multiple items", () => {
    mockCartItems.forEach((item) => {
      const addToCart = screen.getByTestId(`addToCart${item.id}`);
      fireEvent.click(addToCart);
      const incrementQuantityButton = screen.getByTestId(
        `incrementQuantity${item.id}`
      );
      fireEvent.click(incrementQuantityButton);
      fireEvent.click(incrementQuantityButton);
      const quantityOfEachItem = screen.getByTestId(
        `quantityOfEachItem${item.id}`
      );
      const quantity = quantityOfEachItem.textContent;
      expect(quantity).toBe("3");
    });
  });

  it("displays correct quantity of item on clicking  decrement button in development books for multiple items", () => {
    mockCartItems.forEach((item) => {
      const addToCart = screen.getByTestId(`addToCart${item.id}`);
      fireEvent.click(addToCart);
      const decrementQuantityButton = screen.getByTestId(`decrementQuantity${item.id}`);
      fireEvent.click(decrementQuantityButton);
      const quantityOfEachItem = screen.getByTestId(`quantityOfEachItem${item.id}`);
      const quantity = quantityOfEachItem.textContent;
      expect(quantity).toBe("0");
    });
  });

});

describe('Cart works fine when', () => {

    beforeEach(()  => {
      render(<Cart cartTestId='cart' cartItems={listOfBooks}/>);
    })

    it('displays correct header text', () => {
        const cartHeader = screen.getByTestId('cart');
        expect(cartHeader).toHaveTextContent(TestConstants.CART_HEADER)  
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
      listOfBooks.forEach((book) => {
          testBookDetails(book, 'Img');
          testBookDetails(book, 'Title');
          testBookDetails(book, 'Price');
      });
    });  
  
});

