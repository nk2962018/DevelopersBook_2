import { Constants, listOfBooks } from '../constants/Constants';
import '../styles/DevelopersBook.css';
import Cart from './Cart';

const  DevelopersBook = () => {

  const displayListOfAllBooks = (books) => {
    return books.map(book => 
      <div className='book' data-testid='book'>
        <img src={book.imgUrl} alt={book.title} data-testid={`bookImg${book.id}`}/>
        <p data-testid={`bookTitle${book.id}`}>{book.title}</p>
        <p data-testid={`bookPrice${book.id}`}>{book.price}</p>
        <button className='addToCart'>{Constants.ADD_TO_CART_BUTTON_TEXT}</button>
      </div>
    )
  }

  return (
    <>
      <div className='header' data-testid='header'>{Constants.HEADER}</div>
       {displayListOfAllBooks(listOfBooks)}
       <Cart cartTestId='cart'/>
    </>
  );
}

export default DevelopersBook;
