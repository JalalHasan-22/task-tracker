import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer>
      <p>&copy; All rights reserved</p>
      <Link to='/about'>About us</Link>
    </footer>
  );
}

export default Footer;
