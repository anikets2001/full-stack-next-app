import style from "../users.module.css";

const apiUrl = "http://localhost:3000/api/users";

async function getUsers(userId) {
  const response = await fetch(`${apiUrl}/${userId}`);
  const json = await response.json();
  return json;
}

const UserDetail = async ({ params }) => {
  const { userId } = params;

  const user = await getUsers(userId);
  const { name, age, email } = user[0];

  return (
    <div className={style.usersWrapper}>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
      <p>Email: {email}</p>
    </div>
  );
};

export default UserDetail;
