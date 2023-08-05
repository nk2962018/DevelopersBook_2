import { Constants, listOfBooks } from '../constants/Constants';
import '../styles/DevelopersBook.css';

const  DevelopersBook = () => {

  const displayListOfAllBooks = (books) => {
    return books.map(book => 
      <div className='book' data-testid='book'>
        <img src={book.imgUrl} alt={book.title}/>
        <p>{book.title}</p>
      </div>
    )
  }

  return (
    <>
      <div className='header' data-testid='header'>{Constants.HEADER}</div>
       {displayListOfAllBooks(listOfBooks)}
    </>
  );
}

export default DevelopersBook;
