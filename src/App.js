import React, { useState } from 'react';
import Modal from 'react-modal';
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';
import './App.css';
import shah from './Assets/alia.jpeg';
import kat from './Assets/kat.jpeg';
import hrithik from './Assets/hrithik.jpeg';
import alia from './Assets/shah.jpeg';
import vijay from './Assets/vijay.jpeg';
import jha from './Assets/jhanvi.jpeg';
import kri from './Assets/krithi.jpeg';
import vick from './Assets/vicky.jpeg';
import mru from './Assets/mrunal.jpeg';
import ran from './Assets/ranbir.jpeg';
const images = [shah, kat, hrithik, alia,vijay,jha,kri,vick,mru,ran];

Modal.setAppElement('#root');

const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openModal = (index) => {
    setCurrentIndex(index);
    setIsOpen(true);
  };

  const closeModal = () => setIsOpen(false);

  const showNext = () => setCurrentIndex((prev) => (prev + 1) % images.length);
  const showPrev = () => setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);

  return (
    <div className="app-container">
      <h1 className="gallery-title"><center>Image Galleries</center> </h1>

      <div className="gallery-container">
        {images.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Gallery ${index}`}
            onClick={() => openModal(index)}
            className="thumbnail"
          />
        ))}
      </div>

      <Modal isOpen={isOpen} onRequestClose={closeModal} className="modal" overlayClassName="overlay">
        <button className="nav-button left" onClick={showPrev}>⟵</button>
        <Zoom>
          <img src={images[currentIndex]} alt="Zoom" className="modal-image" />
        </Zoom>
        <button className="nav-button right" onClick={showNext}>⟶</button>
        <button className="close-button" onClick={closeModal}>✕</button>
      </Modal>
    </div>
  );
};

export default App;
