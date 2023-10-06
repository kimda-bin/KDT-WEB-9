import { useSelector, useDispatch } from "react-redux";
import { ADD_CART, DELETE_CART } from "../store/cart";

export default function CartItem({ value }) {
  const dispatch = useDispatch();
  //filter를 사용하여 새로운 배열 반환

  const removeCart = (id) => {
    dispatch({ type: DELETE_CART, id: id });
  };
  return (
    <div>
      <span>
        {value.name}:{value.price}원
      </span>
      <button onClick={() => removeCart(value.id)}>제거</button>
    </div>
  );
}
