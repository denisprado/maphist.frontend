import { FileInput } from "@rocketseat/unform";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import FilesActions from "../../store/ducks/files";
import Button from "../../styles/components/Buttons";
import { ModalForm } from "../Modal/styles";

function UploadFiles() {
  const dispatch = useDispatch();
  const p = useSelector(state => state.projects.active);

  function handleProgress(progress, event) {
    console.log(progress + " Event:" + event);
  }

  function handleSubmitFiles(data) {
    dispatch(FilesActions.uploadFilesRequest(data, p.id));
  }

  return (
    <ModalForm onSubmit={handleSubmitFiles} encType="multipart/form-data">
      <FileInput
        type="file"
        name="file[]"
        multiple
        onStartProgress={handleProgress}
      />
      <Button type="submit"> Enviar </Button>
    </ModalForm>
  );
}

export default UploadFiles;
