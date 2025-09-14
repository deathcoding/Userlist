import { Button } from "antd";
import { useLocation, useNavigate } from "react-router";
import styles from "./styles.module.css";

export default function Navbar() {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  return (
    <nav className={styles.navbar}>
      <Button
        type={pathname === "/" ? "primary" : "default"}
        onClick={() => navigate("/")}
      >
        Home
      </Button>
      <Button
        type={pathname === "/favorites" ? "primary" : "default"}
        onClick={() => navigate("/favorites")}
      >
        Favorites
      </Button>
    </nav>
  );
}
