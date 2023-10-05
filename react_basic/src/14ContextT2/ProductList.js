import { useContext } from "react";
import CartContext from "./store/cart-context";

export default function ProductList() {
  const products = [
    {
      id: 1,
      name: "A",
      price: 1000,
    },
    {
      id: 2,
      name: "B",
      price: 2000,
    },
    {
      id: 3,
      name: "C",
      price: 3000,
    },
  ];

  const { cart, setCart } = useContext(CartContext);

  const addProduct = (product) => {
    setCart([...cart, product]);
  };

  return (
    <div>
      <h2>상품 리스트</h2>
      {products.map((value) => {
        return (
          <div key={value.id}>
            <span>
              {value.name} : {value.price}원
            </span>
            <button onClick={() => addProduct(value)}>장바구니 추가</button>
          </div>
        );
      })}
    </div>
  );
}
