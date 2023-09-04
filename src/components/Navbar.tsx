import { Link } from 'react-router-dom';;

function NavBar() {
  return (
    <nav className="navbar bg-dark" style={{padding: 10}}>
        <span style={{ color: '#CCC', fontSize: '1.5em' }}>StarWars Shop</span>
        <div className="nav justify-content-end">
          <Link className="nav-link" style={{ color: '#FFF' }} to={"/"}>Início</Link>
          <Link className="nav-link" style={{ color: '#FFF' }} to={"/about"}>Sobre</Link>
        </div>
    </nav>
  );
}

export default NavBar