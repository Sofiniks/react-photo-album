import React, { useContext, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { PhotoContext } from "../../context";
import PhotoItem from "../../components/PhotoItem/PhotoItem";
import Modal from "../../components/Modal/Modal";
import Loader from "../../components/Loader/Loader";
import Error from "../../pages/Error/Error";
import classes from "./Photos.module.scss";

export default function Photos() {
  let { albumid, photosid } = useParams();
  const [modal, setModal] = useState(false);
  const [photoId, setPhotoId] = useState(0);

  const handleOpen = (id) => {
    setModal(true);
    setPhotoId(id);
  };

  const handleClose = (e) => {
    if (e.target.id === "overlay" || e.target.id === "closeBtn") {
      setModal(false);
    }
    return;
  };

  const context = useContext(PhotoContext);
  const { photos, loading } = context;

  const photosList = photos
    .filter((photo) => photo.albumId === parseInt(photosid))
    .map((photo) => {
      return (
        <PhotoItem
          key={photo.id}
          src={photo.url}
          title={photo.title}
          id={photo.id}
          onClick={() => handleOpen(photo.id)}
        />
      );
    });

  if (loading) {
    return <Loader />;
  } else if (isNaN(albumid) || isNaN(photosid)) {
    return <Error />;
  }
  return (
    <div className={classes.photoSection}>
      <section className='section'>
        <h2 className='section-title'>Photos</h2>
        <div className={classes.navToAlbums}>
          <Link to={`/${albumid}`} className='btn'>
            To albums
          </Link>
        </div>
        <ul className={classes.photosList}>{photosList}</ul>
      </section>
      {modal ? (
        <Modal photo={photosList} id={photoId} close={handleClose} />
      ) : null}
    </div>
  );
}
