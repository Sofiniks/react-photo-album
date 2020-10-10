import React from "react";
import { Link } from "react-router-dom";
import classes from "./AlbumItem.module.scss";

export default function AlbumItem(props) {
  const { coverPhotos, id, slug } = props;

  const albumCover = coverPhotos.filter((photo) => photo.albumId === id);
  const albumCount = albumCover.length;

  return (
    <li key={id} className={classes.album}>
      <div>
        <h4>{albumCover[0].title}</h4>
        <img src={albumCover[0].url} alt={albumCover[0].title} />

        <p>Photos in album: {albumCount}</p>
        <Link className='btn' to={`${slug}/${id}`}>
          Go to album
        </Link>
      </div>
    </li>
  );
}
