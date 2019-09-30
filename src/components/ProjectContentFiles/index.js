import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { faWindowClose } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import keysToCamel from '../../resources/helpers';
import { Container, Thumb } from './styles';
import Modal from '../Modal';
import FilesActions from '../../store/ducks/files';

function ProjectContentFiles() {
  const dispatch = useDispatch();
  function openSlideModal() {
    dispatch(FilesActions.openModalSlide());
  }
  function closeSlideModal() {
    dispatch(FilesActions.closeModalSlide());
  }

  const p = keysToCamel(useSelector((state) => state.projects.active));
  const { modalSlideOpen } = useSelector((state) => state.files);

  const { files } = p;

  return p ? (
    <Container>
      {files
        && files.map((file) => (
          <Thumb key={file.id} image={file.url} onClick={openSlideModal} />
        ))}

      {modalSlideOpen ? (
        <Modal size="big">
          Slide
          <FontAwesomeIcon icon={faWindowClose} onClick={closeSlideModal} />
        </Modal>
      ) : null}
    </Container>
  ) : null;
}

export default ProjectContentFiles;
