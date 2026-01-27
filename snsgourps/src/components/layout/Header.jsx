import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="header">
      <nav className="navbar">
        <div className="container">
          <Link to="/" className="logo">
            <img src="/sns.png" alt="SNS Groups" />
          </Link>
          <ul className="nav-menu">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
