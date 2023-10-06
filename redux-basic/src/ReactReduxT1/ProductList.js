import { useSelector, useDispatch } from "react-redux";
import { ADD_CART, DELETE_CART } from "../store/cart";

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

  const dispatch = useDispatch();

  const cart = useSelector((state) => state);

  const addProduct = (value) => {
    dispatch({
      type: ADD_CART,
      name: value.name,
      price: value.price,
      id: value.id,
    });
    console.log(cart);
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
