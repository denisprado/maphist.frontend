import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import FilesActions from '../../store/ducks/files';
import Button from '../../styles/components/Buttons';
import { ModalForm } from '../Modal/styles';

function UploadFiles() {
  const dispatch = useDispatch();
  const p = useSelector((state) => state.projects.active);
  const [files, setFiles] = useState([]);

  function onInput(e) {
    console.log(e.target.files);
    setFiles(e.target.files);
  }

  function onSubmit(e) {
    e.preventDefault();
    // Object.values(files).map((f, index) => data.append(`file[${index}]`, f));

    // console.log(data.getAll('file'));
    dispatch(FilesActions.uploadFilesRequest(files, p.id));
  }

  return (
    <ModalForm onSubmit={onSubmit} encType="multipart/form-data">
      <input
        type="file"
        name="files[]"
        id="files"
        multiple
        value={files}
        onChange={onInput}
      />
      <Button type="submit"> Enviar </Button>
    </ModalForm>
  );
}

export default UploadFiles;
