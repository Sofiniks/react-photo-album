import React from "react";
import { Link } from "react-router-dom";
import classes from "./Error.module.scss";

export default function Error() {
  return (
    <section className='section'>
      <div className={classes.error}>
        <h1>404</h1>
        <h2>Page not found</h2>
        <h3>
          Sorry, we can't find that page! Don't worry though, everything is
          STILL AWESOME!
        </h3>
        <div>
          <Link to='/' className='btn'>
            To home page
          </Link>
        </div>
      </div>
    </section>
  );
}
