import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Modal from '../Modal';
import CategoriesActions from '../../store/ducks/categories';
import { ModalForm, ModalInput } from '../Modal/styles';
import Button from '../../styles/components/Buttons';

// import { Container } from './styles';

function CategoryCreateModal() {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.categories);

  function handleNewCategorySubmit({ title, description }) {
    dispatch(CategoriesActions.createCategoryRequest(title, description));
  }

  useEffect(() => {
    const listener = (e) => {
      if (e.key === 'Escape') {
        dispatch(CategoriesActions.closeCategoryModal());
      }
    };
    window.addEventListener('keydown', listener);

    return () => {
      window.removeEventListener('keydown', listener);
    };
  }, [dispatch]);

  return categories.categoryModalOpen ? (
    <>
      <Modal size="big">
        <h1>Criar categoria</h1>
        <ModalForm onSubmit={handleNewCategorySubmit}>
          <span>Nome</span>
          <ModalInput name="title" id="title" />

          <span>Descrição</span>
          <ModalInput multiline rows="5" name="description" />

          <Button size="big" type="submit">
            Salvar
          </Button>
          <Button
            onClick={() => {
              dispatch(CategoriesActions.closeCategoryModal());
            }}
            size="small"
            color="gray"
          >
            Cancelar
          </Button>
        </ModalForm>
      </Modal>
    </>
  ) : null;
}

export default CategoryCreateModal;
