import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import MembersActions from '../../store/ducks/members';
import Button from '../../styles/components/Buttons';
import Modal from '../Modal';
import { ModalForm } from '../Modal/styles';
import { MembersList } from './styles';

function Members() {
  const dispatch = useDispatch();
  const members = useSelector((state) => state.members);

  useEffect(() => {
    dispatch(MembersActions.getMembersRequest());
  }, []);

  return (
    <Modal size="big">
      <h1>Membros</h1>

      <ModalForm>
        <MembersList>
          {members.data.map((member) => (
            <li key={member.id}>
              <strong>{member.user.name}</strong>
            </li>
          ))}
        </MembersList>
      </ModalForm>
      <Button
        onClick={() => dispatch(MembersActions.closeMembersModal())}
        filled={false}
        color="gray"
      >
        Cancelar
      </Button>
    </Modal>
  );
}

Members.propTypes = {
  closeMembersModal: PropTypes.func.isRequired,
  getMembersRequest: PropTypes.func.isRequired,
};

export default Members;
