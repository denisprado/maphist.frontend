import { call, put } from 'redux-saga/effects';
import api from '../../services/api';
import FilesActions from '../ducks/files';

export function* uploadFiles({ data, id }) {
  try {
    const response = yield call(api.post, `projects/${id}/files`, data);

    yield put(FilesActions.uploadFilesSuccess(response.data));

    yield put(FilesActions.closeModalUpload());
  } catch (err) {
    console.log(err);
  }
}
