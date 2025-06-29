"use client";
const DeleteUser = (props) => {
  const { id } = props;

  const handleDeleteUser = async () => {
    let result = await fetch("http://localhost:3000/api/users/" + id, {
      method: "delete",
    });

    result = await result.json();
    if (result.success) {
      alert("user deleted successfully");
    }
  };

  return (
    <div>
      <button onClick={handleDeleteUser}>Delete</button>
    </div>
  );
};

export default DeleteUser;
