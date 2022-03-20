import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav className = "navbar">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/whiteboard">Whiteboard</Link>
          </li>
          <li>
            <Link to="/Calculator">Calculator</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;