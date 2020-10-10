import React from "react";
import { Link } from "react-router-dom";
import classes from "./User.module.scss";

export default function User({ slug, name }) {
  return (
    <li className={classes.user}>
      <div>
        <h3>{name}</h3>
        <Link className='btn' to={`/${slug}`}>
          Albums
        </Link>
      </div>
    </li>
  );
}
