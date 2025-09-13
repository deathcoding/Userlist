import { Button } from "antd";
import { Outlet, useLocation, useNavigate } from "react-router";
import styles from "./styles.module.css";

export default function Layout() {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  return (
    <>
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
      <Outlet />
    </>
  );
}
