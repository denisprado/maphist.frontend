import { call, put } from 'redux-saga/effects';
import { actions as toastrActions } from 'react-redux-toastr';
import { push } from 'connected-react-router';
import api from '../../services/api';

import FilesActions from '../ducks/files';

export function* uploadFiles({ data, id }) {
  try {
    console.log(data + id);
    const response = yield call(api.post, `projects/${id}/files`, {
      file: data,
      headers: {
        'content-type': 'multipart/form-data',
      },
    });
    console.log('response: ' + response.data);
    yield put(FilesActions.uploadFilesSuccess(response.data));
    yield put(FilesActions.closeModalUpload());
  } catch (err) {
    console.log(err);
  }
}
