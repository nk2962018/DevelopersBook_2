import { Constants } from '../constants/Constants';
import '../styles/DevelopersBook.css';
import cleanCode from '../Images/cleanCode.jpg';
import cleanCoder from '../Images/cleanCoder.jpg';
import cleanArchitecture from '../Images/cleanArchitecture.jpg';
import tdd from '../Images/TDD.jpg';
import legacyCoder from '../Images/legacycode.jpg';

const  DevelopersBook = () => {

  const listOfBooks = [
    {id:1, title:"Clean code", imgUrl:`${cleanCode}`}, 
    {id:2, title:"The Clean coder", imgUrl:`${cleanCoder}`}, 
    {id:3, title:"Clean Architecture", imgUrl:`${cleanArchitecture}`}, 
    {id:4, title:"TDD by example", imgUrl:`${tdd}`}, 
    {id:5, title:"Working effectively with legacy Code", imgUrl:`${legacyCoder}`}
  ]

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
