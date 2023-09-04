import { useNavigate } from 'react-router-dom';

function NavBar() {

  const navigate = useNavigate()

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <h3>StarWars Shop</h3>
          <a className="nav-link active" onClick={() => {navigate("/")}}>Início</a>
          <a className="nav-link active" onClick={() => {navigate("/about")}}>Sobre</a>
      </nav>
    </div>
  );
}

export default NavBar