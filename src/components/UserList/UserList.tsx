import type { IUser } from "../../types";
import UserCard from "../UserCard/UserCard";
import styles from "./styles.module.css";

interface IUserList {
  users: IUser[];
}

export default function UserList({ users }: IUserList) {
  return (
    <ul className={styles.grid}>
      {users.map((user) => (
        <li key={user.id} className={styles.item}>
          <UserCard userInfo={user} />
        </li>
      ))}
    </ul>
  );
}
