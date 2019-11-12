import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';

/* Types & Action Creators */

const { Types, Creators } = createActions({
  getProjectsRequest: [null],
  getProjectsSuccess: ['data'],
  setProjectFilter: ['filter'],
  selectProject: ['project'],
  updateProjectRequest: null,
  updateProjectSuccess: ['project'],
  getProjectSuccess: ['project'],
  openProjectModal: null,
  closeProjectModal: null,
  createProjectRequest: [
    'title',
    'description',
    'lat',
    'lng',
    'startYear',
    'endYear',
    'category_id',
  ],
  createProjectSuccess: ['project'],
  deleteProjectRequest: ['project'],
  deleteProjectSuccess: ['id'],
  setMapView: null,
  setListView: null,
});

export const ProjectsTypes = Types;
export default Creators;

/* Initial State */

export const INITIAL_STATE = Immutable({
  data: [],
  projectModalOpen: false,
  project: null,
  mapView: false,
  filter: { date: [1700, 2019] },
});

/* Reducers */

export const getSuccess = (state, { data }) => state.merge({ data });
export const deleteSuccess = (state, { id }) => {
  localStorage.removeItem('@maphist:project');

  return state.merge({
    data: [...state.data.filter((proj) => proj.id !== id)],
    active: null,
  });
};

export const showProject = (state, { project }) => {
  localStorage.setItem('@maphist:project', JSON.stringify(project));
  return state.merge({ active: project });
};
export const updateProject = (state, { project }) => {
  localStorage.setItem('@maphist:project', JSON.stringify(project));
  return state.merge({ active: project });
};
export const logout = (state) => state.merge({ signedIn: false, token: null });
export const openModal = (state) => state.merge({ projectModalOpen: true });
export const closeModal = (state) => state.merge({ projectModalOpen: false });
export const createSuccess = (state, { project }) =>
  state.merge({ data: [...state.data, project] });
export const setMapTrue = (state) => state.merge({ mapView: true });
export const setListTrue = (state) => state.merge({ mapView: false });
export const setFilter = (state, { filter }) => state.merge({ filter });

/* Reducers to types */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.GET_PROJECTS_SUCCESS]: getSuccess,
  [Types.SELECT_PROJECT]: showProject,
  [Types.SET_MAP_VIEW]: setMapTrue,
  [Types.SET_LIST_VIEW]: setListTrue,
  [Types.UPDATE_PROJECT_SUCCESS]: updateProject,
  [Types.OPEN_PROJECT_MODAL]: openModal,
  [Types.CLOSE_PROJECT_MODAL]: closeModal,
  [Types.CREATE_PROJECT_SUCCESS]: createSuccess,
  [Types.DELETE_PROJECT_SUCCESS]: deleteSuccess,
  [Types.SET_PROJECT_FILTER]: setFilter,
});
