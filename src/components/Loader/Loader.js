import React from "react";
import classes from "./Loader.module.scss";
import img from "../../assets/colorful-loader-gif-transparent.gif";

export default function Loader() {
  return (
    <section className='section'>
      <div className={classes.loader}>
        <img src={img} alt='Loading' />
        <h2>Loading...</h2>
      </div>
    </section>
  );
}
