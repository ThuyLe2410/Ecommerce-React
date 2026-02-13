import { Link } from 'react-router';
import './header.css';

export function Header({cart}) {
  console.log('cart', cart)
  let totalQuantity = 0;
  cart.forEach((cartItem) => {
    totalQuantity += cartItem.quantity
  })
  return (
    <>
      <div class="header">
        <div class="left-section">
          <Link to="/" class="header-link">
            <img class="logo" src="images/logo-white.png" />
            <img class="mobile-logo" src="images/mobile-logo-white.png" />
          </Link>
        </div>

        <div class="middle-section">
          <input class="search-bar" type="text" placeholder="Search" />

          <button class="search-button">
            <img class="search-icon" src="images/icons/search-icon.png" />
          </button>
        </div>

        <div class="right-section">
          <Link class="orders-link header-link" to="/orders">
            <span class="orders-text">Orders</span>
          </Link>

          <Link class="cart-link header-link" to="/checkout">
            <img class="cart-icon" src="images/icons/cart-icon.png" />
            <div class="cart-quantity">{totalQuantity}</div>
            <div class="cart-text">Cart</div>
          </Link>
        </div>
      </div>
    </>
  );
}
