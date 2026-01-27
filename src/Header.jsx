import { Link, Outlet } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <h1>My Page</h1>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/products">Products</Link>
        </li>
      </ul>
      <Outlet />
    </header>
  );
}
