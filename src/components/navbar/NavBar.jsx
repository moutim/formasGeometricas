import './navbar.css';

function NavBar() {
  return (
    <header>
      <div>
        <h1>
          <span>Geometric </span>
          <span>Measure</span>
        </h1>
      </div>

      <nav>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/forms">Forms</a></li>
          <li><a href="/aboutUs">About us</a></li>
        </ul>
      </nav>
    </header>
  )
}

export default NavBar;