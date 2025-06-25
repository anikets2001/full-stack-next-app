"use client";
import { useState } from "react";
import style from "./addUser.module.css";

const AddUser = () => {
  const [data, setData] = useState({
    name: "",
    age: 0,
    email: "",
  });


  function handleInput(e) {
    const { name, value } = e.target;
    setData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  async function handleSubmit() {
    let response = await fetch("http://localhost:3000/api/users", {
      method: "POST",
      body: JSON.stringify(data),
    });
    response = await response.json();
    console.log(response);
  }

  return (
    <div className={style.formWrapper}>
      <h1>Add New User</h1>
      <div className={style.fieldsWrapper}>
        <div className={style.inputWrapper}>
          <label htmlFor="name">User Name:</label>
          <input
            id="name"
            type="text"
            placeholder="Enter Name"
            name="name"
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
            onChange={handleInput}
          />
        </div>
        <button className={style.submitBtn} onClick={handleSubmit}>
          Submit
        </button>
      </div>
    </div>
  );
};

export default AddUser;