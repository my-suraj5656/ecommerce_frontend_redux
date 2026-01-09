import { useSelector } from "react-redux";

export default function Checkout() {
  const cart = useSelector(s => s.cart.items);
  const total = cart.reduce((s, i) => s + i.price * i.qty, 0);

  return (
    <div>
      {cart.map(i => (
        <p key={i.id}>{i.title} x {i.qty}</p>
      ))}
      <h3>Total: ${total}</h3>
    </div>
  );
}
