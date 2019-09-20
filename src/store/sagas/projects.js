import { call, put } from 'redux-saga/effects';
import { actions as toastrActions } from 'react-redux-toastr';
import api from '../../services/api';
import ProjectsActions from '../ducks/projects';

export function* getProjects() {
  const response = yield call(api.get, 'projects');

  yield put(ProjectsActions.getProjectsSuccess(response.data));
}

export function* getProject({ id }) {
  const response = yield call(api.get, `projects/${id}`);
  yield put(ProjectsActions.getProjectSuccess(response.data));
}

export function* createProject({
 title, description, lat, lng 
}) {
  try {
    const response = yield call(api.post, 'projects', {
      title,
      description,
      lat,
      lng,
    });
    yield put(ProjectsActions.createProjectSuccess(response.data));
    yield put(ProjectsActions.closeProjectModal());
  } catch (err) {
    yield put(
      toastrActions.add({
        type: 'error',
        title: 'error',
        message: 'Houve um erro, tente novamente',
      }),
    );
  }
}
