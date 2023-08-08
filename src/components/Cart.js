import '../styles/Cart.css';

const Cart = ({cartTestId, cartItems}) => {
    return(
        <>
            <div className='cart' data-testid={cartTestId}>Your Cart</div>
            {
                cartItems?.map(item => (
                    <div key={item.id} className='cartItem'>
                        <img src={item.imgUrl} alt={item.title} data-testid={`bookImg${item.id}`}/>
                        <p  data-testid={`bookTitle${item.id}`}><span className='bookTitle'>Book Title : </span>{item.title}</p>
                        <p  data-testid={`bookPrice${item.id}`}><span className='bookPrice'>Price : </span>{item.price}</p>
                    </div>
                ))
            }

        </>
    )
}

export default Cart;