import axios from "axios";
import { ADD_USERS, DELETE_USERS, EDIT_USERS, GET_USERS } from "./actiontypes";

export const getUsers = () => async (dispatch) => {
  try {
    const res = await axios.get("/get");
    dispatch({
      type: GET_USERS,
      payload: res.data,
    });
  } catch (error) {
    alert("get error");
  }
};

export const addUser = (newUser) => async (dispatch) => {
  try {
    const { data } = await axios.post("/add", newUser);
    dispatch({
      type: ADD_USERS,
      payload: data,
    });
  } catch (error) {
    alert("post error");
  }
};

export const deleteUser = (id) => async (dispatch) => {
  try {
    await axios.delete(`/delete/${id}`);
    dispatch({
      type: DELETE_USERS,
      payload: id,
    });
  } catch (error) {
    alert("delete error");
  }
};
export const editUser = (editedUser) => async (dispatch) => {
  try {
    const res = await axios.put(`/update/${editedUser.id}`, editedUser);
    dispatch({
      type: EDIT_USERS,
      payload: res.data,
    });
  } catch (error) {
    alert("edit error");
  }
};
