import Link from "next/link";
import style from "./users.module.css";
import DeleteUser from "./DeleteUser";

const apiUrl = "http://localhost:3000/api/users";

async function getUsers() {
  const response = await fetch(apiUrl);
  const json = await response.json();
  return json;
}

const UsersList = async () => {
  const users = await getUsers();

  return (
    <div className={style.usersWrapper}>
      {users.map((user) => (
        <div key={user?.id}>
          <li>
            <div className={style.listItemWrapper}>
              <p className={style.field}>Name:</p>
              <Link href={`/users/${user?.id}`}>{user?.name}</Link>
              <Link href={`/users/${user?.id}/update`}>Edit</Link>
              <DeleteUser id={user?.id} />
            </div>
          </li>
        </div>
      ))}
    </div>
  );
};

export default UsersList;
