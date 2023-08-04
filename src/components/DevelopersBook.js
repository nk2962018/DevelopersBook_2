import { Constants } from '../constants/Constants';
import '../styles/DevelopersBook.css';

const  DevelopersBook = () => {
  return (
      <div className='header' data-testid='header'>{Constants.HEADER}</div>
  );
}

export default DevelopersBook;
