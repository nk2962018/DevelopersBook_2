import { useState } from 'react';
import { Constants, listOfBooks } from '../constants/Constants';
import '../styles/DevelopersBook.css';
import Cart from './Cart';

const  DevelopersBook = () => {

  const [cartItems, setCartItems] = useState([]);

  const addBookToCart = (book) => {
    setCartItems([...cartItems,book])
  }

  const displayListOfAllBooks = (books) => {
    return books.map(book => 
      <div className='book' data-testid='book'>
        <img src={book.imgUrl} alt={book.title} data-testid={`bookImg${book.id}`}/>
        <p data-testid={`bookTitle${book.id}`}>{book.title}</p>
        <p data-testid={`bookPrice${book.id}`}>{book.price}</p>
        <button className='addToCart' data-testid={`addToCart${book.id}`} onClick={() => addBookToCart(book)}>
          {Constants.ADD_TO_CART_BUTTON_TEXT}
        </button>
      </div>
    )
  }

  return (
    <>
      <div className='header' data-testid='header'>{Constants.HEADER}</div>
       {displayListOfAllBooks(listOfBooks)}
       <Cart cartTestId='cart' cartItems={cartItems}/>
    </>
  );
}

export default DevelopersBook;
