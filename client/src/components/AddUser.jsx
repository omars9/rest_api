import React from "react";
import { useState } from "react";
import { addUser } from "../redux/actions";
import { useDispatch } from "react-redux/es/exports";
const AddUser = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const dispatch = useDispatch();
  const handleSumbit = (e) => {
    e.preventDefault();
    const newUser = {
      fullName,
      email,
      phone,
    };
    dispatch(addUser(newUser));
  };
  return (
    <div>
      <form onSubmit={handleSumbit}>
        <label>Name</label>
        <input
          type="text"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
        />
        <label>email</label>
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label>phone</label>
        <input
          type="text"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <button type="submit">confirm</button>
      </form>
    </div>
  );
};

export default AddUser;
