import { Constants } from '../constants/Constants';
import '../styles/Cart.css';

const Cart = ({cartTestId, cartItems, increaseQuantity}) => {
    
    return(
        <>
            <div className='cart' data-testid={cartTestId}>Your Cart</div>
            {
                cartItems?.map(item => (
                    <div key={item.id} className='cartItem'>
                        <img src={item.imgUrl} alt={item.title} data-testid={`bookImg${item.id}`}/>
                        <p  data-testid={`bookTitle${item.id}`}><span className='bookTitle'>Book Title : </span>{item.title}</p>
                        <p  data-testid={`bookPrice${item.id}`}><span className='bookPrice'>Price : </span>{item.price}</p>
                        <span 
                            className='quantityOfEachItem' 
                            data-testid={`quantityOfEachItem${item.id}`}>
                           {item.quantity}
                        </span>
                        <button 
                            data-testid={`incrementQuantity${item.id}`} 
                            className='incrementQunatity' 
                            onClick={() => increaseQuantity(item)}>
                                {Constants.INCREMENT_QUANTITY_BUTTON_SYMBOL}
                        </button> 
                    </div>
                ))
            }
        </>
    )
}

export default Cart;