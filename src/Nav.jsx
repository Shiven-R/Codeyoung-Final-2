import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className="navbar navbar-expand-sm bg-body-tertiary ">
      <div className="container-fluid">
        <a  style={{ color: "#ffa805" }} className="navbar-brand ea" href="#">
          YOGA STUDIO 
                 </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active " to="/About">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="/Counseling">
                Counceling
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="/Allyoga">
                Allyoga
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active " to="/FAQ">
                FAQ
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active " to="/Register">
                Reigster
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar