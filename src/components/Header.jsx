/* eslint-disable no-unused-vars */
import { useState } from "react";
import { FaBasketShopping } from "react-icons/fa6";
import Order from "./Order";

const showOrders = (props) => {
  return (
    <>
      {props.orders.map((el) => (
        <Order key={el.id} item={el} />
      ))}
    </>
  );
};

const showNothing = () => {
  return (
    <div className="empty-cart">
      <h2>Товаров нет</h2>
    </div>
  );
};

export default function Header(props) {
  let [cartOpen, setCartOpen] = useState(false);
  return (
    <header>
      <div>
        <span className="logo">Engine Shop</span>
        <ul className="nav">
          <li>Про нас</li>
          <li>Контакты</li>
          <li>Кабинет</li>

          <FaBasketShopping
            className={`shop-cart__button ${cartOpen && "active"}`}
            onClick={() => setCartOpen((prev) => !prev)}
          />

          {cartOpen && (
            <div className="shop-cart">
              {props.orders.length > 0 ? showOrders(props) : showNothing()}
            </div>
          )}
        </ul>
      </div>
      <div className="presentation"></div>
    </header>
  );
}
