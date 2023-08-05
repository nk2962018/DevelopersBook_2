import cleanCode from '../Images/cleanCode.jpg';
import cleanCoder from '../Images/cleanCoder.jpg';
import cleanArchitecture from '../Images/cleanArchitecture.jpg';
import tdd from '../Images/TDD.jpg';
import legacyCoder from '../Images/legacycode.jpg';

export const Constants = {
    HEADER : 'Developers Book',
    COUNT_OF_BOOKS_WITH_UNIQUE_TITLES : 5
};

export const listOfBooks = [
    {id:1, title:"Clean code", imgUrl:`${cleanCode}`}, 
    {id:2, title:"The Clean coder", imgUrl:`${cleanCoder}`}, 
    {id:3, title:"Clean Architecture", imgUrl:`${cleanArchitecture}`}, 
    {id:4, title:"TDD by example", imgUrl:`${tdd}`}, 
    {id:5, title:"Working effectively with legacy Code", imgUrl:`${legacyCoder}`}
]