import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../redux/actions";
import UserCard from "./UserCard";

const UserListe = () => {
  const { loading, users } = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsers());
  }, []);
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        flexWrap: "wrap",
        marginTop: "5%",
      }}
    >
      {loading ? (
        <h3>loading...</h3>
      ) : (
        <>
          {users.map((el) => (
            <UserCard user={el} />
          ))}
        </>
      )}
    </div>
  );
};

export default UserListe;
