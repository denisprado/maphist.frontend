import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';

/* Types & Action Creators */

const { Types, Creators } = createActions({
  uploadFilesRequest: ['data', 'id'],
  uploadFilesSuccess: ['data'],
  openModalUpload: null,
  closeModalUpload: null,
  openModalSlide: null,
  closeModalSlide: null,
});

export const FilesTypes = Types;
export default Creators;

/* Initial State */

export const INITIAL_STATE = Immutable({
  data: [],
  modalUploadOpen: false,
  modalSlideOpen: false,
});

/* Reducers */

export const uploadSuccess = (state, { data }) => state.merge({ data });
export const openUploadModal = (state) => state.merge({ modalUploadOpen: true });
export const closeUploadModal = (state) =>
  state.merge({ modalUploadOpen: false });
export const openSlideModal = (state) => state.merge({ modalSlideOpen: true });
export const closeSlideModal = (state) => state.merge({ modalSlideOpen: false });

/* Reducers to types */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.UPLOAD_FILES_SUCCESS]: uploadSuccess,
  [Types.OPEN_MODAL_UPLOAD]: openUploadModal,
  [Types.CLOSE_MODAL_UPLOAD]: closeUploadModal,
  [Types.OPEN_MODAL_SLIDE]: openSlideModal,
  [Types.CLOSE_MODAL_SLIDE]: closeSlideModal,
});
