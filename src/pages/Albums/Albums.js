import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { PhotoContext } from "../../context";
import AlbumItem from "../../components/AlbumItem/AlbumItem";
import Loader from "../../components/Loader/Loader";
import Error from "../../pages/Error/Error";
import classes from "./Albums.module.scss";

export default function Albums() {
  let { albumid } = useParams();

  const context = useContext(PhotoContext);
  const { albums, loading, photos } = context;

  const albumsList = albums
    .filter((album) => album.userId === parseInt(albumid))
    .map((album) => {
      return (
        <AlbumItem
          key={album.id}
          id={album.id}
          slug={albumid}
          coverPhotos={photos}
        />
      );
    });

  if (loading) {
    return <Loader />;
  } else if (isNaN(albumid)) {
    return <Error />;
  }
  return (
    <section className='section'>
      <h2 className='section-title'>Albums</h2>
      <ul className={classes.albumsList}>{albumsList}</ul>
    </section>
  );
}
