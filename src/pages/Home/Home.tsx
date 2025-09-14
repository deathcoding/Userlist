import UserList from "../../components/UserList/UserList";
import { API_BASE_URL, USERS_ENDPOINT } from "../../constants";
import useFetch from "../../hooks/useFetch";
import type { IUser } from "../../types";

export default function Home() {
  const url = `${API_BASE_URL}${USERS_ENDPOINT}`;
  const { data: users, loading, error } = useFetch<IUser[]>(url);

  if (loading) {
    return <p>Loading, please wait...</p>;
  }

  if (error) {
    return <p>Error: {error || "Something went wrong"}</p>;
  }

  if (!users) {
    return <p>No data to display</p>;
  }

  return (
    <div>
      <UserList users={users} />
    </div>
  );
}
