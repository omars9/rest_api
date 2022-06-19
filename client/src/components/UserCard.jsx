import React from "react";
import { Card, Button } from "react-bootstrap";
import { useDispatch } from "react-redux/es/exports";
import { deleteUser, getUsers } from "../redux/actions";
import EditUser from "./EditUser";

const UserCard = ({ user }) => {
  const dispatch = useDispatch();
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Title>{user.fullName}</Card.Title>
          <Card.Text>{user.phone}</Card.Text>
          <Card.Text>{user.email}</Card.Text>
          <Button
            variant="primary"
            onClick={() => {
              dispatch(deleteUser(user._id));
              dispatch(getUsers());
            }}
          >
            delete
          </Button>
          <EditUser user={user} />
        </Card.Body>
      </Card>
    </div>
  );
};

export default UserCard;
