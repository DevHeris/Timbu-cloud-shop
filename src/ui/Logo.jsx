import { Link } from 'react-router-dom';

function Logo({ type = 'dark' }) {
  return (
    <Link to="/">
      <img src={`assets/dwky-logo-${type}.svg`} alt="dwky logo" />
    </Link>
  );
}

export default Logo;
