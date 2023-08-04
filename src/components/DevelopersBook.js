import { Constants } from '../constants/Constants';
import '../styles/DevelopersBook.css';
import cleanCode from '../Images/cleanCode.jpg'

const  DevelopersBook = () => {
  return (
    <>
      <div className='header' data-testid='header'>{Constants.HEADER}</div>
      <div className='book' data-testid='book'>
        <img src={cleanCode} alt='clean code'/>
        <p>Clean Code</p>
      </div>

    </>
  );
}

export default DevelopersBook;
