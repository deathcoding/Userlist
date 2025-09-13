import { useState } from "react";
import UserList from "../../components/UserList/UserList";
import useFavorites from "../../hooks/useFavorites";
import styles from "./styles.module.css";
import { Input } from "antd";

export default function Favorites() {
  const { favorites } = useFavorites();

  const [searchTerm, setSearchTerm] = useState("");

  if (!favorites.length) {
    return (
      <p className={styles.text}>You have not added any favorite users yet.</p>
    );
  }

  const filteredUsers = favorites.filter((favUser) =>
    favUser.name.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <div>
      <Input
        placeholder="Type user name"
        size="large"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className={styles.input}
      />
      <UserList users={filteredUsers} />
    </div>
  );
}
