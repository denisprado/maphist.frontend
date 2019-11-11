import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import {
 Container, TeamList, Team, NewTeam, Logout 
} from './styles';

import { ModalForm, ModalInput } from '../Modal/styles';
import TeamActions from '../../store/ducks/teams';
import AuthActions from '../../store/ducks/auth';
import Modal from '../Modal';
import Button from '../../styles/components/Buttons';

function TeamSwitcher({ show }) {
  const teams = useSelector((state) => state.teams);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(TeamActions.getTeamsRequest());
  }, [dispatch]);

  const handleTeamSelect = (team) => {
    dispatch(TeamActions.selectTeam(team));
  };

  const handleNewTeam = () => {
    dispatch(TeamActions.openTeamModal());
  };

  const handleNewTeamSubmit = (data) => {
    dispatch(TeamActions.createTeamRequest(data.name));
  };

  const handleCancelNewTeam = () => {
    dispatch(TeamActions.closeTeamModal());
  };

  const signOut = () => {
    dispatch(AuthActions.signOut());
  };

  return (
    <>
      {show && (
        <Container>
          <TeamList>
            {teams.data.map((team) => (
              <Team key={team.id} onClick={() => handleTeamSelect(team)}>
                <img
                  alt={team.name}
                  src={
                    'https://ui-avatars.com/api/?font-size=0.33&background=7159c1&color=fff&name='
                    + team.name
                  }
                />
              </Team>
            ))}
            <NewTeam onClick={() => handleNewTeam()}>Novo</NewTeam>
            {teams.teamModalOpen && (
              <Modal>
                <h1>Criar time</h1>

                <ModalForm onSubmit={handleNewTeamSubmit}>
                  <span>NOME</span>
                  <ModalInput name="name" />

                  <Button size="big" type="submit">
                    Salvar
                  </Button>
                  <Button
                    size="small"
                    color="gray"
                    onClick={() => handleCancelNewTeam()}
                  >
                    Cancelar
                  </Button>
                </ModalForm>
              </Modal>
            )}
          </TeamList>
          <Logout onClick={signOut}>Sair</Logout>
        </Container>
      )}
    </>
  );
}

TeamSwitcher.propTypes = {
  getTeamsRequest: PropTypes.func,
  selectTeams: PropTypes.func,
  openTeamModal: PropTypes.func,
  closeTeamModal: PropTypes.func,
  createTeamRequest: PropTypes.func,
  signOut: PropTypes.func,
  teams: PropTypes.shape({
    data: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string,
      }),
    ),
  }),
};

export default TeamSwitcher;
