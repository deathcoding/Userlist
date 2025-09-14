import { useState } from "react";
import UserList from "../../components/UserList/UserList";
import useFavorites from "../../hooks/useFavorites";
import styles from "./styles.module.css";
import { Button, Input } from "antd";
import UserForm from "../../components/UserForm/UserForm";

export default function Favorites() {
  const { favorites, createFavoriteUser } = useFavorites();
  const [searchTerm, setSearchTerm] = useState("");
  const [isUserFormOpen, setUserFormOpen] = useState(false);

  const filteredUsers = favorites.filter((favUser) =>
    favUser.name.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <div>
      <header className={styles.header}>
        <Input
          placeholder="Type user name"
          size="large"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className={styles.input}
        />
        <Button onClick={() => setUserFormOpen(true)}>Create user</Button>

        {isUserFormOpen && (
          <UserForm
            isOpen={isUserFormOpen}
            onClose={setUserFormOpen}
            createUser={createFavoriteUser}
          />
        )}
      </header>
      {!favorites.length && (
        <p className={styles.text}>
          you have not added any favorite users yet :(
        </p>
      )}
      <UserList users={filteredUsers} />
    </div>
  );
}
