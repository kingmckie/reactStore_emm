import StoreContext from "./storeContext";
import { useState } from "react";

function GlobalState(props) {
  const [cart, setCart] = useState([]);
  const [user, setUser] = useState({ id: 666, name: "Fiya" });

  function addProductToCart(pushIt) {

    let copy = [...cart];
    copy.push(pushIt);
    setCart (copy);
  }

  function removeProductFromCart() {
    console.log("global remove");
  }
  return (
    <StoreContext.Provider
      value={{
        cart: cart,
        user: user,
        addProductToCart: addProductToCart,
        removeProductToCart: removeProductFromCart,
      }}
    >
      {props.children}
    </StoreContext.Provider>
  );
}
export default GlobalState;
