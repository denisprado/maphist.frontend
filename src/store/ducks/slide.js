import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';

/* Types & Action Creators */

const { Types, Creators } = createActions({
  openModalSlide: ['index'],
  closeModalSlide: null,
  nextModalSlide: null,
  prevModalSlide: null,
});

export const FilesTypes = Types;
export default Creators;

/* Initial State */

export const INITIAL_STATE = Immutable({
  data: null,
  modalSlideOpen: false,
  activeIndex: 0,
});

/* Reducers */

export const openSlideModal = (state, { index }) =>
  state.merge({
    modalSlideOpen: true,
    activeIndex: index,
    data: JSON.parse(localStorage.getItem('@maphist:project')),
  });
export const closeSlideModal = (state) => state.merge({ modalSlideOpen: false });
export const nextSlideModal = (state) =>
  (state.activeIndex === state.data.files.length - 1
    ? state.merge({ activeIndex: 0 })
    : state.merge({ activeIndex: state.activeIndex + 1 }));
export const prevSlideModal = (state) =>
  (state.activeIndex === 0
    ? state.merge({ activeIndex: state.data.files.length - 1 })
    : state.merge({ activeIndex: state.activeIndex - 1 }));
/* Reducers to types */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.OPEN_MODAL_SLIDE]: openSlideModal,
  [Types.CLOSE_MODAL_SLIDE]: closeSlideModal,
  [Types.NEXT_MODAL_SLIDE]: nextSlideModal,
  [Types.PREV_MODAL_SLIDE]: prevSlideModal,
});
