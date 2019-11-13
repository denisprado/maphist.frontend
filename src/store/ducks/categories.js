import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';

/* Types & Action Creators */

const { Types, Creators } = createActions({
  getCategoriesRequest: null,
  getCategoriesSuccess: ['data'],
  selectCategory: ['category'],
  updateCategoryRequest: null,
  updateCategorySuccess: ['category'],
  getCategorySuccess: ['category'],
  openCategoryModal: null,
  closeCategoryModal: null,
  createCategoryRequest: ['title', 'description'],
  createCategorySuccess: ['category'],
  deleteCategoryRequest: ['category'],
  deleteCategorySuccess: ['id'],
});

export const CategoriesTypes = Types;
export default Creators;

/* Initial State */

export const INITIAL_STATE = Immutable({
  data: [],
  categoryModalOpen: false,
  category: null,
});

/* Reducers */

export const getSuccess = (state, { data }) => state.merge({ data });
export const deleteSuccess = (state, { id }) => {
  localStorage.removeItem('@maphist:category');

  return state.merge({
    data: [...state.data.filter((proj) => proj.id !== id)],
    active: null,
  });
};

export const showCategory = (state, { category }) => {
  localStorage.setItem('@maphist:category', JSON.stringify(category));
  return state.merge({ active: category });
};
export const updateCategory = (state, { category }) => {
  localStorage.setItem('@maphist:category', JSON.stringify(category));
  return state.merge({ active: category });
};
export const logout = (state) => state.merge({ signedIn: false, token: null });
export const openModal = (state) => state.merge({ categoryModalOpen: true });
export const closeModal = (state) => state.merge({ categoryModalOpen: false });
export const createSuccess = (state, { category }) =>
  state.merge({ data: [...state.data, category] });

/* Reducers to types */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.GET_CATEGORIES_SUCCESS]: getSuccess,
  [Types.SELECT_CATEGORY]: showCategory,
  [Types.UPDATE_CATEGORY_SUCCESS]: updateCategory,
  [Types.OPEN_CATEGORY_MODAL]: openModal,
  [Types.CLOSE_CATEGORY_MODAL]: closeModal,
  [Types.CREATE_CATEGORY_SUCCESS]: createSuccess,
  [Types.DELETE_CATEGORY_SUCCESS]: deleteSuccess,
});
