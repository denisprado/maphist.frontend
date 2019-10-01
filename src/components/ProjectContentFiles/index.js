import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import keysToCamel from '../../resources/helpers';
import { Container, Thumb } from './styles';
import Modal from '../Modal';
import SlideActions from '../../store/ducks/slide';
import Slide from '../Slide';

function ProjectContentFiles() {
  const dispatch = useDispatch();
  function openSlideModal(index) {
    console.log(index);
    dispatch(SlideActions.openModalSlide(index));
  }

  const p = keysToCamel(useSelector((state) => state.projects.active));
  const { modalSlideOpen } = useSelector((state) => state.files);

  const { files } = p;

  return p ? (
    <Container>
      {files
        && files.map((file, index) => (
          <Thumb
            key={file.id}
            image={file.url}
            onClick={() => openSlideModal(index)}
          />
        ))}

      {modalSlideOpen ? (
        <Modal size="slide">
          <Slide />
        </Modal>
      ) : null}
    </Container>
  ) : null;
}

export default ProjectContentFiles;
