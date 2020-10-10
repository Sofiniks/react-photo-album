import React from "react";
import { useState } from "react";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import classes from "./Modal.module.scss";

export default function Modal({ photo, id, close }) {
  const selectedPhoto = photo.find((item) => item.props.id === id);
  const [sliderPhoto, setSliderPhoto] = useState(selectedPhoto);
  const maxPhotoId = photo[photo.length - 1].props.id;
  const minPhotoId = photo[0].props.id;

  const handleNext = () => {
    const photoId = sliderPhoto.props.id;
    let nextPhoto;
    if (photoId === maxPhotoId) {
      nextPhoto = photo.find((item) => item.props.id === minPhotoId);
    } else {
      nextPhoto = photo.find((item) => item.props.id === photoId + 1);
    }
    setSliderPhoto(nextPhoto);
  };

  const handlePrev = () => {
    const photoId = sliderPhoto.props.id;
    let prevPhoto;
    if (photoId === minPhotoId) {
      prevPhoto = photo.find((item) => item.props.id === maxPhotoId);
    } else {
      prevPhoto = photo.find((item) => item.props.id === photoId - 1);
    }
    setSliderPhoto(prevPhoto);
  };

  return (
    <div className={classes.overlay} onClick={close} id='overlay'>
      <div className={classes.modal}>
        <button className={`${classes.btnPrev} btn`} onClick={handlePrev}>
          <AiOutlineArrowLeft />
        </button>
        <button
          onClick={close}
          className={`${classes.btnClose} btn`}
          id='closeBtn'
        >
          X
        </button>
        <button className={`${classes.btnNext} btn`} onClick={handleNext}>
          <AiOutlineArrowRight />
        </button>
        <img src={sliderPhoto.props.src} alt={sliderPhoto.props.title} />
      </div>
    </div>
  );
}
