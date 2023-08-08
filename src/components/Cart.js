import '../styles/Cart.css';

const Cart = ({cartTestId}) => {
    return(
        <>
            <div className='cart' data-testid={cartTestId}>Your Cart</div>
        </>
    )
}

export default Cart;