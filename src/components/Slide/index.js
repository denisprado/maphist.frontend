import { faWindowClose } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import back from '../../assets/images/back.svg';
import next from '../../assets/images/next.svg';
import SlideActions from '../../store/ducks/slide';
import { Container, SlideBody, SlideHeader } from './styles';

function Slide() {
  const dispatch = useDispatch();
  function closeSlideModal() {
    dispatch(SlideActions.closeModalSlide());
  }
  function selectNextSlide() {
    dispatch(SlideActions.nextModalSlide());
  }
  function selectPrevSlide() {
    dispatch(SlideActions.prevModalSlide());
  }
  const { files } = JSON.parse(localStorage.getItem('@maphist:project'));

  const selectedImage = files[useSelector((state) => state.slide.activeIndex)];

  return (
    files && (
      <Container>
        <SlideHeader>
          <FontAwesomeIcon icon={faWindowClose} onClick={closeSlideModal} />
        </SlideHeader>
        <SlideBody>
          <img
            src={back}
            alt="imagem anterior"
            onClick={selectPrevSlide}
            width="50px"
          />
          <img src={selectedImage.url} width="100%" />

          <img
            src={next}
            alt="próxima imagem"
            onClick={selectNextSlide}
            width="50px"
          />
        </SlideBody>
      </Container>
    )
  );
}

export default Slide;
