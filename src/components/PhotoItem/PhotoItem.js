import React from "react";
import classes from "./PhotoItem.module.scss";

export default function PhotoItem({ src, title, id, onClick }) {
  return (
    <li className={classes.photo}>
      <div className={classes.imgContainer}>
        <img src={src} alt={title} />
        <button
          type='button'
          className={`btn ${classes.photoLink} ${classes.btnOnImage}`}
          onClick={onClick}
        >
          Open
        </button>
      </div>

      <h5>{title}</h5>
    </li>
  );
}
