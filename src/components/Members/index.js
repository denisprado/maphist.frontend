/* eslint-disable linebreak-style */
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Select from 'react-select';
import MembersActions from '../../store/ducks/members';
import Button from '../../styles/components/Buttons';
import Modal from '../Modal';
import { ModalForm, ModalInput } from '../Modal/styles';
import { MembersList } from './styles';
import api from '../../services/api';
import Can from '../Can';

function Members() {
  const dispatch = useDispatch();
  const members = useSelector((state) => state.members);

  const [roles, setRoles] = useState([]);

  async function getRoles() {
    const response = await api.get('roles');
    return setRoles(response.data);
  }

  const handleRolesChange = (id, newRoles) => {
    dispatch(MembersActions.updateMemberRequest(id, newRoles));
  };

  const handleInviteSubmit = ({ invite }) => {
    dispatch(MembersActions.inviteMemberRequest(invite));
  };

  useEffect(() => {
    getRoles();
  }, []);

  useEffect(() => {
    dispatch(MembersActions.getMembersRequest());
  }, [dispatch]);

  return (
    <Modal size="big">
      <h1>Membros</h1>
      <Can checkPermission="invites_create">
        <ModalForm onSubmit={handleInviteSubmit}>
          <ModalInput name="invite" placeholder="Convidar para o time" />
          <Button type="submit">Enviar</Button>
        </ModalForm>
      </Can>
      <ModalForm>
        <MembersList>
          {members.data.map((member) => (
            <li key={member.id}>
              <strong>{member.user.name}</strong>
              <Can checkRole="administrator">
                {(can) => (
                  <Select
                    isMulti
                    isDisabled={!can}
                    options={roles}
                    getOptionLabel={(role) => role.name}
                    getOptionValue={(role) => role.id}
                    value={member.roles}
                    onChange={(value) => handleRolesChange(member.id, value)}
                  />
                )}
              </Can>
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

export default Members;
