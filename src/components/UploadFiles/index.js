import { FileInput } from '@rocketseat/unform';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import FilesActions from '../../store/ducks/files';
import Button from '../../styles/components/Buttons';
import { ModalForm } from '../Modal/styles';

function UploadFiles() {
  const dispatch = useDispatch();
  const p = useSelector((state) => state.projects.active);

  function handleProgress(progress, event) {}

  function handleSubmitFiles(dataSubmited) {
    const data = new FormData();
    const { files } = dataSubmited;

    Object.values(files).map((f, index) => data.append(`file[${index}]`, f));

    console.log(data.getAll('file'));
    // dispatch(FilesActions.uploadFilesRequest(data, p.id));
  }

  return (
    <ModalForm onSubmit={handleSubmitFiles} encType="multipart/form-data">
      <FileInput
        type="file"
        name="files[]"
        multiple
        onStartProgress={handleProgress}
      />
      <Button type="submit"> Enviar </Button>
    </ModalForm>
  );
}

export default UploadFiles;
