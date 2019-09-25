import { createReducer, createActions } from "reduxsauce";
import Immutable from "seamless-immutable";

/* Types & Action Creators */

const { Types, Creators } = createActions({
  uploadFilesRequest: ["data", "id"],
  uploadFilesSuccess: ["data"],
  openModalUpload: null,
  closeModalUpload: null
});

export const FilesTypes = Types;
export default Creators;

/* Initial State */

export const INITIAL_STATE = Immutable({
  data: [],
  modalUploadOpen: false
});

/* Reducers */

export const uploadSuccess = (state, { data }) => state.merge({ data });
export const openModal = state => state.merge({ modalUploadOpen: true });
export const closeModal = state => state.merge({ modalUploadOpen: false });

/* Reducers to types */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.UPLOAD_FILES_SUCCESS]: uploadSuccess,
  [Types.OPEN_MODAL_UPLOAD]: openModal,
  [Types.CLOSE_MODAL_UPLOAD]: closeModal
});
