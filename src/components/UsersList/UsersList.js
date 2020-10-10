import React, { useContext } from "react";
import { PhotoContext } from "../../context";
import User from "../../components/User/User";
import Loader from "../Loader/Loader";
import classes from "./UsersList.module.scss";

export default function UsersList() {
  const context = useContext(PhotoContext);
  const { users, loading } = context;

  const usersList = users.map((user) => {
    return <User key={user.id} slug={user.id} name={user.name} />;
  });

  if (loading) {
    return <Loader />;
  }
  return (
    <section className='section'>
      <h2 className='section-title'>Users List</h2>
      <ul className={classes.usersList}>{usersList}</ul>
    </section>
  );
}
