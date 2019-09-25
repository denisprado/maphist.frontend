import { createReducer, createActions } from "reduxsauce";
import Immutable from "seamless-immutable";

/* Types & Action Creators */

const { Types, Creators } = createActions({
  getProjectsRequest: null,
  getProjectsSuccess: ["data"],
  selectProject: ["project"],
  getProjectSuccess: ["project"],
  openProjectModal: null,
  closeProjectModal: null,
  createProjectRequest: [
    "title",
    "description",
    "lat",
    "lng",
    "startYear",
    "endYear"
  ],
  createProjectSuccess: ["project"],
  deleteProjectRequest: ["project"],
  deleteProjectSuccess: ["id"]
});

export const ProjectsTypes = Types;
export default Creators;

/* Initial State */

export const INITIAL_STATE = Immutable({
  data: [],
  projectModalOpen: false,
  project: JSON.parse(localStorage.getItem("@maphist:project")) || null
});

/* Reducers */

export const getSuccess = (state, { data }) => state.merge({ data });
export const deleteSuccess = (state, { id }) => {
  localStorage.removeItem("@maphist:project");
  console.log("Projeto deleteado:" + id);
  return state.merge({
    data: [...state.data.filter(proj => proj.id !== id)],
    active: null
  });
};

export const showProject = (state, { project }) => {
  localStorage.setItem("@maphist:project", JSON.stringify(project));
  return state.merge({ active: project });
};
export const logout = state => state.merge({ signedIn: false, token: null });
export const openModal = state => state.merge({ projectModalOpen: true });
export const closeModal = state => state.merge({ projectModalOpen: false });
export const createSuccess = (state, { project }) =>
  state.merge({ data: [...state.data, project] });

/* Reducers to types */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.GET_PROJECTS_SUCCESS]: getSuccess,
  [Types.SELECT_PROJECT]: showProject,
  [Types.OPEN_PROJECT_MODAL]: openModal,
  [Types.CLOSE_PROJECT_MODAL]: closeModal,
  [Types.CREATE_PROJECT_SUCCESS]: createSuccess,
  [Types.DELETE_PROJECT_SUCCESS]: deleteSuccess
});
