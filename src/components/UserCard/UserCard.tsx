import { Button, Card, Flex } from "antd";
import type { IUser } from "../../types";
import styles from "./styles.module.css";
import useFavorites from "../../hooks/useFavorites";
import { useLocation } from "react-router";
import { useState } from "react";
import UserForm from "../UserForm/UserForm";
interface IUserCard {
  userInfo: IUser;
}

export default function UserCard({ userInfo }: IUserCard) {
  const { favorites, toggleFavorite, editFavoriteUser } = useFavorites();
  const { pathname } = useLocation();
  const [isEditing, setIsEditing] = useState(false);

  const isFavorite = favorites.some((favUser) => favUser.id === userInfo.id);

  return (
    <Card
      variant="outlined"
      title={userInfo.name}
      className={styles.card}
      hoverable
    >
      <p>{userInfo.email}</p>
      <p>{userInfo.phone}</p>
      <Flex gap="small">
        <Button onClick={() => toggleFavorite(userInfo)}>
          {isFavorite ? "Remove from favorites" : "Add to favorites"}
        </Button>
        {pathname === "/favorites" && (
          <Button type="primary" onClick={() => setIsEditing(true)}>
            Edit
          </Button>
        )}
      </Flex>
      {isEditing && (
        <UserForm
          edit={editFavoriteUser}
          id={userInfo.id}
          name={userInfo.name}
          email={userInfo.email}
          phone={userInfo.phone}
          setIsEditing={setIsEditing}
        />
      )}
    </Card>
  );
}
