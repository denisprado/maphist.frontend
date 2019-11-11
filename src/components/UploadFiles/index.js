import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import FilesActions from '../../store/ducks/files';
import Button from '../../styles/components/Buttons';

function UploadFiles() {
  const dispatch = useDispatch();
  const p = useSelector((state) => state.projects.active);
  const [files, setFiles] = useState([]);

  function onInput(e) {
    setFiles(e.target.files);
  }

  function onSubmit(e) {
    const data = new FormData();

    // loop through files
    for (let i = 0; i < files.length; i++) {
      // get item
      data.append('file', files[i], files[i].name);
      // or
    }
    dispatch(FilesActions.uploadFilesRequest(data, p.id));
  }

  useEffect(() => {
    const listener = (e) => {
      if (e.key === 'Escape') {
        dispatch(FilesActions.closeModalUpload());
      }
    };
    window.addEventListener('keydown', listener);

    return () => {
      window.removeEventListener('keydown', listener);
    };
  }, [dispatch]);

  return (
    <ModalForm onSubmit={onSubmit} encType="multipart/form-data">
      <input
        type="file"
        name="files[]"
        id="files"
        multiple
        onChange={onInput}
      />
      <Button type="submit"> Enviar </Button>
      <Button
        onClick={() => {
          dispatch(FilesActions.closeModalUpload());
        }}
        size="small"
        color="gray"
      >
        Cancelar
      </Button>
    </ModalForm>
  );
}

export default UploadFiles;
