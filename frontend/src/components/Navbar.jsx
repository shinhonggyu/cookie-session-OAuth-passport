import { Link } from "react-router-dom";

const Navbar = ({ user }) => {
  return (
    <div className="Navbar">
      <span className="logo">
        <Link className="link" to="/">
          OAuth App
        </Link>
      </span>
      {user ? (
        <ul className="list">
          <li className="listItem">
            <img
              src="https://cdn.pixabay.com/photo/2021/08/31/11/59/androgynous-6588615_960_720.jpg"
              alt="img"
              className="avatar"
            />
          </li>
          <li className="listItem">John Doe</li>
          <li className="listItem">Logout</li>
        </ul>
      ) : (
        <Link className="link" to="/login">
          Login
        </Link>
      )}
    </div>
  );
};

export default Navbar;
