import { Link } from "react-router-dom";
import logo from "../../../assets/logo.png";
import { Height } from "@mui/icons-material";
const Header = () => {
  return (
    <nav style={styles.navbar}>
      <div style={styles.logo}>
        <Link to="/">
          <img style={styles.logoImg} src={logo} alt="logo filmin" />
        </Link>
      </div>
      <ul style={styles.navLinks}>
        <li>
          <Link to="films" style={styles.link}>
            Cine
          </Link>
        </li>
        <li>
          <Link to="series" style={styles.link}>
            Series
          </Link>
        </li>
      </ul>
    </nav>
  );
};

const styles = {
  navbar: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "5%",
    backgroundColor: "#060613",
    color: "#fff",
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    padding: "10px 20px",
    zIndex: 1000,
  },
  logo: {
    width: "13%",
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  logoImg: {
    width: "50%",
  },
  navLinks: {
    listStyle: "none",
    display: "flex",
    gap: "20px",
  },
  link: {
    color: "#fff",
    textDecoration: "none",
    fontSize: "1rem",
    marginLeft: "20px",
  },
};

export default Header;
