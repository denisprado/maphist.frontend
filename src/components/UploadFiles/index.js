import React from 'react';

import { ModalForm, InputModal } from '../Modal/styles';

const UploadFiles = () => (
  <form
    method="POST"
    action="http://localhost:3333/files"
    encType="multipart/form-data"
  >
    <input type="file" name="file[]" multiple />
    <button type="submit"> Submit </button>
  </form>
);

export default UploadFiles;
