import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import {
 Container, TeamList, Team, NewTeam 
} from './styles';
import TeamActions from '../../store/ducks/teams';
import Modal from '../Modal';
import Button from '../../styles/components/Buttons';

function TeamSwitcher() {
  const teams = useSelector((state) => state.teams);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(TeamActions.getTeamsRequest());
  }, []);

  const handleTeamSelect = (team) => {
    dispatch(TeamActions.selectTeam(team));
  };

  const handleNewTeam = () => {
    dispatch(TeamActions.openTeamModal());
  };

  const handleCancelNewTeam = () => {
    dispatch(TeamActions.closeTeamModal());
  };

  return (
    <Container>
      <TeamList>
        {teams.data.map((team) => (
          <Team key={team.id} onClick={() => handleTeamSelect(team)}>
            <img
              alt="Maphist"
              src="https://ui-avatars.com/api/?font-size=0.33&background=7159c1&color=fff&name=maphist"
            />
          </Team>
        ))}
        <NewTeam onClick={() => handleNewTeam()}>Novo</NewTeam>
        {teams.teamModalOpen && (
          <Modal>
            <h1>Criar time</h1>

            <form onSubmit={() => {}}>
              <span>NOME</span>
              <input name="newTeam" />

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
            </form>
          </Modal>
        )}
      </TeamList>
    </Container>
  );
}

TeamSwitcher.propTypes = {
  getTeamsRequest: PropTypes.func,
  selectTeams: PropTypes.func,
  openTeamModal: PropTypes.func,
  closeTeamModal: PropTypes.func,
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
