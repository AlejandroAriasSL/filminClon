
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav style={styles.navbar}>
      <div style={styles.logo}><img style={styles.logoImg} src="./src/img/logo.png" alt="logo filmin" /></div>
      <ul style={styles.navLinks}>
        
        <li><Link to={"/cine"} style={styles.link}>Cine</Link></li>
        <li>< Link to={"/series"}  style={styles.link}>Series</Link></li>
      </ul>
    </nav>

  
  );
};

// Estilos en línea
const styles = {
  navbar: {
    position: "fixed", // Fija la navbar en la parte superior
    top: 0,
    left: 0,
    width: "100%", // Ocupa todo el ancho
    backgroundColor: "#060613", // Color de fondo
    color: "#fff", // Color del texto
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    padding: "10px 20px",
    zIndex: 1000, // Asegura que esté por encima de otros elementos
   
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
  },
};



 



export default Navbar;