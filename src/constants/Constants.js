import cleanCode from '../Images/cleanCode.jpg';
import cleanCoder from '../Images/cleanCoder.jpg';
import cleanArchitecture from '../Images/cleanArchitecture.jpg';
import tdd from '../Images/TDD.jpg';
import legacyCoder from '../Images/legacycode.jpg';

export const Constants = {
    HEADER : 'Developers Book',
    COUNT_OF_BOOKS_WITH_UNIQUE_TITLES : 5,
    ADD_TO_CART_BUTTON_TEXT : 'Add to Cart',
    BOOK_TITLE_CLEAN_CODE : 'Clean Code',
    BOOK_TITLE_CLEAN_CODER : 'The Clean coder',
    BOOK_TITLE_CLEAN_ARCHITECTURE : 'Clean Architecture',
    BOOK_TITLE_TDD : 'TDD by example',
    BOOK_TITLE_LEGACY_CODE : 'Working effectively with legacy Code',
    PRICE_OF_EACH_BOOK : '50 Euro',
    CART_HEADER : 'Your Cart',
    INCREMENT_QUANTITY_BUTTON_SYMBOL : '+'
};

export const listOfBooks = [
    {
        id:1, 
        title:`${Constants.BOOK_TITLE_CLEAN_CODE}`, 
        imgUrl:`${cleanCode}`, 
        price:`${Constants.PRICE_OF_EACH_BOOK}`
    },

    {
        id:2, 
        title:`${Constants.BOOK_TITLE_CLEAN_CODER}`, 
        imgUrl:`${cleanCoder}`, 
        price:`${Constants.PRICE_OF_EACH_BOOK}`
    }, 

    {
        id:3, 
        title:`${Constants.BOOK_TITLE_CLEAN_ARCHITECTURE}`, 
        imgUrl:`${cleanArchitecture}`, 
        price:`${Constants.PRICE_OF_EACH_BOOK}`
    }, 

    {
        id:4, 
        title:`${Constants.BOOK_TITLE_TDD}`, 
        imgUrl:`${tdd}`, 
        price:`${Constants.PRICE_OF_EACH_BOOK}`
    },

    {
        id:5, 
        title:`${Constants.BOOK_TITLE_LEGACY_CODE}`, 
        imgUrl:`${legacyCoder}`, 
        price:`${Constants.PRICE_OF_EACH_BOOK}`
    }
]