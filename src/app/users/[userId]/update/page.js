"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import style from "../../../addUser/addUser.module.css";

const apiUrl = "http://localhost:3000/api/users";

const UpdateUser = () => {
  const { userId: id } = useParams();

  const [user, setUser] = useState({
    name: "",
    age: "",
    email: "",
  });

  const getUserDetail = async () => {
    try {
      const response = await fetch(`${apiUrl}/${id}`);
      if (!response.ok) throw new Error("Failed to fetch user");
      const json = await response.json();
      setUser(json);
    } catch (error) {
      console.error("Error fetching user:", error);
    }
  };

  useEffect(() => {
    if (id) {
      getUserDetail();
    }
  }, [id]);

  const handleInput = (e) => {
    const { name, value } = e.target;
    setUser((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleUpdateUser = async () => {
    try {
      const res = await fetch(`${apiUrl}/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });

      const result = await res.json();

      if (result.success) {
        alert("User updated successfully");
      }
    } catch (error) {
      console.error("Update error:", error);
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <div className={style.formWrapper}>
      <h1>Update User</h1>
      <div className={style.fieldsWrapper}>
        <div className={style.inputWrapper}>
          <label htmlFor="name">User Name:</label>
          <input
            id="name"
            type="text"
            placeholder="Enter Name"
            name="name"
            value={user.name}
            onChange={handleInput}
          />
        </div>

        <div className={style.inputWrapper}>
          <label htmlFor="age">Age:</label>
          <input
            id="age"
            type="number"
            placeholder="Enter Age"
            name="age"
            value={user.age}
            onChange={handleInput}
          />
        </div>

        <div className={style.inputWrapper}>
          <label htmlFor="email">Email:</label>
          <input
            id="email"
            type="email"
            placeholder="Enter email"
            name="email"
            value={user.email}
            onChange={handleInput}
          />
        </div>

        <button className={style.submitBtn} onClick={handleUpdateUser}>
          Submit
        </button>
      </div>
    </div>
  );
};

export default UpdateUser;
