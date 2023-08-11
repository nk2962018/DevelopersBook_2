import { useState } from 'react';
import { Constants, listOfBooks } from '../constants/Constants';
import '../styles/DevelopersBook.css';
import Cart from './Cart';

const  DevelopersBook = () => {

  const [cartItems, setCartItems] = useState([]);

  const addBookToCart = (book) => {
    const existingCartItem = cartItems.find(item => item.id === book.id);

    if (existingCartItem) {
      const updatedCartItems = cartItems.map(item => {
        if (item.id === book.id) {
          return { ...item, quantity: item.quantity + 1 };
        }
        return item;
      });
      setCartItems(updatedCartItems);
    } else {
      setCartItems([...cartItems, { ...book, quantity: 1 }]);
    }
  };

  const increaseQuantity = (item) => {
    const updatedCartItems = cartItems.map(cartItem => {
      if (cartItem.id === item.id) {
        return { ...cartItem, quantity: cartItem.quantity + 1 };
      }
      return cartItem;
    });
    setCartItems(updatedCartItems);
  };

  const decreaseQuantity = (item) => {
      const updatedCartItems = cartItems.map(cartItem => {
        if (cartItem.id === item.id) {
          return { ...cartItem, quantity: cartItem.quantity - 1 };
        }
        return cartItem;
      });
      setCartItems(updatedCartItems);
  };

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
       <Cart cartTestId='cart' cartItems={cartItems} increaseQuantity={increaseQuantity} decreaseQuantity={decreaseQuantity}/>
    </>
    );
}

export default DevelopersBook;