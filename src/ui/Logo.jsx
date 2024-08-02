import { Link } from "react-router-dom";

function Logo() {
  return (
    <Link to="/">
      <img src="assets/dwky-logo.svg" alt="dwky logo" />
    </Link>
  );
}

export default Logo;
