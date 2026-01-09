import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
  const cart = useSelector(state => state.cart.items);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const count = cart.reduce((s, i) => s + i.qty, 0);

  return (
    <div style={{ display: "flex", gap: 20, padding: 10 }}>
      <Link to="/home">Home</Link>
      <Link to="/checkout">Cart ({count})</Link>
    </div>
  );
}
