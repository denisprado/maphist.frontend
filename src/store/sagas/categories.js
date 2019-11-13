import { call, put } from 'redux-saga/effects';
import { actions as toastrActions } from 'react-redux-toastr';
import api from '../../services/api';

import CategoriesActions from '../ducks/categories';

export function* getCategories() {
  const response = yield call(api.get, 'categories');
  yield put(CategoriesActions.getCategoriesSuccess(response.data));
}

export function* updateCategory() {
  const { id } = JSON.parse(localStorage.getItem('@maphist:project'));
  const response = yield call(api.get, `categories/${id}`);

  yield put(CategoriesActions.updateCategorySuccess(response.data));
}

export function* createCategory({ title, description }) {
  try {
    const response = yield call(api.post, 'categories', {
      title,
      description,
    });

    yield put(CategoriesActions.createCategorySuccess(response.data));
    yield put(CategoriesActions.closeCategoryModal());
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

export function* deleteCategory({ project }) {
  try {
    yield call(api.delete, `categories/${project.id}`);
    yield put(CategoriesActions.deleteCategorySuccess(project.id));
  } catch (err) {
    console.log(err);
  }
}
