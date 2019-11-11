import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import SlideActions from '../../store/ducks/slide';
import {
 Container, SlideBody, SlideHeader, Back, Next 
} from './styles';

function Slide() {
  const dispatch = useDispatch();

  const closeSlideModal = useCallback(() => {
    dispatch(SlideActions.closeModalSlide());
  }, [dispatch]);

  useEffect(() => {
    const listener = (e) => {
      if (e.key === 'Escape') {
        closeSlideModal();
      }
    };
    window.addEventListener('keydown', listener);

    return () => {
      window.removeEventListener('keydown', listener);
    };
  }, [closeSlideModal]);

  function selectNextSlide() {
    dispatch(SlideActions.nextModalSlide());
  }
  function selectPrevSlide() {
    dispatch(SlideActions.prevModalSlide());
  }
  const { files } = JSON.parse(localStorage.getItem('@maphist:project'));
  const index = useSelector((state) => state.slide.activeIndex);
  const selectedImage = files[index];

  return (
    files && (
      <Container>
        <SlideHeader>
          <FontAwesomeIcon icon={faTimes} onClick={closeSlideModal} />
        </SlideHeader>
        <SlideBody>
          <Back title="imagem anterior" onClick={selectPrevSlide} />
          <img
            src={selectedImage && selectedImage.url}
            width="100%"
            alt={selectedImage ? selectedImage.name : 'Imagem MaphIst'}
          />
          <Next title="próxima imagem" onClick={selectNextSlide} />
        </SlideBody>
      </Container>
    )
  );
}

export default Slide;
