import { useState } from "react";

import { useSelector } from "react-redux";
import { RootState } from "../store/store.ts";
import Cart from "./Cart.tsx";

export default function Header() {
  const [cartIsVisible, setCartIsVisible] = useState(false);
  const quantity = useSelector((state: RootState) =>
    state.cart.items.reduce((value, item) => value + item.quantity, 0)
  );
  function handleOpenCartClick() {
    setCartIsVisible(true);
  }

  function handleCloseCartClick() {
    setCartIsVisible(false);
  }
  // console.log(items);
  return (
    <>
      {cartIsVisible && <Cart onClose={handleCloseCartClick} />}
      <header id="main-header">
        <div id="main-title">
          <img src="logo.png" alt="Elegant model" />
          <h1>Elegant Redux</h1>
        </div>
        <p>
          <button onClick={handleOpenCartClick}>Cart ({quantity})</button>
        </p>
      </header>
    </>
  );
}
