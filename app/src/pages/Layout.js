import { Outlet, Link } from "react-router-dom";
import '.././App.css';


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
            <Link to="/calculator">Calculator</Link>
          </li>
          <li>
            <Link to="/schoolreviews"></Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;