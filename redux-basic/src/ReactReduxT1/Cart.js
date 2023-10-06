import { useSelector, useDispatch } from "react-redux";
import CartItem from "./CartItem";

export default function Cart() {
  const cart = useSelector((state) => state);
  console.log(cart);

  //reduce: 배열의 모든 요소를 더할때 사용. 하나의 결과를 반환
  const totalPrice = cart.reduce((acc, curr) => acc + curr.price, 0);

  return (
    <div>
      <h2>장바구니</h2>
      {cart.map((value) => {
        return <CartItem key={value.id} value={value} />;
      })}
      총액: {totalPrice}원
    </div>
  );
}
